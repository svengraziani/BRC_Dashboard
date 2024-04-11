"use client";

import Link from "next/link";
import "./signup.scss";
import "../../css/sass/global.scss";
import Image from "next/image";
import logoImg from "../../Assets/images/logo.svg";
import arrowImg from '../../assets/images/icon-back.svg';
import circleImg from '../../assets/images/icon-circle.svg';
import sectionImg from "../../Assets/images/section-logo.png";
import Form from 'react-bootstrap/Form';
import { Button, Row, Col } from "react-bootstrap";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  let router = useRouter();

  const submitHandler = useCallback((e) => {
    e.preventDefault();
    router.push("/register")
  }, [router]);

  return(
    <section className="form-bg">
      <div className="section-logo">
            <Image src={sectionImg} />
      </div>
      <div className="form-wrap">
        <Row>
          <Col xs>
            <Link href={"/login"} style={{display: "flex", alignItems: "center", gap: "5px"}}>
              <i className="icon-back">
              <Image src={arrowImg}></Image>
              </i>Zurück zum Login</Link>
            <div className="logo">
                <Image src={logoImg} />
            </div>
            <h2>Registrierung</h2>
            <Form onSubmit={submitHandler}>
              <Form.Check
                type={"radio"}
                name={"registration"}
                id={`einzelaccount`}
                label={<div style={{display: "flex", gap: "10px"}}><span>Einzelaccount</span><i className="icon-circle">
                  <Image src={circleImg} />
                </i></div>} />

              <Form.Check
                type={"radio"}
                name={"registration"}
                id={`unternehmensaccount`}
                label={<div style={{display: "flex", gap: "10px"}}><span>Unternehmensaccount</span><i className="icon-circle">
                  <Image src={circleImg} />
                </i></div>} />
              <Button type="submit">Weiter</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  )
}
