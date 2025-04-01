import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import SectionHeading from "@/components/Section Heading";
import Statistic from "@/components/Statistic";
import ProcessStep from "@/components/Process Step";
import ExpertiseCard from "@/components/Expertise Card";
import ContactForm from "@/components/Contact-Form";
import HomeTopSection from "@/components/Home-Top-Section";
import OurMissionCard from "@/components/Our-Mission-Card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navbar />

      <HomeTopSection />

      <OurMissionCard />

      {/* Statistics & Commitments Section */}
      <section className="py-16 px-6 pt-40">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-36">
          {/* Left Side - Statistics */}
          <div className="grid grid-cols-2 gap-8">
            <Statistic
              value="XX%"
              label="Growth in successful placements and consultant engagements."
            />
            <Statistic
              value="XXK+"
              label="Professionals and companies connected across Europe."
            />
            <Statistic
              value="XX+"
              label="Companies Trusting Us To Provide Top-Tier IT Expertise."
            />
            <Statistic
              value="XX+"
              label="Recognized Achievements And Successful Partnerships."
            />
          </div>

          {/* Right Side - Commitments */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl relative text-[#1A202C] pb-6">
              Commitments
            </h2>
            <p className="text-gray-700 mb-6">
              We are committed to understanding your goals and connecting you
              with the best opportunities to advance your career and business.
            </p>
            <Link href="/">
              <span className="text-[#123C7A] text-lg font-semibold mb-6 hover:underline">
                Explore Opportunities →
              </span>
            </Link>{" "}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <SectionHeading title="How It Works" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                At Victrix Legion, we simplify the process of connecting top IT
                professionals with the right opportunities. Our approach ensures
                a seamless experience for both candidates and companies,
                guaranteeing the best fit for every role.
              </p>
              <div className="relative h-[300px] w-full rounded-lg bg-[#1a4971] bg-opacity-10 flex items-center justify-center">
                <p className="text-[#1a4971] text-xl font-semibold">
                  Team collaboration
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start">
                <div className="bg-[#1a4971] text-white p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                  <p className="text-gray-600">
                    We take the time to understand your skills, experience, and
                    career goals to find the perfect opportunity for you.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#1a4971] text-white p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Matching</h3>
                  <p className="text-gray-600">
                    Using our expertise and network, we connect you with
                    companies that align with your profile and aspirations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#1a4971] text-white p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Placement</h3>
                  <p className="text-gray-600">
                    We facilitate the hiring process, ensuring a smooth
                    transition and a great fit for both you and the company.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#1a4971] text-white p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Growth</h3>
                  <p className="text-gray-600">
                    Our support doesn't stop at placement! We provide ongoing
                    assistance to help you succeed and grow in your career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-6 bg-[#e8f4e8]">
        <div className="container mx-auto">
          <SectionHeading title="Expertise We Provide" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ExpertiseCard
              title="Web Development"
              description="Creating scalable, secure, and efficient web applications and solutions for businesses."
              icon="/icons/web-dev.svg"
            />
            <ExpertiseCard
              title="SQL/DBA Expert"
              description="Specialized in SQL database design, performance tuning, and query optimization, ensuring fast and reliable data processing."
              icon="/icons/database.svg"
            />
            <ExpertiseCard
              title="Developers"
              description="Design, build, and maintain high-quality software solutions, leveraging the latest technologies to drive innovation and efficiency."
              icon="/icons/code.svg"
            />
            <ExpertiseCard
              title="Senior IT Project Manager"
              description="Lead complex IT projects with strategic planning, stakeholder coordination, and risk management to deliver high-impact technological solutions."
              icon="/icons/project.svg"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
