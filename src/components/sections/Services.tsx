import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Truck, Box, Warehouse, Clock } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Armada Truk Lengkap",
    description: "Koleksi truk dari engkel hingga tronton, siap melayani berbagai jenis pengiriman barang.",
    features: ["Engkel (CDE, CDD)", "Double Engkel (Fuso)", "Tronton (6 & 10 roda)", "Pick-up & Box Van"],
  },
  {
    icon: Box,
    title: "Bongkar Muat Profesional",
    description: "Tim terlatih dengan peralatan modern untuk penanganan barang aman dan efisien.",
    features: ["Forklift operation", "Manual loading team", "Pallet handling", "Fragile item care"],
  },
  {
    icon: Warehouse,
    title: "Penyimpanan Barang",
    description: "Gudang aman dengan sistem manajemen stok modern dan keamanan 24 jam.",
    features: ["Clean & dry storage", "CCTV monitoring", "Inventory management", "Flexible terms"],
  },
  {
    icon: Clock,
    title: "Pengiriman Hari Sama",
    description: "Layanan ekspres untuk pengiriman mendesak dalam area Jabodetabek.",
    features: ["Priority handling", "Real-time tracking", "GPS monitoring", "Proof of delivery"],
  },
];

export function Services() {
  return (
    <AnimatedSection id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            Layanan Kami
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Solusi lengkap untuk kebutuhan transportasi dan logistik Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-secondary-700" />
                </div>
                <CardTitle className="text-xl font-bold text-text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-text-secondary">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
