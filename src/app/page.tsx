import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MenuSection from "@/components/sections/MenuSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import GallerySection from "@/components/sections/GallerySection";
import DeliverySection from "@/components/sections/DeliverySection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark-bg overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ReviewsSection />
      <GallerySection />
      <DeliverySection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
