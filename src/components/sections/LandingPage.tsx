"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  Menu, MessageCircle, Truck, Home, Box, Zap, Check, 
  Phone, Map, CheckCircle, Calendar, 
  Shield, DollarSign, Users, Clock, MapPin, Star, 
  Quote, Mail, ChevronRight 
} from "lucide-react";

// --- UI COMPONENTS (Internal) ---
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { 
  Accordion, AccordionContent, AccordionItem, AccordionTrigger 
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious 
} from "@/components/ui/carousel";

const whatsappNumber = "6287713350917";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Jaya%20Laksana,%20saya%20ingin%20bertanya`;

// ==========================================
// 1. NAVBAR
// ==========================================
const navLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#services", label: "Layanan" },
  { href: "#armada", label: "Armada" },
  { href: "#about", label: "Keunggulan" },
  { href: "#coverage", label: "Area" },
];

const NavMenu = ({ mobile = false, onClick }: { mobile?: boolean, onClick?: () => void }) => (
  <>
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`${
          mobile 
            ? "text-gray-700 hover:text-secondary py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg" 
            : "text-gray-700 hover:text-secondary transition-colors font-medium"
        }`}
        onClick={onClick}
      >
        {link.label}
      </Link>
    ))}
  </>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Image src="/jasaangkutdanbongkarmuat.jpeg" alt="Logo" width={48} height={48} className="rounded-full object-contain" />
            <div>
              <h1 className="text-xl font-bold text-primary leading-tight">Jaya Laksana</h1>
              <p className="text-xs text-gray-500">Logistik Terpercaya</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <NavMenu />
            <a href={whatsappUrl} target="_blank" className="bg-whatsapp hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2">
              Hubungi WhatsApp
            </a>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-3 mt-12">
                <NavMenu mobile onClick={() => setIsOpen(false)} />
                <a href={whatsappUrl} target="_blank" className="bg-whatsapp hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-center mt-2" onClick={() => setIsOpen(false)}>
                  Hubungi WhatsApp
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

// ==========================================
// 2. HERO
// ==========================================
export function Hero() {
  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">✓ Terpercaya 10+ Tahun di Jabodetabek</div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Solusi Transportasi & <span className="text-secondary">Logistik Terpercaya</span> untuk Bisnis Anda
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Jasa truk dan bongkar muat profesional dengan armada lengkap, harga kompetitif, dan layanan 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href={whatsappUrl} target="_blank" className="bg-whatsapp hover:bg-green-600 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                <MessageCircle className="w-6 h-6" /> Pesan via WhatsApp
              </a>
              <Link href="#services" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2">
                Lihat Layanan <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{ label: "Klien Puas", value: "500+" }, { label: "Tahun Pengalaman", value: "10+" }, { label: "Layanan", value: "24/7" }, { label: "Tepat Waktu", value: "98%" }].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Truck, title: "Armada Lengkap", desc: "Berbagai jenis truk siap melayani pengiriman Anda." },
                { icon: Users, title: "Bongkar Muat", desc: "Tim profesional untuk penanganan barang yang aman." },
                { icon: Clock, title: "Layanan 24/7", desc: "Selalu siap melayani kebutuhan logistik Anda kapan saja." },
                { icon: DollarSign, title: "Harga Kompetitif", desc: "Penawaran harga terbaik dengan biaya transparan." },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 group">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/40 transition-colors">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. SERVICES
// ==========================================
export function Services() {
  const services = [
    { icon: Truck, title: "Jasa Angkut Barang", description: "Pengiriman barang berbagai jenis dengan armada yang sesuai kebutuhan", features: ["Barang komersial", "Barang pindahan", "Event & pameran"] },
    { icon: Home, title: "Jasa Pindahan", description: "Layanan pindahan rumah, kantor, kontrakan, dan apartemen", features: ["Pindahan rumah", "Pindahan kantor", "Pindahan apartemen"] },
    { icon: Box, title: "Bongkar Muat", description: "Tim terlatih dengan peralatan modern untuk penanganan barang aman", features: ["Tim profesional", "Peralatan lengkap", "Barang aman"] },
    { icon: Zap, title: "Pengiriman Kilat", description: "Layanan ekspres untuk pengiriman mendesak dalam area Jabodetabek", features: ["Priority handling", "Real-time tracking", "Same-day delivery"] },
  ];
  return (
    <AnimatedSection id="services" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 text-center mb-16">
        <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">Layanan Kami</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Solusi Logistik Lengkap</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-left">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-secondary transition-all group">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20">
                <service.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-secondary mr-2" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

// ==========================================
// 4. ARMADA
// ==========================================
export function Armada() {
  const fleet = [
    { title: "Truk Engkel", description: "Cocok untuk pengiriman barang menengah dan pindahan rumah kecil.", image: "/trukengkel.jpeg", features: ["Kapasitas menengah", "Fleksibel di jalan kecil", "Hemat biaya"] },
    { title: "Pick Up", description: "Ideal untuk pengiriman barang ringan dan pindahan apartemen.", image: "/pickup.jpeg", features: ["Kapasitas ringan", "Mudah bermanuver", "Cocok untuk kota"] },
    { title: "Truk CDD", description: "Untuk muatan berat, pindahan kantor, dan pengiriman besar.", image: "/trukcdd.jpeg", features: ["Kapasitas besar", "Muatan berat", "Efisien banyak barang"] },
  ];
  return (
    <AnimatedSection id="armada" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Pilihan Armada Truk</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 text-left">
          {fleet.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl border-2 border-transparent hover:border-secondary overflow-hidden flex flex-col h-full">
              <div className="h-56 relative overflow-hidden group bg-slate-50 flex items-center justify-center">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  unoptimized
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6 flex-grow flex flex-col text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{item.description}</p>
                <ul className="space-y-2 text-left mb-6 text-sm text-gray-700">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center"><Check className="w-4 h-4 text-secondary mr-2" />{f}</li>
                  ))}
                </ul>
                <a href={`https://wa.me/${whatsappNumber}?text=Halo%20Jaya%20Laksana,%20saya%20mau%20sewa%20${item.title.toLowerCase()}`} target="_blank" className="bg-whatsapp hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all">Pesan Truk Ini</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

