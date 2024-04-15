"use client";

import Image from "next/image";
import imgSetting from '../../Assets/images/icon-setting.svg';


function Einstellungen() {
  return (
    <div className="einstellungen-wrap">
      <div className="heading-wrap">
        <h2><i className="icon">
            <Image src={imgSetting} alt="Icon"/>    
        </i>Einstellungen</h2>
      </div>
    </div>
  )
}

export default Einstellungen
