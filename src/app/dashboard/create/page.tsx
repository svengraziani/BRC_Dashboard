// DashboardCreation.tsx

"use client";

import Header from '@/shared/Header'
import Sidebar from '@/shared/Sidebar'
import './Create.scss';
import '../dashboard.scss';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Image from 'next/image';
import imgAnlagen from '../../../Assets/images/icon_anlage.svg';
import imgVerwal from '../../../Assets/images/icon_verwaltung.svg';
import imgInfo from '../../../Assets/images/icon_informationen.svg';
import imgComponent from '../../../Assets/images/icon_componenten.svg';
import imgAttention from '../../../Assets/images/icon-modal-attention.svg';
import { Dispatch, SetStateAction, useState } from 'react';
import WeitereSchritte from './Components/WeitereSchritte';
import Komponenten from '../Components/Komponenten';
import Informationen from '../Components/Informationen';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { useRouter } from 'next/navigation';
import SharedModal from '@/shared/Modal';

interface CancelModalProps {
  setProcessModal: Dispatch<SetStateAction<boolean>>
}

function CancelProcessModal({setProcessModal} : CancelModalProps) {
  const router = useRouter();

  return (
    <Modal.Body>
      <i className="icon"><Image src={imgAttention} alt='Icon' /></i>
      <h2>Prozess abbrechen?</h2>
      <p>Soll der Prozess abgebrochen werden? Bisherige Eingaben werden nicht gespeichert.</p>
      <Button className='mb-3' onClick={() => setProcessModal(false)}>Prozess fortführen</Button>
      <Button onClick={() => router.push("/dashboard")}>Ja, Prozess abbrechen</Button>
    </Modal.Body>
  )
}

function DashboardCreation() {
    const [activeStatus, setActiveStatus] = useState<number>(0);
    const [processModal, setProcessModal] = useState<boolean>(false);

    const list = [
        {
            name: "Schritt 1: Informationen",
            srcImg: imgInfo
        },
        {
            name: "Schritt 2: Komponenten",
            srcImg: imgComponent
        },
        {
            name: "Weitere Schritte",
            srcImg: imgVerwal
        }
    ]

    const generalInformationHandler =(data:any)=>{
      setActiveStatus(activeStatus + 1);
    }

    const componentHandler=(compoData:any)=>{
      setActiveStatus(activeStatus + 1);
    }

  return (
    <>
      <Header />
      <section className="dashboard dashboard-create">

        <SharedModal show={processModal} modalContent={<CancelProcessModal setProcessModal={setProcessModal} />} onHide={() => setProcessModal(false)} />

        <Sidebar />
        <div className="dashboard-right">
          <div className="creation-primary">
            <Row className="heading-wrap">
              <Col md="6">
                <h2>
                  <i className="icon">
                    <Image src={imgAnlagen} alt="Icon" />
                  </i>
                  Neue Anlage erstellen
                </h2>
              </Col>
              <Col md="6" className="d-flex justify-content-end gap-3">
                <Button disabled={activeStatus === 0 ? true : false} onClick={() => {
                  if (activeStatus > 0) {
                    setActiveStatus(activeStatus - 1)
                  }
                }}><i className="icon-arrow"><GrPrevious /></i> Zurück</Button>
                <Button variant='cancel' onClick={() => setProcessModal(true)}>Abbrechen</Button>
                <Button disabled={activeStatus === 2 ? true : false} onClick={() => {
                  if (activeStatus < 2) {
                    // setActiveStatus(activeStatus + 1);
                 
                    generalInformationHandler;
                    componentHandler;
                  }
                }}>Weiter <i className="icon-arrow"><GrNext /></i></Button>
              </Col>
            </Row>
            <ul className="d-flex p-0 m-0">
              {
                list.map((item, index) => (
                  <li key={index}>
                    <Button variant="infos" className={`${index === activeStatus ? "active" : ""}`}>
                      <i>
                        <Image src={item.srcImg} alt="Icon" />
                      </i>
                      {
                        item.name
                      }
                    </Button>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="creation-secondary">
            {activeStatus === 0 && (
              <Informationen isDashboardDetail={true} generalInformationHandler={generalInformationHandler} />
            )}

            {activeStatus === 1 && (
              <Komponenten isDashboardDetail={true} componentHandler={componentHandler}/>
            )}

            {activeStatus === 2 && (
              <WeitereSchritte />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default DashboardCreation;
