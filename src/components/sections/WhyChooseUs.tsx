import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Award,
  ShieldCheck,
  Wallet,
  Users,
  Clock,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Pengalaman 10+ Tahun",
    description: "Ribuan pengiriman sukses dengan tingkat kepuasan 98%",
  },
  {
    icon: ShieldCheck,
    title: "Armada Terawat",
    description: "Perawatan rutin, asuransi lengkap, dan inspeksi berkala",
  },
  {
    icon: Wallet,
    title: "Harga Kompetitif",
    description: "Transparan, tanpa biaya tersembunyi, dengan penawaran fleksibel",
  },
  {
    icon: Users,
    title: "Tim Profesional",
    description: "Sopir berpengalaman dan tim bongkar muat terlatih",
  },
  {
    icon: Clock,
    title: "Layanan 24/7",
    description: "Dukungan pelanggan dan tracking real-time setiap saat",
  },
  {
    icon: MapPin,
    title: "Cakupan Penuh Jabodetabek",
    description: "Mengenal setiap rute dan area di Jabodetabek",
  },
];

export function WhyChooseUs() {
  return (
    <AnimatedSection id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            Mengapa Memilih Jaya Laksana?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Partner logistik yang mengerti kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-5 items-start p-6 rounded-lg"
            >
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-secondary-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
