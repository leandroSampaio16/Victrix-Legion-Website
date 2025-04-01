import React from "react";
import Image, { StaticImageData } from "next/image";
import aux from "@/../public/Images/First-About.png";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: StaticImageData;
}

const teamMembers: TeamMemberProps[] = [
  { name: "Lisa Law", role: "HR Manager", description: "Connecting top IT talent with the right opportunities.", imageSrc: aux },
  { name: "Catarina Pereira", role: "Marketing Manager", description: "Driving impactful strategies to elevate brand presence.", imageSrc: aux },
  { name: "Celma Teixeira", role: "Account Manager", description: "Building strong client relationships for lasting success.", imageSrc: aux },
  { name: "Candice Wu", role: "Backend Developer", description: "Lead backend dev at Clearbit. Former Clearbit and Loom.", imageSrc: aux },
  { name: "Natali Craig", role: "Product Designer", description: "Founding design team at Figma. Former Pleo, Stripe, and Tile.", imageSrc: aux },
  { name: "Drew Cano", role: "UX Researcher", description: "Lead user research for Slack. Contractor for Netflix and Udacity.", imageSrc: aux },
  { name: "Alex Johnson", role: "Frontend Developer", description: "Passionate about creating engaging UI experiences.", imageSrc: aux },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-[#FFFFFF]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">Meet our team</h2>
        <p className="text-center text-[#667085] max-w-3xl mx-auto mb-12">
          Our philosophy is simple hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
        </p>
        
        {/* First row with 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.slice(0, 3).map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
        
        {/* Second row with 4 members */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {teamMembers.slice(3).map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard: React.FC<{ member: TeamMemberProps }> = ({ member }) => {
  return (
    <div className="flex flex-col items-center p-6 py-8 bg-[#F9FAFB] w-full">
      <div className="relative w-16 h-16 mb-4">
        <Image src={member.imageSrc} alt={member.name} fill className="rounded-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-[#123C7A] mb-2">{member.role}</p>
      <p className="text-[#667085] text-center">{member.description}</p>
      <div className="flex space-x-3 mt-3">
        <SocialIcon link="#" icon="twitter" />
        <SocialIcon link="#" icon="linkedin" />
      </div>
    </div>
  );
};

const SocialIcon: React.FC<{ link: string; icon: "twitter" | "linkedin" }> = ({ link, icon }) => {
  const icons = {
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
      </svg>
    ),
  };

  return (
    <a href={link} className="text-gray-500 hover:text-blue-500">
      {icons[icon]}
    </a>
  );
};

export default TeamSection;