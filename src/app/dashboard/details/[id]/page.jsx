"use client";

import { useParams } from 'next/navigation';
import './details.scss';
import Header from '../../../../shared/Header';
import Sidebar from '../../../../shared/Sidebar';
import { Button, Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import imgAnlagen from '../../../../Assets/images/icon-anlagen.svg';
import imgPrev from '../../../../Assets/images/chevron-back.svg';
import imgInfo from '../../../../Assets/images/icon_informationen.svg';
import imgComponent from '../../../../Assets/images/icon_componenten.svg';
import imgLive from '../../../../Assets/images/icon_livedaten.svg';
import imgVerwal from '../../../../Assets/images/icon_verwaltung.svg';
import imgLogbuch from '../../../../Assets/images/icon-logbuch.svg';

function DashboardDetails(){
    const {id}= useParams()

    return (
        <section className='user-details'>
            <Header />
            <div className='details-wrap'>
                <Sidebar />
                <div className='details-block'>
                    <div className='details-primary'>
                        <Row className='heading-wrap align-items-center'>
                            <Col md="6" className='d-flex'>
                                <Col md="1">
                                    <Button variant='prev'><i className='icon-back'>
                                        <Image src={imgPrev} alt='Icon' />
                                    </i></Button>
                                </Col>
                                <Col md="5" className='heading'>
                                    <h2><i className='icon-anlagen'>
                                        <Image src={imgAnlagen} alt='Icon' />
                                    </i>Anlage A - Anlagendetails</h2>
                                </Col>
                            </Col>
                            <Col md="6" className='d-flex justify-content-end gap-4'>
                                <Button>Änderungen Speichern</Button>
                                <Button>Anlage löschen</Button>
                            </Col>
                        </Row>
                        <ul className='d-flex'>
                            <li><Button variant='tab' className='active'><i><Image src={imgInfo} alt='Icon' /></i>Informationen</Button></li>
                            <li><Button variant='tab'><i><Image src={imgLive} alt='Icon' /></i>Livedaten</Button></li>
                            <li><Button variant='tab'><i><Image src={imgLogbuch} alt='Icon' /></i>Logbuch</Button></li>
                            <li><Button variant='tab'><i><Image src={imgComponent} alt='Icon' /></i>Komponenten</Button></li>
                            <li><Button variant='tab'><i><Image src={imgVerwal} alt='Icon' /></i>Verwaltung</Button></li>
                        </ul>
                    </div>
                    <div className='details-secondary'></div>
                </div>
            </div>
        </section>
    )
}

export default DashboardDetails