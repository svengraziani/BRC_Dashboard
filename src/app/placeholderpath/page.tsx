"use client";

import Image from 'next/image';
import arrowImg from '../../Assets/images/icon-back.svg';
import './placeholderpath.scss';
import { useRouter } from 'next/navigation';

function PlaceholderPath() {
    const router = useRouter();

  return (
    <section className='navigation'>
      <div className="navigation-wrap">
        <h2>Platzhalter Screen</h2>
        <p>Kunde erhält E-Mail und klickt auf Link</p>
        <i className="icon-back" onClick={()=> router.push("/createpassword")}>
            <Image src={arrowImg} alt="Icon" />
        </i>
      </div>
    </section>
  )
}

export default PlaceholderPath
