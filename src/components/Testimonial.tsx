import React from "react";
import aux from "@/../public/Images/First-About.png";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  imageSrc?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  imageSrc,
}) => {
  return (
    <div className="border-l-4 border-[#1a4971] pl-4 py-2 mb-6">
      <p className="text-transparent bg-clip-text bg-gradient-to-tr from-[#5A90DF] to-[#0E2F60] italic mb-4">
        "{quote}"
      </p>

      <div className="flex items-center">
        {imageSrc && (
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img
              src={imageSrc}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex items-center mb-4">
          <div className="relative w-10 h-10 mr-4">
            <Image
              src={aux}
              alt="imageaux"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
