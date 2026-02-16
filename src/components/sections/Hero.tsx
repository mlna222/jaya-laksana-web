import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-white pt-24 lg:pt-32 pb-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight">
              Solusi Transportasi & Logistik Terpercaya untuk Bisnis Anda di Jabodetabek
            </h1>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Jasa truk dan bongkar muat profesional dengan fleksibilitas tinggi, harga kompetitif, dan pelayanan 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary-500 hover:bg-secondary-600 text-white text-lg px-8 py-6 rounded-md shadow-lg hover:scale-105 transition-transform"
              >
                <Link href="#contact">
                  Minta Penawaran Gratis
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary-950 text-primary-950 hover:bg-primary-950 hover:text-white text-lg px-8 py-6 rounded-md bg-transparent"
              >
                <a href="tel:+6281234567890">
                  <Phone className="mr-2 h-5 w-5" />
                  Hubungi Kami
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              {[
                { label: "Klien Puas", value: "500+" },
                { label: "Tahun Pengalaman", value: "10+" },
                { label: "Layanan", value: "24/7" },
                { label: "Cakupan Jabodetabek", value: "Penuh" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="hidden lg:block relative group">
             <Image
                src="/jasaangkutdanbongkarmuat.jpeg"
                alt="Armada Truk Jaya Laksana"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
                priority
              />
          </div>
        </div>
      </div>
    </section>
  );
}
