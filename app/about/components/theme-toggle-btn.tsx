"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggleBtn() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {theme === "light" ? <Sun /> : theme === "dark" ? <Moon /> : <Laptop />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="z-50 min-w-[8rem] overflow-hidden p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-black/20 rounded-lg shadow-lg flex flex-col gap-2">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
         className="capitalize w-full h-fit whitespace-nowrap ring-offset-background focus-visible:outline-none 
                    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                    disabled:opacity-50 group relative inline-flex animate-rainbow cursor-pointer items-center justify-center
                    bg-[length:200%] font-medium dark:text-white transition-all duration-500 ease-in-out
                   border-white /* Added white border */ hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 
                     before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow 
                     before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] 
                     before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] 
                     after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100
                   dark:bg-black/50 bg-white text-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 rounded-md text-sm sm:text-md"
        >
          <Sun className="h-4 w-4" /> Light
        </DropdownMenuItem>
    
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="capitalize w-full h-fit whitespace-nowrap ring-offset-background focus-visible:outline-none 
          focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
          disabled:opacity-50 group relative inline-flex animate-rainbow cursor-pointer items-center justify-center
          bg-[length:200%] font-medium dark:text-white transition-all duration-500 ease-in-out
         border-white /* Added white border */ hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 
           before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow 
           before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] 
           before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] 
           after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100
         dark:bg-black/50 bg-white text-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 rounded-md text-sm sm:text-md"
        >
          <Moon className="h-4 w-4" /> Dark
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="capitalize w-full h-fit whitespace-nowrap ring-offset-background focus-visible:outline-none 
                    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                    disabled:opacity-50 group relative inline-flex animate-rainbow cursor-pointer items-center justify-center
                    bg-[length:200%] font-medium dark:text-white transition-all duration-500 ease-in-out
                   border-white /* Added white border */ hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 
                     before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow 
                     before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] 
                     before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] 
                     after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100
                   dark:bg-black/50 bg-white text-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 rounded-md text-sm sm:text-md"
        >
          <Laptop className="h-4 w-4" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
