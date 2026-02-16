import dynamic from 'next/dynamic';
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";

const Services = dynamic(() => import('@/components/sections/Services').then(mod => mod.Services));
const ServiceProcess = dynamic(() => import('@/components/sections/Process').then(mod => mod.ServiceProcess));
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs').then(mod => mod.WhyChooseUs));
const Coverage = dynamic(() => import('@/components/sections/Coverage').then(mod => mod.Coverage));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(mod => mod.Testimonials));
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => mod.FAQ));
const CTA = dynamic(() => import('@/components/sections/CTA').then(mod => mod.CTA));
const Footer = dynamic(() => import('@/components/sections/Footer').then(mod => mod.Footer));

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <ServiceProcess />
      <WhyChooseUs />
      <Coverage />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}