import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MapPin } from "lucide-react";
import Image from "next/image";

const areas = [
  {
    title: "Jakarta",
    points: [
      "Jakarta Pusat",
      "Jakarta Utara",
      "Jakarta Barat",
      "Jakarta Selatan",
      "Jakarta Timur",
    ],
  },
  {
    title: "Bogor",
    points: [
      "Kota Bogor",
      "Kabupaten Bogor",
      "Sentul",
      "Cibinong",
      "Depok",
    ],
  },
  {
    title: "Depok",
    points: ["Kota Depok", "Cimanggis", "Sawangan", "Cinere"],
  },
  {
    title: "Tangerang",
    points: [
      "Kota Tangerang",
      "Tangerang Selatan",
      "BSD City",
      "Gading Serpong",
      "Cikupa",
    ],
  },
  {
    title: "Bekasi",
    points: [
      "Kota Bekasi",
      "Kabupaten Bekasi",
      "Cikarang",
      "Tambun",
      "Cibitung",
    ],
  },
];

export function Coverage() {
  return (
    <AnimatedSection id="coverage" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            Area Layanan Kami
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Mencakup seluruh wilayah Jabodetabek dengan rute teroptimasi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <Image
                    src="/map-jabodetabek.svg"
                    alt="Peta Area Layanan Jabodetabek"
                    layout="fill"
                    objectFit="cover"
                    className="bg-slate-100"
                />
            </div>

            {/* Area Lists */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {areas.map((area, index) => (
                <div key={index}>
                <h3 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-secondary-500"/>
                    {area.title}
                </h3>
                <ul className="space-y-2">
                    {area.points.map((point, i) => (
                    <li key={i} className="text-sm text-text-secondary">
                        {point}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
