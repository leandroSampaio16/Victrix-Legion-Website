import React from 'react';

const OurMissionCard = () => {

    return(
        <section className="py-12 mt-30 !pb-8 px-6 bg-[#E9F0FB]">
        <div className="container mx-auto text-center">
          <div className=" mx-auto">
            <div className="mb-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A202C] inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[4px] after:bg-gradient-to-r after:from-[#5A90DF] after:to-[#0E2F60]">
                our mission
              </h2>
              <p className="text-gray-600 mt-12">
                Our main mission is to find the perfect job opportunity for you,
                while also bringing quality, professionalism and value to our
                clients. It is the interaction between people that contributes
                to the development of companies. We focus on the needs of our
                clients providing high-level professionals, ready to work
                closely with them to achieve their expectations. We strongly
                believe in Integrity, Quality and Diversity to drive our
                cooperation with consultants and clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default OurMissionCard;