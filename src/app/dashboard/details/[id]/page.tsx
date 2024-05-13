"use client";
import './details.scss';
import Header from '../../../../shared/Header';
import Sidebar from '../../../../shared/Sidebar';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Image from 'next/image';
import imgAnlagen from '../../../../Assets/images/icon-anlagen.svg';
import imgPrev from '../../../../Assets/images/chevron-back.svg';
import imgInfo from '../../../../Assets/images/icon_informationen.svg';
import imgComponent from '../../../../Assets/images/icon_componenten.svg';
import imgLive from '../../../../Assets/images/icon_livedaten.svg';
import imgVerwal from '../../../../Assets/images/icon_verwaltung.svg';
import imgLogbuch from '../../../../Assets/images/icon-logbuch.svg';
import imgWarn from '../../../../Assets/images/icon-modal-warn.svg';
import Informationen from '../../Components/Informationen';
import Komponenten from '../../Components/Komponenten';
import { useCallback, useEffect, useState } from 'react';
import Livedaten from '../../Components/Livedaten';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import DashboardLogbuch from '../../Components/Logbuch';
import Verwaltung from '../../Components/Verwaltung';
import SharedModal from '@/shared/Modal';

function DeleteAttachmentModal() {
  return (
    <Modal.Body>
      <i className="icon"><Image src={imgWarn} alt='Icon' /></i>
      <h2>Anlage löschen</h2>
      <p>Sind Sie sicher, dass sie die Anlage löschen möchten?</p>
      <Button>Ja, Anlage löschen</Button>
    </Modal.Body>
  )
}

function DashboardDetails() {
  const [activeStatus, setActiveStatus] = useState<string>("Informationen")
  const [attachmentModal, setAttachmentModal] = useState<boolean>(false);
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const activateStatus = (statusName: string) => {
    setActiveStatus(statusName)
    router.push(pathname + '?' + createQueryString('status', statusName))
  }

  useEffect(()=> {
    let searchParam = searchParams.get("status")
    setActiveStatus(searchParam ? searchParam : "Informationen")
  }, [searchParams])

  const list = [
    {
      name: "Informationen",
      imgSrc: imgInfo
    }, 
    {
      name: "Livedaten",
      imgSrc: imgLive
    },
    {
      name: "Logbuch",
      imgSrc: imgLogbuch
    },
    {
      name: "Komponenten",
      imgSrc: imgComponent
    },
    {
      name: "Verwaltung",
      imgSrc: imgVerwal
    }
  ]

  const dashboardGeneralInformationHandler=(data:any)=>{
    console.log("data7777777777",data)
  }

  const dashBoardHandleSaveChangesHandler = (formData:any) => {
    // Perform any actions you need here before saving changes
    setActiveStatus(activeStatus + 1);
    console.log("Changes saved!",formData);
    dashboardGeneralInformationHandler(formData)
  };


    return (
      <section className="user-details">

        <SharedModal show={attachmentModal} modalContent={<DeleteAttachmentModal />} onHide={() => setAttachmentModal(false)} />

        <Header />
        <div className="details-wrap">
          <Sidebar />
          <div className="details-block">
            <div className="details-primary">
              <Row className="heading-wrap align-items-center">
                <Col md="6" className="d-flex align-items-center head-primary">
                  <Col md="1">
                    <Button variant="prev" onClick={() => router.push("/dashboard")}>
                      <i className="icon-back">
                        <Image src={imgPrev} alt="Icon" />
                      </i>
                    </Button>
                  </Col>
                  <Col md="5" className="heading">
                    <h2>
                      <i className="icon-head">
                        <Image src={imgAnlagen} alt="Icon" />
                      </i>
                      Anlage A - Anlagendetails
                    </h2>
                  </Col>
                </Col>
                <Col md="6" className="d-flex justify-content-end gap-4">
                  <Button 
                  onClick={dashBoardHandleSaveChangesHandler}
                  // onClick={ dashboardGeneralInformationHandler}
                  >Änderungen Speichern</Button>
                  <Button onClick={() => setAttachmentModal(true)}>Anlage löschen</Button>
                </Col>
              </Row>
              <ul className="d-md-flex">
                {
                  list.map((item, index) => (
                <li key={index}>
                  <Button variant="tab" onClick={()=> activateStatus(item.name)} className={`${item.name === activeStatus ? "active" : ""}`}>
                    <i>
                      <Image src={item.imgSrc} alt="Icon" />
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
            <div className='details-secondary'>
            {activeStatus === "Komponenten" && (
              <Komponenten isDashboardDetail={false}/>
            )}

            {activeStatus === "Livedaten" && (
              <Livedaten />
            )}

            {activeStatus === "Logbuch" && (
              <DashboardLogbuch />
            )}

            {activeStatus === "Informationen" && (
            <Informationen isDashboardDetail={false}
             generalInformationHandler={dashboardGeneralInformationHandler} 
             dashBoardHandleSaveChanges={dashBoardHandleSaveChangesHandler}
            />
            )}

            {activeStatus === "Verwaltung" && (
              <Verwaltung />
            )}
            </div>
          </div>
        </div>
      </section>
    );
}

export default DashboardDetails