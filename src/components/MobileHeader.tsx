import { useEffect, useRef, useState } from "react";
import { Github, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "../assets/images/Profile.jpg";

const navItems = ["Home", "Resume", "About"];

interface MobileHeaderProps {
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export function MobileHeader({ activeNav, setActiveNav }: MobileHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
      <div className="flex items-center justify-between p-4">
        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-linear-to-br from-purple-500/20 to-pink-500/20 p-0.5">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-white text-sm">Omoera Sean</h3>
            <p className="text-xs text-zinc-400">FullStack Developer</p>
          </div>
        </div>

        {/* Menu Toggle */}
        <div
          className="text-white cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
          {/* Background blur on left side */}
            <motion.div
              key="bg-blur"
              initial={{ x:"100%", opacity: 0 }}
              animate={{ x:"0%",opacity: 1 }}
              exit={{x:"100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 right-80 bg-zinc-900/40 backdrop-blur-sm z-30 h-dvh"
            />

          <motion.div
            ref={menuRef}
            key="mobile-menu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-80 bg-zinc-900 border-l border-zinc-800 z-40 flex flex-col pt-6 px-2"
          >
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 bg-linear-to-br from-purple-500/20 to-pink-500/20 p-1">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h2 className="text-white mb-1">Omoera Sean</h2>
              <p className="text-sm text-zinc-400">FullStack Developer</p>
            </div>

            {/* Navigation */}
            <nav className="mb-8">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        setActiveNav(item);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeNav === item
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="space-y-3 mt-auto">
              <a
                href="mailto:Seanmoera@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-red-500 to-pink-500 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Email</p>
                  <p className="text-sm text-white">Seanmoera@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/Dedzz19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <Github className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Github</p>
                  <p className="text-sm text-white">Dedzz19</p>
                </div>
              </a>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
