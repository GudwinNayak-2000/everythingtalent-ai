"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [
    { start: { lat: 64.2008, lng: -149.4937, label: "Alaska" }, end: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" } }, // Alaska -> LA
    { start: { lat: 64.2008, lng: -149.4937, label: "Alaska" }, end: { lat: -15.7975, lng: -47.8919, label: "Brasília" } }, // Alaska -> Brasília
    { start: { lat: -15.7975, lng: -47.8919, label: "Brasília" }, end: { lat: 38.7223, lng: -9.1393, label: "Lisbon" } }, // Brasília -> Lisbon
    { start: { lat: 51.5074, lng: -0.1278, label: "London" }, end: { lat: 28.6139, lng: 77.209, label: "New Delhi" } }, // London -> New Delhi
    { start: { lat: 28.6139, lng: 77.209, label: "New Delhi" }, end: { lat: 43.1332, lng: 131.9113, label: "Vladivostok" } }, // New Delhi -> Vladivostok
    { start: { lat: 28.6139, lng: 77.209, label: "New Delhi" }, end: { lat: -1.2921, lng: 36.8219, label: "Nairobi" } }, // New Delhi -> Nairobi
  ],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                
                transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-group-${i}`}>
              {/* Start Point */}
              <g key={`start-${i}`}>
                <circle cx={startPoint.x} cy={startPoint.y} r="4" fill={lineColor} />
                <text
                  x={startPoint.x + 5}
                  y={startPoint.y - 5}
                  textAnchor="start"
                  fontSize="8"
                  fill={lineColor}
                >
                  {dot.start.label}
                </text>
              </g>

              {/* End Point */}
              <g key={`end-${i}`}>
                <circle cx={endPoint.x} cy={endPoint.y} r="4" fill={lineColor} />
                <text
                  x={endPoint.x + 5}
                  y={endPoint.y - 5}
                  textAnchor="start"
                  fontSize="8"
                  fill={lineColor}
                >
                  {dot.end.label}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
