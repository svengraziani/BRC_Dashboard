"use client";

import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import logoImg from "../../Assets/images/logo.svg";
import sectionImg from "../../Assets/images/section-logo.png";
import backgroundImage from "../../Assets/images/background.jpg";
import { Form, Row, Button, Col } from "react-bootstrap";
import "./ResetPassword.scss";
import { useRouter } from "next/navigation";
import { apiCaller } from "@/services/apiCaller";

function ResetPassword() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let token = localStorage.getItem("token");


  const [userDetdails,setuserDetails]=useState<any>()

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // User Details
useEffect(()=>{
  apiCaller.get("/api/v1/user/",config).then((response)=>{
      console.log("response11112222",response)
    setuserDetails(response?.data?.results?.[0])
  })  .catch((error) => {
    console.log("error",error)

  })
},[])

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    let payload = {
      password_current: password,
      password_new: confirmPassword,
    };

    apiCaller
      .patch(`/api/v1/user/${userDetdails?.pk}/update_password/`, payload, config)
      .then((response) => {
        console.log("response1111", response);
        // setBenutzerData(response?.data?.results)
      })
      .catch((error) => {
        console.log("error", error);
      });

    // @API Calls
    setIsSuccess(true);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
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
          zIndex: "-1",
        }}
      />
      <div className="section-logo">
        <Image src={sectionImg} alt="Section-Logo" />
      </div>
      {/* <SharedModal show={forgetPasswordModal} onHide={()=> setForgetPasswordModal(false)}/> */}

      {/* Code for Reset Passowrd  */}
      {!isSuccess && (
        <div className="form-wrap text-center">
          <Row>
            <Col xs>
              <div className="logo">
                <Image src={logoImg} alt="Logo" />
              </div>
              <h2>Neues Passwort</h2>
              <Form onSubmit={submitHandler} className="my-0">
                <Form.Group className="form-block">
                  <Form.Control
                    type="password"
                    placeholder="Passwort"
                    onChange={handlePasswordChange}
                  />
                  <Form.Label>Passwort</Form.Label>
                </Form.Group>
                <Form.Group className="form-block">
                  <Form.Control
                    type="password"
                    placeholder="Passwort bestätigen"
                    onChange={handleConfirmPasswordChange}
                  />
                  <Form.Label>Passwort bestätigen</Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Neues Passwort speichern
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      )}

      {/* Success message */}
      {isSuccess && (
        <div className="form-wrap">
          <h2>Passwort erfolgreich zurückgesetzt</h2>
          <p>
            Sie können sich jetzt mit Ihrem neuen Passwort bei Ihrem Account
            einloggen.
          </p>
          <Button onClick={() => router.push("/login")}>Zum Login</Button>
        </div>
      )}
    </section>
  );
}

export default ResetPassword;
