import React, { useState } from "react";
import Script from 'next/script';


const VNOC_newsletter = ({domain}) => {
  
  return (
    <div>
       
        <div className="widget1">
        <Script src={`https://manage.vnoc.com/widgets/leads?domain=${domain}&c=black&class=widget1`}/>
        </div>
    </div>
  );
};

export default VNOC_newsletter;