// ==========================================
// 5. TESTIMONIALS
// ==========================================
const renderStars = (rating: number) => {
  return Array(rating).fill(null).map((_, i) => (
    <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
  ));
}

export function Testimonials() {
  const testimonials = [
    { name: "Budi Santoso", role: "Manager PT. Maju", quote: "Layanan luar biasa! Armada selalu tepat waktu.", rating: 5 },
    { name: "Siti Aminah", role: "Direktur CV. Sejahtera", quote: "Harga sangat kompetitif dengan kualitas premium.", rating: 5 },
    { name: "Ahmad Zulkifli", role: "Owner Toko Berkah", quote: "Respons cepat dan tim bongkar muat sangat teliti.", rating: 5 },
  ];
  return (
    <AnimatedSection id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Apa Kata Klien Kami</h2>
        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-white shadow-md">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Quote className="w-8 h-8 text-slate-200" />
                      <div className="flex">{renderStars(t.rating)}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6 italic">"{t.quote}"</p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </AnimatedSection>
  );
}

// ==========================================
// 6. FAQ
// ==========================================
export function FAQ() {
  const faqItems = [
    { question: "Berapa lama waktu pengiriman?", answer: "Rata-rata 2-4 jam dalam Jabodetabek." },
    { question: "Cara hitung harga?", answer: "Berdasarkan jarak, armada, dan berat barang." },
  ];
  return (
    <AnimatedSection id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Pertanyaan Sering Diajukan</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-slate-50 border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
}

// ==========================================
// 7. CTA & MAPS (Compact)
// ==========================================
export function CTA() {
  return (
    <AnimatedSection id="contact" className="py-12 bg-gradient-to-br from-primary to-[#243b53] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Left Content - Maps */}
          <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 order-2 lg:order-1">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.38891599912!2d106.75148467408042!3d-6.34365206206318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef09935112c3%3A0xe40c5d119ba5ee0b!2sJl.%20Pd.%20Cabe%20Indah%201%20No.36%2C%20Pd.%20Cabe%20Udik%2C%20Kec.%20Pamulang%2C%20Kota%20Tangerang%20Selatan%2C%20Banten%2015418!5e0!3m2!1sid!2sid!4v1775921966464!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Content - Info */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-bold mb-4">Hubungi Kami</span>
            <h2 className="text-3xl font-bold mb-4">Siap Melayani Kebutuhan Logistik Anda</h2>
            <p className="text-slate-300 mb-6 text-base">Kunjungi kantor kami atau hubungi via WhatsApp untuk respon cepat 24/7.</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">WhatsApp</p>
                  <p className="text-base font-bold">0877-1335-0917</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Alamat Kantor</p>
                  <p className="text-base font-bold leading-snug">Jl. Pd. Cabe Indah 1 No.36, Kec. Pamulang, Tangerang Selatan</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href={whatsappUrl} target="_blank" className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg">
                <MessageCircle className="w-5 h-5" /> Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/jasaangkutdanbongkarmuat.jpeg" alt="Logo" width={32} height={32} className="rounded-full" />
          <h3 className="text-lg font-bold">Jaya Laksana</h3>
        </div>
        <p className="text-gray-400 text-xs italic">© {new Date().getFullYear()} Jaya Laksana. Logistik Terpercaya di Jabodetabek.</p>
      </div>
    </footer>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <Services />
      <Armada />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
