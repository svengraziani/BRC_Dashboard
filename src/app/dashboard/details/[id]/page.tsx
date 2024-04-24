"use client";
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
import Informationen from '../../Components/Informationen';
import Komponenten from '../../Components/Komponenten';
import { useCallback, useEffect, useState } from 'react';
import Livedaten from '../../Components/Livedaten';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import DashboardLogbuch from '../../Components/Logbuch';
import Verwaltung from '../../Components/Verwaltung';

function DashboardDetails() {
  const [activeStatus, setActiveStatus] = useState<string>("Informationen")
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
  }, [])

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

    return (
      <section className="user-details">
        <Header />
        <div className="details-wrap">
          <Sidebar />
          <div className="details-block">
            <div className="details-primary">
              <Row className="heading-wrap align-items-center">
                <Col md="6" className="d-flex align-items-center head-primary">
                  <Col md="1">
                    <Button variant="prev">
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
                  <Button>Änderungen Speichern</Button>
                  <Button>Anlage löschen</Button>
                </Col>
              </Row>
              <ul className="d-md-flex">
                {
                  list.map(item => (
                <li>
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
              <Komponenten />
            )}

            {activeStatus === "Livedaten" && (
              <Livedaten />
            )}

            {activeStatus === "Logbuch" && (
              <DashboardLogbuch />
            )}

            {activeStatus === "Informationen" && (
            <Informationen />
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