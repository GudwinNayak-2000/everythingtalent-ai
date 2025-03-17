"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/icons/logo.webp";
import { ThemeToggleBtn } from "./theme-toggle-btn";
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Menu,
  Rocket,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const solutions = [
    {
      title: "Hiring Solutions",
      description:
        "Streamline hiring processes by matching the right talent with the right opportunities.",
      icon: (
        <div className="w-16 h-12 flex items-center justify-center bg-pink-100 dark:bg-pink-800 rounded-lg">
          <Briefcase className="" />
        </div>
      ),
    },
    {
      title: "Funded Startups",
      description:
        "Empower startups with essential resources and funding for scaling and success.",
      icon: (
        <div className="w-16 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-800 rounded-lg">
          <Rocket className="" />
        </div>
      ),
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 py-1 z-99 bg-slate-100 dark:bg-slate-950 lg:bg-transparent dark:lg:bg-transparent backdrop-blur transition-transform duration-300 ${
        isHidden ? "lg:-translate-y-full" : "lg:translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-16">
        <nav className="w-full h-11 flex items-center justify-between">
          <div className="flex h-full items-center space-x-2 lg:space-x-4 border-2 border-slate-700/30 dark:border-slate-300/30 hover:bg-[#E2E8F0] dark:hover:bg-gray-700 rounded-lg px-4">
            <Image src={Logo} alt="logo" width={32} height={32} />
            <div className="h-6 w-[0.75px] bg-slate-700/30 dark:bg-slate-300/30"></div>
            <ul className="hidden lg:flex items-center space-x-8 font-medium text-sm">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <NavigationMenu className="w-fit p-0 m-0 bg-transparent hover:bg-transparent">
                  <NavigationMenuList className="p-0 m-0 bg-transparent hover:bg-transparent">
                    <NavigationMenuItem className="p-0 m-0 bg-transparent">
                      <NavigationMenuTrigger className="p-0 m-0 bg-transparent hover:bg-transparent">
                        Solutions
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-[#ebeef1] space-y-2">
                        {solutions.map((solution, index) => (
                          <div
                            key={index}
                            className="flex relative z-0 items-center w-[400px] space-x-4 p-3 rounded-lg bg-gray-100/60
                             dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
                             transition duration-300 ease-in-out
after:transition-opacity after:duration-300 
before:transition-opacity before:duration-1000
hover:before:opacity-100 hover:scale-[1.02]
after:absolute after:inset-0 after:rounded-md after:p-[2px] 
after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] 
after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] 
after:[-webkit-mask-composite:destination-out] 
after:[mask-composite:exclude] 
after:opacity-0
hover:after:opacity-100"
                          >
                            {solution.icon}
                            <div className="">
                              <h4 className="text-sm font-semibold">
                                {solution.title}
                              </h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {solution.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>

              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
            <div className="flex lg:hidden">
              <h2 className="text-sm font-medium">Everything Talent</h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex h-full items-center space-x-2 lg:border-2 border-slate-700/30 dark:border-slate-300/30 rounded-lg"
          >
            <div className="flex items-center gap-2 px-1">
              <Button
                variant="ghost"
                className="gap-4 w-fit h-fit whitespace-nowrap ring-offset-background focus-visible:outline-none 
                           focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                           disabled:opacity-50 group relative hidden  md:inline-flex animate-rainbow cursor-pointer items-center justify-center
                            bg-[length:200%] font-medium  transition-all duration-500 ease-in-out
                          /* Added white border */ hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 
                           before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow 
                           before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] 
                           before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] 
                           before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] 
                            after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] 
                            after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100
                           dark:bg-transparent bg-white text-black dark:text-white dark:hover:ring-0 [&>span]:relative [&>span]:z-10 rounded-md px-8 text-sm sm:text-md"
              >
                Request a Demo
                <ChevronRight className="w-6 h-6" />
              </Button>
              <ThemeToggleBtn />
              <Button
                variant="ghost"
                className="gap-4 w-fit h-fit whitespace-nowrap ring-offset-background focus-visible:outline-none 
                           focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                           disabled:opacity-50 group relative hidden lg:inline-flex animate-rainbow cursor-pointer items-center justify-center
                            bg-[length:200%] font-medium  transition-all duration-500 ease-in-out
                          /* Added white border */ hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 
                           before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow 
                           before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] 
                           before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] 
                           before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] 
                            after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] 
                            after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100
                           dark:bg-white bg-white text-black dark:text-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 rounded-md px-8 text-sm sm:text-md"
              >
                Login
                <ArrowRight className="w-6 h-6" />
              </Button>
              <div className="flex lg:hidden" ref={menuRef}>
                <Button
                  variant="ghost"
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>

                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-[60px] w-screen bg-slate-100 dark:bg-gray-900 shadow-md border-t dark:border-gray-700 z-50"
                  >
                    <ul className="flex flex-col items-start p-2 text-sm font-medium">
                      <li className="">
                        <a
                          href="/dashboard"
                          className="block py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/products"
                          className="block py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pricing"
                          className="block py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                         Pricing
                        </a>
                      </li>

                      <li>
                        <a href="/blog" className="block py-3 hover:bg-gray-100 dark:hover:bg-gray-800">Blog</a>
                      </li>
                      <li>
                        <a href="/support" className="block py-3 hover:bg-gray-100 dark:hover:bg-gray-800">Support</a>
                      </li>
                      <li className="w-full py-1 bg-slate-200 shadow-sm dark:bg-gray-800 px-4 rounded-md flex items-center text-center justify-center">
                        <a
                          href="/login"
                          className="w-full flex items-center gap-4 justify-center text-lg text-black hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          Login
                          <ArrowRight/>
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
