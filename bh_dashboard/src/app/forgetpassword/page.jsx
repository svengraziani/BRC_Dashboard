"use client";

import "./fpassword.scss";
import "../../css/sass/global.scss";
import Link from "next/link";
import {Form, Button} from 'react-bootstrap';

export default function Forgetpassword() {
  return(
    <div className="forget-password">
    <div className="form-wrap">
      <h2>Passwort vergessen?</h2>
      <p>Geben Sie die mit Ihrem Konto verknüpfte E-Mail-Adresse ein, und wir senden Ihnen einen Link zum 
      Zurücksetzen Ihres Passworts.</p>
      <Form>
      <Form.Group className="form-block">
        <Form.Control type="email" placeholder="E-mail" />
        <Form.Label>E-mail</Form.Label>
        <span>Error</span>
      </Form.Group>
        <Button variant="primary" type="submit">Fortfahren</Button>
      </Form>
      <p>Neu hier? <Link href={"/signup"}>Jetzt registrieren</Link></p>
    </div>
    </div>
  )
}
