import Image from 'next/image'
import {getdata} from "@/lib/data"

export default function Logo({domain,logo}) {
  return(
    <>
      {
        logo ? <Image 
              src={logo}
              width={300}
              height={300}
              alt=""
              className='d-inline-flex img-fluid mb-3'
            /> : <h1 className="tw-text-xxxl font-800 text-capitalize">{domain}</h1>
      }
      
    </>
  )
}
