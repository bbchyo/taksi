"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Car } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { name: "Ücret Tarifesi", href: "/ucret-tarifesi" },
  { name: "Araçlarımız", href: "/araclarimiz" },
  { name: "Bize Ulaşın", href: "/bize-ulasin" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-[100] transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary-500 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-md shadow-primary-500/20">
              <Car className="w-6 h-6 text-neutral-900" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-bold text-xl tracking-tight transition-colors",
                scrolled || pathname !== "/" ? "text-neutral-900" : "text-white"
              )}>
                Erzincan <span className="text-primary-600">Eşot Taksi</span>
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-widest font-semibold",
                scrolled || pathname !== "/" ? "text-neutral-500" : "text-neutral-300"
              )}>
                7/24 Havalimanı & Otogar
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-all hover:text-primary-600 relative py-1",
                  pathname === link.href 
                    ? "text-primary-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-600" 
                    : scrolled || pathname !== "/" ? "text-neutral-700" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:05016410724"
              className="bg-primary-500 hover:bg-primary-600 text-neutral-900 px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-primary-500/20 flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-current" />
              0501 641 07 24
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <Link
              href="tel:05016410724"
              className="bg-primary-500 p-2.5 rounded-full text-neutral-900 shadow-md"
            >
              <Phone className="w-5 h-5 fill-current" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 transition-colors",
                scrolled || pathname !== "/" ? "text-neutral-900" : "text-white"
              )}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full inset-x-0 bg-white border-t border-neutral-100 shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-lg font-semibold transition-colors",
                    pathname === link.href
                      ? "bg-primary-50 text-primary-600"
                      : "text-neutral-700 hover:bg-neutral-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 grid grid-cols-2 gap-4">
                <Link
                  href="tel:05016410724"
                  className="flex items-center justify-center gap-2 bg-primary-500 text-neutral-900 py-4 rounded-2xl font-bold shadow-lg shadow-primary-500/10"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  Ara
                </Link>
                <Link
                  href="https://wa.me/905016410724"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-500/10"
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
