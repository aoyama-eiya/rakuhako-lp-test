import Hero from "@/app/components/Hero";
import LaptopDemo from "@/app/components/LaptopDemo";
import Problem from "@/app/components/Problem";
import Reason from "@/app/components/Reason";
import Cause from "@/app/components/Cause";
import Solution from "@/app/components/Solution";
import Future from "@/app/components/Future";
import Demo from "@/app/components/Demo";
import Reviews from "@/app/components/Reviews";
import Authority from "@/app/components/Authority";
import Flow from "@/app/components/Flow";
import Faq from "@/app/components/Faq";
import Story from "@/app/components/Story";
import Cta from "@/app/components/Cta";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <LaptopDemo />
      <Problem />
      <Reason />
      <Cause />
      <Solution />
      <Future />
      <Demo />
      <Reviews />
      <Authority />
      <Flow />
      <Faq />
      <Story />
      <Cta />
      <Footer />
    </div>
  );
}
