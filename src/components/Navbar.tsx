import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/../public/logo.svg';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#FFFFFF] py-2 px-6 shadow-[0px_4.2px_42px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-16 h-16">
              <Image 
                src={Logo}
                alt="Victrix Legion Logo" 
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-[#123C7A] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-[#123C7A] transition-colors">
            About us
          </Link>
          <Link href="/how-it-works" className="text-gray-800 hover:text-[#123C7A] transition-colors">
            How It Works
          </Link>
          <Link href="/expertise" className="text-gray-800 hover:text-[#123C7A] transition-colors">
            Expertise
          </Link>
          <Link href="/routes" className="text-gray-800 hover:text-[#123C7A] transition-colors">
            Roules
          </Link>
        </div>
        
        <div>
          <Link href="/contact" className="bg-gradient-to-tr from-[#5A90DF] to-[#0E2F60] text-white px-4 py-2 rounded hover:bg-[#15395a] transition-colors">
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
