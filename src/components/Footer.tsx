import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0E2F60] text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Victrix Legion, Lda - All Rights Reserved</p>
          </div>
          <div className="flex space-x-8 font-semibold">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/routes" className="text-white hover:text-gray-300 transition-colors">
              Roles
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
