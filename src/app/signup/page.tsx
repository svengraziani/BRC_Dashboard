"use client";

import Link from "next/link";
import "./signup.scss";
import Image from "next/image";
import logoImg from "../../Assets/images/logo.svg";
import arrowImg from '../../Assets/images/icon-back.svg';
import circleImg from '../../Assets/images/icon-circle.svg';
import sectionImg from "../../Assets/images/section-logo.png";
import backgroundImage from '../../Assets/images/background.jpg';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col } from "react-bootstrap";
import { FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  let router = useRouter();
  const [signupRadio, setSignupRadio] = useState<string>('')

  const submitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (signupRadio) {
      router.push(`/register?regis=${signupRadio}`)
    }
  }, [router, signupRadio]);

  return(
    <section className="form-bg">
    <Image
      alt="backgroun-image"
      src={backgroundImage}
      placeholder="blur"
      fill
      quality={100}
      sizes="100vw"
      style={{
        objectFit:"cover",
        zIndex:"-1"
      }}
    />
      <div className="section-logo">
            <Image src={sectionImg} alt="Section-Logo" />
      </div>
      <div className="form-wrap">
        <Row>
          <Col xs>
            <Link href={"/login"} style={{display: "flex", alignItems: "center", gap: "5px"}}>
              <i className="icon-back">
              <Image src={arrowImg} alt="arrow-image"></Image>
              </i>Zurück zum Login</Link>
            <div className="logo">
                <Image src={logoImg} alt="Logo" />
            </div>
            <h2>Registrierung</h2>
            <Form onSubmit={submitHandler}>
              <Form.Check
                type={"radio"}
                name={"registration"}
                id={`einzelaccount`}
                value={'einzelaccount'}
                label={<div style={{display: "flex", gap: "10px"}}><span>Einzelaccount</span><i className="icon-circle">
                  <Image src={circleImg} alt="Icon" />
                </i></div>} 
                onChange={e => {
                  setSignupRadio(e.target.value)
                }}
                />

              <Form.Check
                type={"radio"}
                name={"registration"}
                id={`unternehmensaccount`}
                value={'unternehmensaccount'}
                label={<div style={{display: "flex", gap: "10px"}}><span>Unternehmensaccount</span><i className="icon-circle">
                  <Image src={circleImg} alt="Icon" />
                </i></div>}
                onChange={e => {
                  setSignupRadio(e.target.value)
                }}
                />

              <Button type="submit">Weiter</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  )
}
