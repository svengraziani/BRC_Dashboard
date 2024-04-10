"use client";

import Image from "next/image";
import logoImg from "../../assets/images/logo.svg";
import "./login.scss";
import "../../css/sass/global.scss";
import {Form, Button} from 'react-bootstrap';

import Link from "next/link";

export default function Login() {
  return (
    <section className="form-bg">
    <div className="login-form">
      <div className="logo">
        <Link href={'#'}>
        <Image src={logoImg} />
        </Link>
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
        <Link href={"/forgetpassword"}>Passwort vergessen</Link>
        <Button variant="primary" type="submit">Login</Button>
      </Form>
      <p>Neu hier? <Link href={"/signup"}>Jetzt registrieren</Link></p>
    </div>
    </section>
  )
}