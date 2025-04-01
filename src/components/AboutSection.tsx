import React from "react";
import Image, { StaticImageData } from "next/image";
import Testimonial from "./Testimonial";

import First from "@/../public/Images/First-About.png";
import Second from "@/../public/Images/Second-About.png";
import Third from "@/../public/Images/Third-About.png";

const teamImages: { [key: string]: StaticImageData } = {
  first: First,
  second: Second,
  third: Third,
};

const AboutSection = () => {
  return (
    <>
      {/* Build the Right Team Section */}
      <section className="py-16 !pt-0 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Build the Right Team to Succeed
            </h2>
            <p className="text-[#2D3748] mb-6">
              Finding the perfect IT talent is not easy. At Victrix Legion, we
              specialize in matching companies with highly skilled professionals
              who integrate seamlessly into their teams and drive success.
            </p>
            <Testimonial
              quote="Victrix Legion gave me the opportunity to work on exciting projects and grow my career in ways I never imagined."
              author="Mark Adam"
              role="Software Developer"
            />
          </div>
          <div className="relative h-[400px] w-full rounded-lg bg-[#1a4971] bg-opacity-10 flex items-center justify-center overflow-hidden">
            <Image
              src={teamImages.first}
              alt="Team collaboration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Empowering Careers Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6">
              Empowering Careers, Elevating Businesses
            </h2>
            <p className="text-[#2D3748] mb-6">
              We bridge the gap between top-tier IT professionals and leading
              companies across the EU and UK, ensuring the right fit for every
              position.
            </p>
            <Testimonial
              quote="Working with Victrix Legion means being part of a network of experts and continuous career development."
              author="Jeewa markram"
              role="IT Consultant"
            />
          </div>
          <div className="relative h-[400px] w-full rounded-lg bg-gradient-to-br from-[#5A90DF] to-[#0E2F60] flex items-center justify-center overflow-hidden">
            <Image
              src={teamImages.second}
              alt="Team collaboration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Committed to Excellence Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Committed to Excellence and Growth
            </h2>
            <p className="text-[#2D3748] mb-6">
              Our mission is to bring quality, professionalism, and value to
              both our clients and consultants, fostering an environment of
              integrity, diversity, and collaboration.
            </p>
            <Testimonial
              quote="The support and opportunities I've received from Victrix Legion have been crucial in my professional growth."
              author="Marie Gray"
              role="Project Manager"
            />
          </div>
          <div className="relative h-[400px] w-full rounded-lg bg-[#1a4971] bg-opacity-10 flex items-center justify-center overflow-hidden">
            <Image
              src={teamImages.third}
              alt="Team collaboration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
