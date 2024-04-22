"use client";

import Image from "next/image";
import logoImg from "../../Assets/images/logo.svg";
import sectionImg from "../../Assets/images/section-logo.png";
import "./login.scss";
import { Form, Row, Button, Col } from "react-bootstrap";
import Link from "next/link";
import React, { FormEvent, useCallback, useState } from "react";
import SharedModal from "../../shared/Modal";
import { useRouter } from "next/navigation";
import backgroundImage from '../../Assets/images/background.jpg'

export default function Login() {
  const [forgetPasswordModal, setForgetPasswordModal] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()

  const submitHandler = useCallback((e: FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    
    // @ API Calls
    router.push("/loginpath")
  }, [email, password])

  return (
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
      <SharedModal show={forgetPasswordModal} onHide={()=> setForgetPasswordModal(false)}/>
      <div className="form-wrap">
      <Row>
        <Col xs>
        <div className="logo">
            <Image src={logoImg} alt="Logo" />
        </div>
        <h2>Login</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="form-block">
            <Form.Control type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
            <Form.Label>E-mail</Form.Label>
          </Form.Group>
          <Form.Group className="form-block">
            <Form.Control type="password" placeholder="Passwort" value={password} onChange={e => setPassword(e.target.value)}/>
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
