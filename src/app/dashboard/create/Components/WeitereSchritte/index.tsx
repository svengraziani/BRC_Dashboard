"use client";

import { Button, Col, Row } from 'react-bootstrap';
import './Weitere.scss';
import Image from 'next/image';
import imgPlayStore from '../../../../../Assets/images/play-store.png';
import imgAppStore from '../../../../../Assets/images/app-store.png';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { apiCaller } from '@/services/apiCaller';

function WeitereSchritte() {
  const router = useRouter();
  const reduxStore: any = useSelector(state => state)

  const facilityCreationHandler = () => {
    let payload = JSON.parse(JSON.stringify(reduxStore.facility));
    delete payload.email;
    payload.energy_storage_exists = true;
    payload.wallbox_exists = true;

    apiCaller.post("/api/v1/facility", payload)
    .then(response => {
      if(response.status === 200) {
        router.push("/dashboard")
      }
    })
  }

  return (
    <div className='weitere'>
      <h3>Möchen Sie die Anlage in Betrieb nehmen?</h3>
      <p>Bitte die BRC Power Manager App Am Smartphone oder Tablet installieren:</p>
      <Row className='justify-content-center store-wrap'>
        <Col md="3">
          <span className="head">Android:</span>
          <div className="store-logo">
            <Image src={imgPlayStore} alt='Logo' />
          </div>
        </Col>
        <Col md="3">
          <span className="head">iOS</span>
          <div className="store-logo">
            <Image src={imgAppStore} alt='Logo' />
          </div>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs>
        <Button onClick={facilityCreationHandler}>Speichern und Schließen</Button>
        </Col>
      </Row>
    </div>
  )
}

export default WeitereSchritte
