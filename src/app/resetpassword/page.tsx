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
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const schema = yup.object().shape({
  password_current: yup.string().required("Current Password is required"),
  password_new: yup.string().required("New Password is required"),
  confirm_password: yup.string().oneOf([yup.ref('password_new'), undefined], 'Passwords must match')
    .required("Confirm Password is required")
})

function ResetPassword() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);

  const userStore: any = useSelector(state => state)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const onSubmit = (data: any) => {
    delete data.confirm_password;

    apiCaller
      .patch(`/api/v1/user/${userStore?.user?.pk}/update_password`, data)
      .then((response) => {
        if (response.data === "" && response.status === 204) {
          setIsSuccess(true)
          localStorage.clear()
        }
      })
      .catch((error) => {
        toast.error(error.response.data.errors[0].detail)
      });
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

      {/* Code for Reset Passowrd  */}
      {!isSuccess && (
        <div className="form-wrap text-center">
          <Row>
            <Col xs>
              <div className="logo">
                <Image src={logoImg} alt="Logo" />
              </div>
              <h2>Neues Passwort</h2>
              <Form className="my-0" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="form-block">
                  <Form.Control
                    type="password"
                    placeholder="Passwort"
                    {...register("password_current")}
                  />
                  <Form.Label>Aktuelles Passwort</Form.Label>
                  {errors.password_current && <p className="error">{errors.password_current.message}</p>}
                </Form.Group>

                <Form.Group className="form-block">
                  <Form.Control
                    type="password"
                    placeholder="Passwort"
                    {...register("password_new")}
                  />
                  <Form.Label>Passwort</Form.Label>
                  {errors.password_new && <p className="error">{errors.password_new.message}</p>}
                </Form.Group>
                <Form.Group className="form-block">
                  <Form.Control
                    type="password"
                    placeholder="Passwort bestätigen"
                    {...register("confirm_password")}
                  />
                  <Form.Label>Passwort bestätigen</Form.Label>
                  {errors.confirm_password && <p className="error">{errors.confirm_password.message}</p>}

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

      <Toaster />
    </section>
  );
}

export default ResetPassword;
