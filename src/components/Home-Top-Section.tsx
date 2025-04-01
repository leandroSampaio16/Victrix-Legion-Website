import React from "react";
import Image from "next/image";
import Button from './Button';
import Imageaux from "@/../public/Images/image_home_top.png";

const HomeTopSection = () => {
  return (
    <section className="py-16 px-6 mt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800 text-4xl">Great </span>
            <span className="text-[#5b92c5] text-4xl">Careers</span>
            <span className="text-gray-800 text-4xl"> are </span>
            <span className="text-gray-800 font-extrabold">built</span>
            <br />
            <span className="text-gray-800 font-extrabold">by great </span>
            <span className="bg-gradient-to-r from-[#5A90DF] to-[#0E2F60] text-transparent bg-clip-text">
              Opportunities
            </span>
          </h1>
          <p className="text-gray-600 my-8">
            At Victrix Legion, we connect top IT talent with leading companies,
            ensuring the perfect match between expertise and opportunity.
          </p>
          <Button className="bg-[#123C7A]" text="Explore opportunities" href="/routes" />
        </div>
        <div className="relative h-[400px] w-auto">
          <div className="absolute inset-0  opacity-10 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-[#1a4971]">
            <Image
              src={Imageaux}
              alt="Team collaboration"
              layout="auto"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTopSection;
