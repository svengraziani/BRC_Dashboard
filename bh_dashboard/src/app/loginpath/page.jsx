"use client";

import Link from "next/link";
import './loginpath.scss';
import "../../css/sass/global.scss";
import Image from "next/image";
import arrowImg from '../../assets/images/icon-back.svg';

export default function Loginpath () {
    return (
        <section className="navigation">
            <div className="navigation-wrap">
            <h2>Navigations-Screen</h2>
            <span className="not-part">(nicht teil der Anwendung)</span>
            <p>Je nach Benutzerrolle wird der User auf das jeweilige Dashboard weitergeleteitet</p>
            <ul>
                <li><Link href={"#"}>Dashboard Handwerksbetrieb</Link><i className="icon-back">
                    <Image src={arrowImg} /></i></li>
                <li><Link href={"#"}>Dashboard Servicetechniker</Link><i className="icon-back">
                <Image src={arrowImg} /></i></li>
                <li><Link href={"#"}>Dashboard Endkunde</Link><i className="icon-back">
                <Image src={arrowImg} /></i></li>
            </ul>
            </div>
        </section>
    )
}