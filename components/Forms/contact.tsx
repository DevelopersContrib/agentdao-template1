import React from 'react';
import Script from 'next/script';
import { getDomain } from '@/lib/datadomain'

const VNOC_contact: React.FC = () => {
  const domain = getDomain();
  return (
    <div>
       
        <div className="widget2">
          <h3>{domain}</h3>
        <Script
          src={`https://tools.contrib.com/contactform?d=${domain}`}
          strategy="afterInteractive"
        />
        </div>
    </div>
  );
};

export default VNOC_contact;