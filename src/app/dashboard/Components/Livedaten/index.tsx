"use client";

import { Button, Col, Form, Row } from 'react-bootstrap'
import './Livedaten.scss';
import Image from 'next/image';
import circleImg from '../../../../Assets/images/icon-circle.svg';
import imgCheck from '../../../../Assets/images/icon-checkmark.svg';
import imgBlue from '../../../../Assets/images/blue-power.svg';
import imgGray from '../../../../Assets/images/gray-power.svg';
import imgGreen from '../../../../Assets/images/green-power.svg';
import imgPortal from '../../../../Assets/images/icon-portal.svg';
import imgNetwork from '../../../../Assets/images/icon-network.svg';
import imgAnlagen from '../../../../Assets/images/icon-anlagen-s.svg';
import imgAnlagenXL from '../../../../Assets/images/icon-anlagen-xl.svg';
import imgGreenDot from '../../../../Assets/images/icon-green.svg';
import imgYellowDot from '../../../../Assets/images/icon-yellow.svg';
import imgCalender from '../../../../Assets/images/icn_ertraege.svg';
import imgHeute from '../../../../Assets/images/icn_ertraege_heute.svg';
import imgMonat from '../../../../Assets/images/icn_ertraege_monat.svg';
import imgWoche from '../../../../Assets/images/icn_ertraege_woche.svg';
import imgRedDot from '../../../../Assets/images/icon-red.svg';
import stormImage from '../../../../Assets/images/storm.svg';
import co2Image from '../../../../Assets/images/co2.svg';
import { IoInformationCircleOutline } from "react-icons/io5";
import { GrPrevious, GrNext } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import { apiCaller } from '@/services/apiCaller';
import { useParams } from 'next/navigation';
import LoadingIndicator from '@/shared/Loader';

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

type FacilityStatus = {
  facility: string;
  network: string;
  portal: string;
}

