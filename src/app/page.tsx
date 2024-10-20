import ContactSidebar from "@/components/ContactSidebar/ContactSidebar";
import { DiferencialAccordion } from "@/components/DiferencialAccordion/DiferencialAccordion";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { SectionAbout } from "@/components/SectionAbout/SectionAbout";
import Testmonial from "@/components/Testmonial/Testmonial";
import WorkContact from "@/components/WorkContact/WorkContact";

export default function Home() {
  return (
    <>
      <Header />
      {/* hero */}
      <Hero />
      {/* sobre */}
      <SectionAbout />
      {/* diferencial */}
      <DiferencialAccordion />
      <Testmonial />
      <WorkContact />
      <ContactSidebar />
      {/* footer */}
      <Footer />
    </>
  );
}
