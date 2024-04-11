"use client";

import Image from "next/image";
import arrowImg from '../../assets/images/icon-back.svg';
import './emailpath.scss';
import "../../css/sass/global.scss";

export default function Emailpath() {
    return (
        <section className="navigation">
            <div className="navigation-wrap">
            <h2>Kunde klickt auf den Link in der E-Mail</h2>
            <i className="icon-back">
                <Image src={arrowImg} />
            </i>
            </div>
        </section>
    )
}