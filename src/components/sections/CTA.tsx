import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export function CTA() {
  return (
    <AnimatedSection id="contact" className="py-24 bg-primary-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-16 -right-16 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Siap Mengirim Barang Anda dengan Aman dan Tepat Waktu?
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Dapatkan penawaran gratis dalam 10 menit. Tim kami siap membantu
            kebutuhan logistik Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary-500 hover:bg-secondary-600 text-white text-lg px-8 py-6 rounded-md shadow-lg"
            >
              <a href="tel:+6281234567890">
                <Phone className="mr-2 h-6 w-6" />
                Hubungi Sekarang
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white text-lg px-8 py-6 rounded-md shadow-lg"
            >
              <a
                href="https://wa.me/6281234567890?text=Halo%20Jaya%20Laksana,%20saya%20ingin%20bertanya"
                target="_blank"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                WhatsApp Chat
              </a>
            </Button>
          </div>

          <div className="pt-10 text-slate-400">
             <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5 text-secondary-500"/>
                    <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <Mail className="w-5 h-5 text-secondary-500"/>
                    <span>info@jayalaksana.co.id</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <MapPin className="w-5 h-5 text-secondary-500"/>
                    <span>Jl. Logistik Raya No. 123, Jakarta Timur</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
