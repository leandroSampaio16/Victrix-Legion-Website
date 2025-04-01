import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/Section Heading';
import AboutSection from '@/components/AboutSection';
import Button from '@/components/Button';
import PartnerLogo from '@/components/Partner Logo';
import TeamSection from '@/components/TeamSection';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 !pb-8 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <SectionHeading 
              title="Right IT Team" 
              subtitle="Way of building the" 
              centered 
            />
          </div>
        </div>
      </section>
      
      {/* About Section*/}

      <AboutSection></AboutSection>
      
     {/* Our Team Section*/}

      <TeamSection></TeamSection>
      
      {/* Partners Section */}
      <section className="py-16 px-6 bg-white mb-10">
        <div className="container mx-auto">
          <SectionHeading title="Partners and Cooperations" subtitle="Our" centered />
        
           <PartnerLogo></PartnerLogo>    
           
  
          <div className="text-center pt-6">
            <Button className="!bg-[#123C7A]" text="Explore opportunities" href="/routes" />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
