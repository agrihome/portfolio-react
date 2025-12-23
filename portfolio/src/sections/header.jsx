import { useState, useEffect } from "react";
import logo from "/logo.png";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "PROJECTS", href: "#projects" },
    { name: "BLOG", href: "#blog" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <div
      className={`flex items-center justify-between z-50 bg-background-header top-0 fixed w-[calc(100%-10rem)]`}
    >
      <span className=" text-white flex items-center gap-6 text-4xl font-bold">
        <img src={logo} alt="Logo" className="w-20 h-20" />
        ADHI
      </span>

      <div className="flex items-center gap-9 flex-1 justify-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="nav-link-transition text-sm font-medium tracking-[1px] leading-[12px] text-start no-underline decoration-white decoration-solid decoration-auto uppercase text-white hover:text-highlight transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>

      <span className="inline-flex w-20 h-20 bg-highlight items-center justify-center">
        <Menu className="bg-highlight h-9 w-9 fill-background-header stroke-background-header" />
      </span>
    </div>
  );
}
