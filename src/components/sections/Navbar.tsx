"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Truck } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const isMobile = useMobile();
  const navLinks = [
    { href: "#", label: "Beranda" },
    { href: "#services", label: "Layanan" },
    { href: "#coverage", label: "Area" },
    { href: "#about", label: "Tentang Kami" },
    { href: "#contact", label: "Kontak" },
  ];

  const NavMenu = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-primary-950 rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-950">
                Jaya Laksana
              </h1>
              <p className="text-xs text-muted-foreground">
                Solusi Transportasi & Logistik
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8">
            <NavMenu />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+6281234567890"
              className="flex items-center gap-2 text-sm font-semibold text-primary-950 hover:text-primary-700"
            >
              <Phone className="w-4 h-4" />
              +62 812-3456-7890
            </a>
            <Button
              asChild
              className="bg-secondary-500 hover:bg-secondary-600 text-white rounded-md font-semibold"
            >
              <Link href="#contact">Minta Penawaran</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                <NavMenu />
                <Button
                  asChild
                  className="bg-secondary-500 hover:bg-secondary-600 text-white w-full mt-4"
                >
                  <Link href="#contact">Minta Penawaran</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
