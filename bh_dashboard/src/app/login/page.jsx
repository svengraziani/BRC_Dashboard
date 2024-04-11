"use client";

import Image from "next/image";
import logoImg from "../../Assets/images/logo.svg";
import sectionImg from "../../Assets/images/section-logo.png";
import "./login.scss";
import "../../css/sass/global.scss";
import { Form, Row, Button, Col } from "react-bootstrap";
import Link from "next/link";
import { useCallback, useState } from "react";
import SharedModal from "../../shared/Modal";
import { useRouter } from "next/navigation";

export default function Login() {
  const [forgetPasswordModal, setForgetPasswordModal] = useState(false)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const router = useRouter()

  const submitHandler = useCallback((e)=> {
    e.preventDefault();
    
    // @ API Calls
    router.push("/loginpath")
  }, [email, password])

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
