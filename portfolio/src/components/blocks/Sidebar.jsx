import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "/logo.png";
import H4 from "../H4";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "SKILLS", href: "#skills" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CERTIFICATES", href: "#certificates" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

const projectLinks = [
  { name: "Exclusive", href: "https://ecom-frontend-opal-ten.vercel.app/" },
  { name: "Pathflow", href: "#https://ecom-frontend-opal-ten.vercel.app/" },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-100"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-[350px] bg-background-header z-101 shadow-2xl p-10 flex flex-col gap-12"
          >
            <div className="flex justify-between items-center">
              <span className=" text-white flex items-center gap-6 text-4xl font-bold">
                <img src={logo} alt="Logo" className="w-16 h-16" />
                ADHI
              </span>
              <button
                onClick={onClose}
                className="text-white hover:text-highlight transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-8 lg-hidden">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="text-lg font-semibold text-white hover:text-highlight transition-colors tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-col w-full items-start gap-8">
              <H4 className="text-highlight">My Project links</H4>
              {projectLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  target="_blank"
                  className="text-lg font-semibold text-white hover:text-highlight transition-colors tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
