"use client";

import { Button, Col, Row } from 'react-bootstrap'
import './Livedaten.scss';
import Image from 'next/image';
import circleImg from '../../../../Assets/images/icon-circle.svg';
import imgCheck from '../../../../Assets/images/icon-checkmark.svg';
import imgBlue from '../../../../Assets/images/blue-power.svg';
import imgGray from '../../../../Assets/images/gray-power.svg';
import imgGreen from '../../../../Assets/images/green-power.svg';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import { apiCaller } from '@/services/apiCaller';
import { useParams } from 'next/navigation';

type Gateway = {
  facility: number;
  name: string;
  network: string;
  openremote_asset_id: string;
  pk: number;
  power_watt: number;
  strings: number[];
  url: string;
}

type Power = {
  current_ampere: number;
  name: string;
  openremote_optimizer_id: string;
  optimization_status: string;
  pk: number;
  position_x: number | null;
  position_y: number | null;
  power_watt: number;
  status: number;
  string: number;
  temperature_degrees_celsius: number;
  url: number;
  voltage_volt: number;
}

function Livedaten({facilityPowerWatt}: {facilityPowerWatt: number}) {
  const { id } = useParams();
  const [gateway, setGateway] = useState<Gateway[]>([])
  const [activeGateway, setActiveGateway] = useState<number>(1)
  const [activeString, setActiveString] = useState<number>(0)
  const [powerList, setPowerList] = useState<Power[]>([])
  const [facilityStatus, setFacilityStatus] = useState({})

  const gatewayHandler = (rule: "forward" | "backward") => {
    switch (rule) {
      case "forward":
        if (gateway.length > activeGateway) {
          setActiveGateway(activeGateway + 1)
        }
        break;
      case "backward":
        if (gateway.length <= activeGateway) {
          setActiveGateway(activeGateway - 1)
        }
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    apiCaller.get(`/api/v1/gateway/?facility=${id}`)
      .then(response => {
        setGateway(response.data.results);
        return response.data.results;
      })

    apiCaller.get(`/api/v1/facility/${id}/status/`)
    .then(response => {
      setFacilityStatus(response.data)
    })
  }, [])

  useEffect(() => {
    if (gateway.length > 0) {
      let activeGatwayStrings = gateway[activeGateway - 1]?.strings;

      let stringId = activeGatwayStrings[activeString]

      apiCaller.get(`/api/v1/optimizer/?string=${stringId}`)
        .then(response => {
          setPowerList(response.data.results);
        })
    }
  }, [activeGateway, activeString, gateway])

  return (
    <div className='livedaten'>
      <Row>
        <Col md="8">
          <h2><i className='icon-arrow' onClick={() => gatewayHandler("backward")}><GrPrevious /></i>Gateway {activeGateway} ({activeGateway} von {gateway.length})<i className='icon-arrow' onClick={() => gatewayHandler("forward")}><GrNext /></i></h2>
          <div className='gateway-card'>
            <ul className='d-md-flex justify-content-center'>
              {gateway[activeGateway - 1]?.strings.map((item, index) => (
                <li key={item} onClick={() => {
                  setActiveString(index)
                }}><Button variant='string' className={`${activeString === index ? "active" : ""}`}>String {index + 1}</Button></li>
              ))}
            </ul>

            {/* Power List */}
            <div className='power-list'>
              {powerList?.map(item => {
                let imageSrc = imgBlue;
                if (item.optimization_status === "THERMAL_SHUTDOWN") {
                  imageSrc = imgGray;
                } else if (item.optimization_status === "ACTIVE") {
                  imageSrc = imgGreen;
                } else if (item.optimization_status === "NOT_REQUIRED") {
                  imageSrc = imgBlue;
                } else {
                  imageSrc = imgGray;
                }

                return (
                  <div className='power-cell'>
                    <div className='power-info'>
                      <h3>{item.power_watt.toFixed(2)} W</h3>
                      <p>PosNr.</p>
                    </div>
                    <Image src={imageSrc} className='blue-bg' alt='Blue Background' />
                  </div>
                )
              })}
            </div>

            <div className='power-color-info'>
              <div style={{ display: "flex" }}>
                <div className='blue'></div>
                <p style={{ marginLeft: "10px" }}>Optimierung nicht erforderlich</p>
              </div>

              <div style={{ display: "flex" }}>
                <div className='green'></div>
                <p style={{ marginLeft: "10px" }}>Optimierung aktiv</p>
              </div>

              <div style={{ display: "flex" }}>
                <div className='gray'></div>
                <p style={{ marginLeft: "10px" }}>Inaktiv</p>
              </div>
            </div>

          </div>
        </Col>
        <Col md="4">
          <div className='general-card'>
            <div className='general-wrap'>
              <div className='kw-outer'>
                <div className='kw-inner'>
                  <span className='number'>{facilityPowerWatt.toFixed(2)}</span>
                  <span className='kilo-watt'>kW</span>
                </div>
              </div>
              <span className='performance d-flex align-items-center gap-2'>Aktuelle Anlagenleistung<i><Image src={circleImg} alt='Icon' /></i></span>
              <span className='energy d-flex align-items-center gap-2'>Maximale Energieausbeute<i><Image src={imgCheck} alt='Icon' /></i></span>
            </div>
          </div>

          <div className='general-card' style={{marginTop:"20px"}}>
            <h1>Systemstatus</h1>
          </div>
          
        </Col>
      </Row>
    </div>
  )
}

export default Livedaten
