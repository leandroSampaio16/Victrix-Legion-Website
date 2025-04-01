import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/Section Heading";
import ContactForm from "@/components/Contact-Form";
import ContactCard from "@/components/Contact-Card";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Let's Talk!"
              subtitle="We're Ready"
              centered
            />
          </div>
        </div>
      </section>

      <ContactCard></ContactCard>

      <Footer />
    </main>
  );
}
