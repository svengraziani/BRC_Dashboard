"use client";

import Image from "next/image";
import logoImg from "../../Assets/images/logo.svg";
import sectionImg from "../../Assets/images/section-logo.png";
import "./login.scss";
import "../../css/sass/global.scss";
import { Form, Row, Button, Col } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import SharedModal from "../../shared/Modal";

export default function Login() {
  const [forgetPasswordModal, setForgetPasswordModal] = useState(false)

  return (
    <section className="form-bg">
      <div className="section-logo">
            <Image src={sectionImg} />
      </div>
      <SharedModal show={forgetPasswordModal} onHide={()=> setForgetPasswordModal(false)}/>
      <div className="form-wrap">
      <Row>
        <Col xs>
        <div className="logo">
            <Image src={logoImg} />
        </div>
        <h2>Login</h2>
        <Form>
          <Form.Group className="form-block">
            <Form.Control type="email" placeholder="E-mail" />
            <Form.Label>E-mail</Form.Label>
          </Form.Group>
          <Form.Group className="form-block">
            <Form.Control type="password" placeholder="Passwort" />
            <Form.Label>Passwort</Form.Label>
          </Form.Group>
          <p onClick={()=> setForgetPasswordModal(true)}>Passwort vergessen</p> <br></br>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <p>
          Neu hier? <Link href={"/signup"}>Jetzt registrieren</Link>
        </p>
        </Col>
      </Row>
      </div>
    </section>
  );
}
