import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CalendarCheck, Truck, Map, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: Phone,
    title: "1. Konsultasi & Penawaran",
    description: "Hubungi kami, berikan detail kebutuhan, dapatkan penawaran instan.",
    time: "5-10 menit",
  },
  {
    icon: CalendarCheck,
    title: "2. Konfirmasi & Jadwal",
    description: "Konfirmasi detail, tetapkan jadwal penjemputan dan pengantaran.",
    time: "30 menit - 2 jam",
  },
  {
    icon: Truck,
    title: "3. Penjemputan & Loading",
    description: "Armada tiba tepat waktu, tim profesional memuat barang dengan aman.",
    time: "Sesuai jadwal",
  },
  {
    icon: Map,
    title: "4. Transportasi & Tracking",
    description: "Pengiriman aman dengan pelacakan real-time selama perjalanan.",
    time: "Sesuai jarak",
  },
  {
    icon: CheckCircle,
    title: "5. Pengantaran & Validasi",
    description: "Barang sampai dengan aman, serah terima dengan tanda terima resmi.",
    time: "Selesai",
  },
];

export function ServiceProcess() {
  return (
    <AnimatedSection id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            Cara Kerja Kami
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Proses sederhana dan transparan dari awal hingga selesai
          </p>
        </div>

        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-slate-200"></div>
          
          <div className="grid md:grid-cols-5 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex md:flex-col items-center text-center">
                <div className="absolute top-8 left-0 right-0 w-full h-[2px] bg-slate-200 md:hidden"></div>
                <div className="relative z-10 w-16 h-16 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center shrink-0">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-secondary-700" />
                  </div>
                </div>
                <div className="md:mt-6 text-left md:text-center pl-6 md:pl-0">
                  <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary">{step.description}</p>
                  <p className="text-xs text-secondary-700 font-semibold mt-2">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
