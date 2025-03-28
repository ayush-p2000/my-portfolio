"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const Footer = ({ id }: { id?: string }) => {
  const { theme, toggleTheme } = useTheme();
  
  const socialLinks = [
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ];

  return (
    <footer className="bg-primary border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.url} className="text-gray-400 hover:text-white">
                {link.name}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
