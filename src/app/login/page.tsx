"use client";

import Image from "next/image";
import logoImg from "../../Assets/images/logo.svg";
import sectionImg from "../../Assets/images/section-logo.png";
import "./login.scss";
import { Form, Row, Button, Col, Modal } from "react-bootstrap";
import Link from "next/link";
import React, { FormEvent, useCallback, useState } from "react";
import SharedModal from "../../shared/Modal";
import { useRouter } from "next/navigation";
import backgroundImage from '../../Assets/images/background.jpg'
import { apiCaller } from "@/services/apiCaller";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUserData } from "@/redux/slice/userSlice";

function ForgetPasswordModal() {
  const router = useRouter();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    router.push("/emailpath");
  }

  return (
    <Modal.Body>
      <h2>Passwort vergessen?</h2>
      <p>Geben Sie die mit Ihrem Konto verknüpfte E-Mail-Adresse ein, und wir senden Ihnen einen Link zum
        Zurücksetzen Ihres Passworts.</p>
      <Form onSubmit={submitHandler}>
        <Form.Group className="form-block">
          <Form.Control type="email" placeholder="E-mail" />
          <Form.Label>E-mail</Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit">Fortfahren</Button>
      </Form>
      <p>Neu hier? <Link href={"/signup"}>Jetzt registrieren</Link></p>
    </Modal.Body>
  )
}

export default function Login() {
  const [forgetPasswordModal, setForgetPasswordModal] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const router = useRouter();

  const dispatch = useDispatch()

  const submitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (!email) {
      setEmailError('Please enter your email');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please enter your password');
    } else {
      setPasswordError('');
    }


    const payload = {
      email,
      password
    }

    apiCaller.post("/api/v1/auth/", payload)
      .then(response => {
        let {data} = response;

        const userData = {
          token: data.token,
          email: data.user.email,
          firstName: data.user.first_name,
          lastName: data.user.last_name,
          isActive: data.user.is_active,
          isSuperUser: data.user.is_superuser,
          pk:data.user.pk
        }

        localStorage.setItem("token", userData.token)

        // dispatch(setUserData(userData))

        router.push("/loginpath")
      })
      .catch(error => {
        error.response.data.errors.map((item: any) => {
          toast.error(item.detail)
        })

      })

  }, [router, email, password])

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError && e.target.value) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError && e.target.value) {
      setPasswordError('');
    }
  };

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
          objectFit: "cover",
          zIndex: "-1"
        }}
      />
      <div className="section-logo">
        <Image src={sectionImg} alt="Section-Logo" />
      </div>

      <SharedModal show={forgetPasswordModal} modalContent={<ForgetPasswordModal />} onHide={() => setForgetPasswordModal(false)} />

      <div className="form-wrap login">
        <Row>
          <Col xs>
            <div className="logo">
              <Image src={logoImg} alt="Logo" />
            </div>
            <h2>Login</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group className="form-block">
                <Form.Control type="email" placeholder="E-mail" value={email} onChange={handleEmailChange} />
                <Form.Label>E-mail</Form.Label>
                {emailError && <p className="error" >{emailError}</p>}
              </Form.Group>
              <Form.Group className="form-block">
                <Form.Control type="password" placeholder="Passwort" value={password} onChange={handlePasswordChange} />
                <Form.Label>Passwort</Form.Label>
                {passwordError && <p className="error">{passwordError}</p>}
              </Form.Group>
              <p onClick={() => setForgetPasswordModal(true)}>Passwort vergessen</p> <br></br>
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

      <Toaster position="top-right" />

    </section>
  );
}
