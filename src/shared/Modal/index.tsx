import React from "react";
import './Modal.scss';
import Link from "next/link";
import {Form, Button, Modal} from 'react-bootstrap';

function SharedModal(props : any) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{border: "none"}}></Modal.Header>
            <Modal.Body>
                <h2>Passwort vergessen?</h2>
                <p>Geben Sie die mit Ihrem Konto verknüpfte E-Mail-Adresse ein, und wir senden Ihnen einen Link zum
                    Zurücksetzen Ihres Passworts.</p>
                <Form>
                    <Form.Group className="form-block">
                        <Form.Control type="email" placeholder="E-mail" />
                        <Form.Label>E-mail</Form.Label>
                        {/* <span>Error</span> */}
                    </Form.Group>
                    <Button variant="primary" type="submit">Fortfahren</Button>
                </Form>
                <p>Neu hier? <Link href={"/signup"}>Jetzt registrieren</Link></p>
            </Modal.Body>
        </Modal>
    )
}

export default SharedModal;