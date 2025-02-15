"use client";

import Image from 'next/image';
import logoImg from "../../Assets/images/logo.svg";
import sectionImg from "../../Assets/images/section-logo.png";
import backgroundImage from '../../Assets/images/background.jpg';
import './CreatePassword.scss';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

function CreatePassword() {
    const router = useRouter();
    const [isSuccess, setIsSuccess] = useState(false);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        // @API Calls
        setIsSuccess(true)
    }

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

            {/* Code for Reset Passowrd  */}
            {!isSuccess && (
                <div className="form-wrap">
                    <Row>
                        <Col xs>
                            <div className="logo">
                                <Image src={logoImg} alt="Logo" />
                            </div>
                            <h2>Passwort erstellen</h2>
                            <Form onSubmit={submitHandler} className='my-0'>
                                <Form.Group className="form-block">
                                    <Form.Control type="password" placeholder="Passwort" />
                                    <Form.Label>Passwort</Form.Label>
                                </Form.Group>
                                <Form.Group className="form-block">
                                    <Form.Control type="password" placeholder="Passwort bestätigen" />
                                    <Form.Label>Passwort bestätigen</Form.Label>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Passwort speichern
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            )}

            {/* Success message */}
            {isSuccess && (
                <div className='form-wrap'>
                    <h2>Registrierung abgeschlossen</h2>
                    <p>Sie können sich jetzt mit Ihrem Passwort bei Ihrem Account einloggen.</p>
                    <Button onClick={() => router.push("/login")}>Zum Login</Button>
                </div>
            )}

        </section>
    )
}

export default CreatePassword
