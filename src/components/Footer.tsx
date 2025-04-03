import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: <FaTwitter className="w-5 h-5" />,
    },
  ];

  return (
    <footer
      className={`sticky top-[100vh] w-full bg-primary border-t border-gray-700 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} My Portfolio. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-gray-400 hover:text-accent transition-colors duration-300"
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;