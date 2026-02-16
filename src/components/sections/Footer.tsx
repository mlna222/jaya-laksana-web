import Link from "next/link";
import { Truck, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-950 text-slate-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Jaya Laksana</h3>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Mitra logistik profesional dengan armada lengkap dan pelayanan 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-secondary-500 transition-colors">Beranda</Link></li>
              <li><Link href="#about" className="hover:text-secondary-500 transition-colors">Tentang Kami</Link></li>
              <li><Link href="#services" className="hover:text-secondary-500 transition-colors">Layanan</Link></li>
              <li><Link href="#coverage" className="hover:text-secondary-500 transition-colors">Area Layanan</Link></li>
              <li><Link href="#faq" className="hover:text-secondary-500 transition-colors">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-secondary-500 transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="hover:text-secondary-500 transition-colors">Trucking Services</Link></li>
              <li><Link href="#services" className="hover:text-secondary-500 transition-colors">Loading/Unloading</Link></li>
              <li><Link href="#services" className="hover:text-secondary-500 transition-colors">Warehousing</Link></li>
              <li><Link href="#services" className="hover:text-secondary-500 transition-colors">Same-Day Delivery</Link></li>
              <li><Link href="#services" className="hover:text-secondary-500 transition-colors">Corporate Logistics</Link></li>
              <li><Link href="#services" className="hover:text-secondary-500 transition-colors">Last-Mile Delivery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary-500 shrink-0 mt-1" />
                <a href="tel:+6281234567890" className="hover:text-secondary-500 transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary-500 shrink-0 mt-1" />
                <a href="mailto:info@jayalaksana.co.id" className="hover:text-secondary-500 transition-colors">
                  info@jayalaksana.co.id
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary-500 shrink-0 mt-1" />
                <span>Jl. Logistik Raya No. 123, Jakarta Timur 13450</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Jaya Laksana. All rights reserved.</p>
            <div className="flex items-center gap-x-4">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <span className="text-slate-600">|</span>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
            <div className="flex items-center gap-x-4">
                <p>Verified Business</p>
                <span className="text-slate-600">|</span>
                <p>Insured Fleet</p>
            </div>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
