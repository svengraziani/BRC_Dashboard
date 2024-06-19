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
import useLocalStorage from "@/services/useLocalStorage";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("This field is required")
})

function ForgetPasswordModal({ setForgetPasswordModal }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = (formData: any) => {
    console.log(formData);
    apiCaller.post("/api/v1/password_reset/", formData)
      .then(response => {
        if (response.data.status === "OK") {
          toast.success("E-Mail erfolgreich gesendet")
          setForgetPasswordModal(false)
        }
      })
  }

  return (
    <Modal.Body>
      <h2>Passwort vergessen?</h2>
      <p>Geben Sie die mit Ihrem Konto verknüpfte E-Mail-Adresse ein, und wir senden Ihnen einen Link zum
        Zurücksetzen Ihres Passworts.</p>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Form.Group className="form-block">
          <Form.Control type="email" spellCheck={false} placeholder="E-mail" {...register("email")} />
          <Form.Label>E-mail</Form.Label>

          {errors.email && (
            <div className="error-message">
              {errors.email.message}
            </div>
          )}

        </Form.Group>
        <Button variant="primary" type="submit">Fortfahren</Button>
      </Form>
      <p>Neu hier? <Link href={"/signup"}>Jetzt registrieren</Link></p>
      <Toaster />
    </Modal.Body>
  )
}

export default function Login() {
  const [forgetPasswordModal, setForgetPasswordModal] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  // Local Storage Environments
  const [token, setToken] = useLocalStorage("token", null)
  const [craftBusiness, setCraftBusiness] = useLocalStorage("craft_business", null)

  const router = useRouter();

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
        let { data } = response;

        setToken(data.token)

        return data.user.pk;
      })
      .then(async (userId) => {
        let response = await apiCaller.get(`/api/v1/user/${userId}/`)
        return response.data;
      })
      .then(userInfo => {
        let { craft_business_roles } = userInfo;
        apiCaller.get('/api/v1/craft-business/')
          .then(craftBusiness => {
            let craftBusinessType = craftBusiness.data.results.filter((item: any) => {
              return item.pk === craft_business_roles[0].craft_business;
            })

            const craftInfo: any = {
              craft_business_name: craftBusinessType[0].name,
              craft_business_type: craft_business_roles[0].type
            }

            setCraftBusiness(craftInfo)
            router.push("/loginpath")
          })
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

      <SharedModal show={forgetPasswordModal} modalContent={<ForgetPasswordModal setForgetPasswordModal={setForgetPasswordModal} />} onHide={() => setForgetPasswordModal(false)} />

      <div className="form-wrap login">
        <Row>
          <Col xs>
            <div className="logo">
              <Image src={logoImg} alt="Logo" />
            </div>
            <h2>Login</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group className="form-block">
                <Form.Control type="email" placeholder="E-mail" spellCheck={false} value={email} onChange={handleEmailChange} />
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
