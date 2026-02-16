import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    company: "PT. Maju Jaya Logistik",
    quote: "Layanan luar biasa! Armada selalu tepat waktu dan barang sampai dalam kondisi sempurna. Sudah 3 tahun bekerja sama.",
    rating: 5,
    name: "Budi Santoso",
    role: "Manager Operasional",
    logo: "/logo-maju-jaya.svg",
  },
  {
    company: "CV. Sejahtera Abadi",
    quote: "Harga sangat kompetitif dengan kualitas pelayanan premium. Tim bongkar muat sangat profesional dan teliti.",
    rating: 5,
    name: "Siti Aminah",
    role: "Direktur",
    logo: "/logo-sejahtera-abadi.svg",
  },
  {
    company: "Tokopedia Logistic Partner",
    quote: "Respons cepat, tracking real-time, dan dukungan 24/7 membuat operasional kami jauh lebih efisien.",
    rating: 5,
    name: "Ahmad Zulkifli",
    role: "Head of Logistics",
    logo: "/logo-tokopedia.svg",
  },
  {
    company: "PT. Food Indonesia",
    quote: "Penanganan barang makanan sangat aman dengan suhu terjaga. Sangat direkomendasikan untuk produk perishable.",
    rating: 5,
    name: "Rina Wulandari",
    role: "Supply Chain Manager",
    logo: "/logo-food-indonesia.svg",
  },
  {
    company: "IndoBuild Mart",
    quote: "Armada tronton terawat dengan baik, mampu membawa muatan berat dengan aman. Pilihan terbaik untuk konstruksi.",
    rating: 5,
    name: "Dedi Setiawan",
    role: "Project Manager",
    logo: "/logo-indobuild.svg",
  },
  {
    company: "CV. Berkah Elektronik",
    quote: "Barang elektronik fragile ditangani dengan ekstra hati-hati. Nol kerusakan dalam 50+ pengiriman.",
    rating: 5,
    name: "Grace L.",
    role: "Owner",
    logo: "/logo-berkah-elektronik.svg",
  },
];

const renderStars = (rating: number) => {
    return Array(rating).fill(null).map((_, i) => (
        <Star key={i} className="w-5 h-5 text-secondary-500 fill-secondary-500" />
    ));
}

export function Testimonials() {
  return (
    <AnimatedSection id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            Apa Kata Klien Kami
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Kepercayaan klien adalah prioritas utama kami
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full bg-white shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <Quote className="w-10 h-10 text-slate-200" />
                            <div className="flex">
                                {renderStars(testimonial.rating)}
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <p className="text-text-secondary flex-grow">"{testimonial.quote}"</p>
                      <div className="flex items-center mt-6 pt-6 border-t">
                        <Image src={testimonial.logo} alt={testimonial.company} width={40} height={40} className="rounded-full mr-4" />
                        <div>
                            <p className="font-bold text-text-primary">{testimonial.name}</p>
                            <p className="text-sm text-text-muted">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex"/>
          <CarouselNext className="hidden md:flex"/>
        </Carousel>
      </div>
    </AnimatedSection>
  );
}
