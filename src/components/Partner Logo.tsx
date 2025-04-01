import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Vmware from '@/../public/Images/Partners/Vmware.png';
import Vodafone from '@/../public/Images/Partners/Vodafone.png';
import Meo from '@/../public/Images/Partners/Meo.png';
import Orange from '@/../public/Images/Partners/Orange.png';
import Cisco from '@/../public/Images/Partners/Cisco.png';
import Iapmei from '@/../public/Images/Partners/Iapmei.png';
import Vlerick from '@/../public/Images/Partners/Vlerick.png';
import SportingBet from '@/../public/Images/Partners/SportingBet.png';

const partners = [
  { name: 'VMware', logoSrc: Vmware },
  { name: 'Vodafone', logoSrc: Vodafone },
  { name: 'MEO Energia' ,logoSrc: Meo },
  { name: 'Orange' ,logoSrc: Orange },
  { name: 'Cisco Partner',logoSrc: Cisco  },
  { name: 'IAPMEI',logoSrc: Iapmei  },
  { name: 'V Business School' ,logoSrc: Vlerick },
  { name: 'Sportingbet',logoSrc: SportingBet  },
];

const PartnerLogo = ({ name, logoSrc }: { name: string; logoSrc?: StaticImageData }) => (
  <div>
    {logoSrc ? (
      <div className="relative h-24 rounded flex flex-col items-center justify-center p-4 overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110">
        <Image src={logoSrc} alt={`${name} logo`} layout="fill" objectFit="contain" />
      </div>
    ) : null}
  </div>
);

const PartnersGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
    {partners.map((partner, index) => (
      <PartnerLogo key={index} name={partner.name} logoSrc={partner.logoSrc} />
    ))}
  </div>
);

export default PartnersGrid;
