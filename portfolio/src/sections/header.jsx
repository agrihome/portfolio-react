import { useState, useEffect } from "react";
import logo from "/logo.png";
import { Menu } from "lucide-react";
import Provider from "../components/Provider";
import Sidebar from "../components/blocks/Sidebar";

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
    { name: "SKILLS", href: "#skills" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CERTIFICATES", href: "#certificates" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <Provider>
      <div
        className={`flex items-center justify-between z-50 bg-background-header top-0 fixed md:w-[calc(100%-10rem)]  w-[calc(100%-40px)] max-w-[1440px]`}
      >
        <span className=" text-white flex items-center gap-6 text-4xl font-bold">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          ADHI
        </span>

        <div className="lg:flex items-center xl:gap-9 hidden gap-5 flex-1 justify-center">
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

        <button
          onClick={() => setIsMenuOpen(true)}
          className="inline-flex w-20 h-20 bg-highlight items-center justify-center cursor-pointer hover:bg-highlight/80 transition-colors"
        >
          <Menu className="h-9 w-9 stroke-background-header" />
        </button>

        <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </Provider>
  );
}
