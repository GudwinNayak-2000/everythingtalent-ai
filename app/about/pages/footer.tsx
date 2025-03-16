import React from "react";
import { Twitter,Facebook,Linkedin,Youtube } from "lucide-react";
import Image from "next/image";
import footerImg from "@/assets/images/bottom_san_fransisco_skyline.webp";
import footerLogo from "@/assets/icons/acme-logo-dark (1).webp";

const Footer = () => {
  return (
    <footer className="relative lg:min-h-screen h-full w-full flex flex-col justify-between bg-black py-8 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="lg:max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image src={footerLogo} alt="" className="w-[160px] object-fill h-[160px]"/>
          <div className="flex items-center space-x-2">
            <h2 className="text-3xl font-bold text-white dark:text-white">Everything Talent</h2>
          </div>
          <p className="text-gray-400 mt-2 w-[300px]">
            Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment
          </p>
          <div className="flex space-x-4 mt-4">
            <Twitter className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            <Linkedin className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            <Youtube className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            <Facebook className="text-gray-400 hover:text-white cursor-pointer" size={20} />
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-gray-400">
          <div>
            <h3 className="font-bold text-white">RESOURCES</h3>
            <ul className="mt-2 space-y-1">
              <li>Blogs</li>
              <li>Success Stories</li>
              <li>Case Studies</li>
              <li>Whitepapers</li>
              <li>FAQs</li>
              <li>Hiring Guides</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white">GET STARTED</h3>
            <ul className="mt-2 space-y-1">
              <li>Pricing</li>
              <li>Hiring Solutions</li>
              <li>Funded Startups</li>
              <li>Free Trial</li>
              <li>Contact Support</li>
              <li>Request Demo</li>
              <li>Trust</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white">LEGAL</h3>
            <ul className="mt-2 space-y-1">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>CCPA Compliance</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <Image src={footerImg} alt="" className="w-full object-fill lg:h-[400px]"/>
        <p className="text-white text-center">© 2025 Everything Talent Labs, LLC. All rights reserved.</p>
      </div>     
    </footer>
  );
};

export default Footer;
