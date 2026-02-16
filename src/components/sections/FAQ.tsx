import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Berapa lama waktu yang dibutuhkan untuk pengiriman dalam Jabodetabek?",
    answer: "Untuk pengiriman reguler, waktu tempuh rata-rata 2-4 jam tergantung lokasi penjemputan dan tujuan. Layanan same-day delivery tersedia untuk pengiriman mendesak."
  },
  {
    question: "Bagaimana cara menghitung harga pengiriman?",
    answer: "Harga dihitung berdasarkan jarak, jenis armada, berat/volume barang, dan jenis layanan (reguler/ekspres). Dapatkan penawaran gratis dengan menghubungi kami atau menggunakan kalkulator di situs ini."
  },
  {
    question: "Apakah barang diasuransikan selama pengiriman?",
    answer: "Ya, semua pengiriman dilindungi asuransi. Nilai pertanggungan dapat disesuaikan sesuai nilai barang Anda untuk keamanan ekstra."
  },
  {
    question: "Apakah melayani pengiriman di hari libur?",
    answer: "Ya, kami melayani pengiriman 7 hari seminggu termasuk hari libur nasional. Mohon konfirmasi terlebih dahulu untuk jadwal di hari libur besar."
  },
  {
    question: "Bagaimana sistem pembayaran yang tersedia?",
    answer: "Kami menerima transfer bank, e-wallet (OVO, GoPay, Dana), dan pembayaran tempo untuk klien korporat dengan syarat dan ketentuan yang berlaku."
  },
  {
    question: "Apakah menyediakan layanan bongkar muat di lokasi tujuan?",
    answer: "Tentu saja. Tim bongkar muat kami tersedia untuk membantu di lokasi penjemputan maupun di lokasi tujuan, sesuai dengan paket layanan yang Anda pilih."
  },
];

export function FAQ() {
  return (
    <AnimatedSection id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Jawaban untuk pertanyaan umum tentang layanan kami.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50 border border-slate-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-text-secondary pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </AnimatedSection>
  );
}
