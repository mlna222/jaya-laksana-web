import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const fleet = [
  {
    title: "Truk Engkel",
    description: "Cocok untuk pengiriman barang menengah dan pindahan rumah kecil",
    features: ["Kapasitas menengah", "Fleksibel di jalan kecil", "Hemat biaya"],
    color: "bg-blue-500",
  },
  {
    title: "Truk Kecil",
    description: "Ideal untuk pengiriman barang ringan dan pindahan apartemen",
    features: ["Kapasitas ringan", "Mudah bermanuver", "Cocok untuk kota"],
    color: "bg-orange-500",
  },
  {
    title: "Truk Besar",
    description: "Untuk muatan berat, pindahan kantor, dan pengiriman besar",
    features: ["Kapasitas besar", "Muatan berat", "Efisien banyak barang"],
    color: "bg-slate-700",
  },
];

export function Armada() {
  return (
    <section id="armada" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            Armada Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Pilihan Armada Truk
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai ukuran truk untuk memenuhi kebutuhan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {fleet.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Placeholder Area */}
              <div className="h-48 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                <div className={`absolute inset-0 opacity-10 ${item.color}`} />
                <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                  🚛
                </div>
              </div>

              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-6">{item.description}</p>
                <ul className="space-y-3 text-left mb-8">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <Check className="w-4 h-4 text-green-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0 flex justify-center">
                <Button
                  asChild
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full"
                >
                  <Link
                    href={`https://wa.me/6281234567890?text=Halo%20Jaya%20Laksana,%20saya%20mau%20sewa%20${item.title.toLowerCase()}`}
                    target="_blank"
                  >
                    Pesan Truk Ini <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
