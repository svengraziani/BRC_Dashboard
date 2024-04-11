"use client";

import Link from "next/link";
import "./signup.scss";
import "../../css/sass/global.scss";
import Image from "next/image";
import logoImg from "../../Assets/images/logo.svg";
import Form from 'react-bootstrap/Form';
import { Button, Row, Col } from "react-bootstrap";

export default function Signup() {
  return(
    <section className="form-bg">
      <div className="form-wrap">
        <Row>
          <Col xs>
            <Link href={"/login"}><i className="icon-back"></i>Zurück zum Login</Link>
            <div className="logo">
              <Link href={"#"}>
                <Image src={logoImg} />
              </Link>
            </div>
            <h2>Registrierung</h2>
            <Form>
              <Form.Check
                type={"radio"}
                name={"registration"}
                id={`einzelaccount`}
                label={`Einzelaccount`} />

              <Form.Check
                type={"radio"}
                name={"registration"}
                id={`unternehmensaccount`}
                label={`Unternehmensaccount`} />
              <Button type="submit">Weiter</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  )
}
