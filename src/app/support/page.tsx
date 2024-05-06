"use client";

import Image from 'next/image';
import imgSupport from '../../Assets/images/icon-support.svg';
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';
import './support.scss';
import { Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

function Support() {
  return (
    <>
      <Header />
    <section className='dashboard support'>
        <Sidebar />
        <div className='dashboard-right'>
            <div className='heading-wrap'>
            <h2><i className='icon-support'>
                <Image src={imgSupport} alt='Icon' />
            </i>Support</h2>
            </div>
            <div className='contact'>
                <div className='hotline'>
                    <span className='head'>Hotline</span>
                    <div className='contact-card'>
                        <Link href={"tel: `{+4972439241486}`"}>Support: +49 7243 924 1486</Link>
                        <span className='timing'>Montags bis freitags von 9 – 16 Uhr</span>
                    </div>
                </div>
                <div className='email d-flex flex-column'>
                    <span className='head'>E-Mail</span>
                    <div className='contact-card h-100'>
                    <Link href={"mailto: `{support@brc-solar.de}`"}>support@brc-solar.de</Link>
                    </div>
                </div>
            </div>
            <Row className='button-wrap'>
                <Col md="3">
                <Button>FAQs</Button>
                </Col>
            </Row>
        </div>
    </section>
    </>
  )
}

export default Support