function Livedaten({ facility }: any) {
  const { id } = useParams();
  const [gateway, setGateway] = useState<Gateway[]>([])
  const [activeGateway, setActiveGateway] = useState<number>(1)
  const [activeString, setActiveString] = useState<number>(0)
  const [powerList, setPowerList] = useState<Power[]>([])
  const [facilityStatus, setFacilityStatus] = useState<FacilityStatus>({ facility: "", network: "", portal: "" })
  const [ertrage, setErtrage] = useState<0 | 1>(0)

  // Loaders
  const [isGatewayLoading, setIsGatewayLoading] = useState(true)
  const [isFacilityLoading, setIsFacilityLoading] = useState(true)
  const [isOptimizersLoading, setIsOptimizersLoading] = useState(false)

  console.log(isGatewayLoading, isFacilityLoading, isOptimizersLoading, 'loading ????');
  

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
    setIsGatewayLoading(true)
    setIsFacilityLoading(true)

    apiCaller.get(`/api/v1/gateway/?facility=${id}`)
      .then(response => {
        setGateway(response.data.results);
        setIsGatewayLoading(false)

        return response.data.results;
      })

    apiCaller.get(`/api/v1/facility/${id}/status/`)
      .then(response => {
        setFacilityStatus(response.data)
        setIsFacilityLoading(false)
      })
  }, [])

  useEffect(() => {
    if (gateway.length > 0) {
      let activeGatwayStrings = gateway[activeGateway - 1]?.strings;

      let stringId = activeGatwayStrings[activeString]

      setIsOptimizersLoading(true)

      apiCaller.get(`/api/v1/optimizer/?string=${stringId}`)
        .then(response => {
          setPowerList(response.data.results);
          
          setIsOptimizersLoading(false)
        })
    }
  }, [activeGateway, activeString, gateway])

  console.log(facilityStatus, 'facility facilityStatus');


  return (
    <div className='livedaten'>
      <Row>
        <Col md="8">
          <h2><i className='icon-arrow' style={{ cursor: "pointer" }} onClick={() => gatewayHandler("backward")}><GrPrevious /></i>Gateway {activeGateway} ({activeGateway} von {gateway.length})<i className='icon-arrow' style={{ cursor: "pointer" }} onClick={() => gatewayHandler("forward")}><GrNext /></i></h2>
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
              {powerList.length !== 0 ? powerList?.map(item => {
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
              }) : (
                <>
                <h1>No Optimizers Found !!</h1>
                </>
              )}
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

            <div className="range-slider">
              <div id="tooltip"></div>
              <Form.Range step={50} id="range" min="0" max="100" />
            </div>

          </div>
        </Col>
        <Col md="4">
          <div className='general-card'>
            <div className='general-wrap'>
              <div className='kw-outer'>
                <div className='kw-inner'>
                  <div className="kw-img">
                    <Image src={imgAnlagenXL} alt='Anlagen Icon' />
                  </div>
                  <span className='number'>{facility?.power_watt?.toFixed(2)}</span>
                  <span className='kilo-watt'>kW</span>
                </div>
              </div>
              <span className='performance d-flex align-items-center gap-2'>Aktuelle Anlagenleistung<i><Image src={circleImg} alt='Icon' /></i></span>
              <span className='energy d-flex align-items-center gap-2'>Maximale Energieausbeute<i><Image src={imgCheck} alt='Icon' /></i></span>
            </div>
          </div>

          <div className='general-card system-status' style={{ marginTop: "20px" }}>
            {/* <h1>Systemstatus</h1> */}
            <div className="general-wrap">
              <span className="performance d-flex align-items-center gap-2">Systemstatus <i className="icon-tooltip"><IoInformationCircleOutline /></i></span>
              <div className="boxes-wrap">
                <div className="boxes-block">
                  {facilityStatus.facility === "OK" && (
                    <Image src={imgGreenDot} className='dots' alt='Dot' />
                  )}

                  {facilityStatus.facility === "UNKNOWN" && (
                    <Image src={imgYellowDot} className='dots' alt='Dot' />
                  )}

                  {facilityStatus.facility === "PENDING" && (
                    <Image src={imgRedDot} className='dots' alt='Dot' />
                  )}
                  <div className="box-img">
                    <Image src={imgAnlagen} alt='Icon' />
                  </div>
                  <span className="box-head">Anlage</span>
                </div>
                <div className="boxes-block">
                {facilityStatus.network === "OK" && (
                    <Image src={imgGreenDot} className='dots' alt='Dot' />
                  )}

                  {facilityStatus.network === "UNKNOWN" && (
                    <Image src={imgYellowDot} className='dots' alt='Dot' />
                  )}

                  {facilityStatus.network === "PENDING" && (
                    <Image src={imgRedDot} className='dots' alt='Dot' />
                  )}
                  {/* <Image src={imgYellowDot} className='dots' alt='Dot' /> */}
                  <div className="box-img">
                    <Image src={imgNetwork} alt='Icon' />
                  </div>
                  <span className="box-head">Netzwerk</span>
                </div>
                <div className="boxes-block">
                {facilityStatus.portal === "OK" && (
                    <Image src={imgGreenDot} className='dots' alt='Dot' />
                  )}

                  {facilityStatus.portal === "UNKNOWN" && (
                    <Image src={imgYellowDot} className='dots' alt='Dot' />
                  )}

                  {facilityStatus.portal === "PENDING" && (
                    <Image src={imgRedDot} className='dots' alt='Dot' />
                  )}
                  {/* <Image src={imgRedDot} className='dots' alt='Dot' /> */}
                  <div className="box-img">
                    <Image src={imgPortal} alt='Icon' />
                  </div>
                  <span className="box-head">Portal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="general-card yeilds" style={{ marginTop: "20px" }}>
            <div className="general-wrap">
              <span className="performance">Erträge in kWh</span>
              {ertrage === 0 ? (
                <div className="boxes-wrap">
                  <div className="boxes-block">
                    <div className="box-img">
                      <Image src={imgHeute} alt='Icon' />
                    </div>
                    <span className="box-head">Heute</span>
                    <span className="yeild-definr">{facility?.electrical_energy_one_day_kwh?.toFixed(2)}</span>
                  </div>
                  <div className="boxes-block">
                    <div className="box-img">
                      <Image src={imgWoche} alt='Icon' />
                    </div>
                    <span className="box-head">Woche</span>
                    <span className="yeild-definr">{facility?.electrical_energy_one_week_kwh?.toFixed(2)}</span>
                  </div>
                  <div className="boxes-block">
                    <div className="box-img">
                      <Image src={imgMonat} alt='Icon' />
                    </div>
                    <span className="box-head">Monat</span>
                    <span className="yeild-definr">{facility.electrical_energy_one_month_kwh?.toFixed(2)}</span>
                  </div>
                  <div className="boxes-block">
                    <div className="box-img">
                      <Image src={imgCalender} alt='Icon' />
                    </div>
                    <span className="box-head">Jahr</span>
                    <span className="yeild-definr">{facility.electrical_energy_one_year_mwh?.toFixed(2)}</span>
                  </div>
                </div>
              ) : (
                <div className="boxes-wrap">
                  <div className="boxes-block">
                    <div className="box-img">
                      <Image src={stormImage} alt='Icon' />
                    </div>
                    <span className="box-head">Storm</span>
                    <span className="yeild-definr">{facility.electrical_energy_one_year_mwh?.toFixed(2)}</span>
                  </div>

                  <div className="boxes-block">
                    <div className="box-img">
                      <Image src={co2Image} alt='Icon' />
                    </div>
                    <span className="box-head">Co2</span>
                    <span className="yeild-definr">{facility.electrical_energy_one_year_mwh?.toFixed(2)}</span>
                  </div>
                </div>
              )}
              <div className="buttons-wrap">
                <Button variant={ertrage === 0 ? 'dot' : "dot-white"} onClick={() => setErtrage(0)}></Button>
                <Button variant={ertrage === 0 ? "dot-white" : "dot"} onClick={() => setErtrage(1)}></Button>
              </div>
            </div>
          </div>

        </Col>
      </Row>

      {(isGatewayLoading || isFacilityLoading || isOptimizersLoading) && <LoadingIndicator />}
    </div>
  )
}

export default Livedaten
