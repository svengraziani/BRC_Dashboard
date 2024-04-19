"use client";

import Image from "next/image";
import arrowImg from '../../Assets/images/icon-back.svg';
import './emailpath.scss';
import { useRouter } from "next/navigation";

export default function Emailpath() {
    const router = useRouter();
    return (
        <section className="navigation">
            <div className="navigation-wrap">
            <h2>Kunde klickt auf den Link in der E-Mail</h2>
            <i className="icon-back" onClick={()=> router.push("/resetpassword")}>
                <Image src={arrowImg} alt="Icon" />
            </i>
            </div>
        </section>
    )
}