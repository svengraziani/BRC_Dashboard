"use client";

import { Button, Col, Form, Row } from 'react-bootstrap';
import './Verwaltung.scss';
import Image from "next/image";
import imgWech from '../../../../Assets/images/icon-wechselrichtertyp.svg';
import imgEdit from '../../../../Assets/images/icon-edit.svg';
import { IoInformationCircleOutline } from "react-icons/io5";
import { GrPrevious, GrNext } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import { apiCaller } from '@/services/apiCaller';
import { useParams } from 'next/navigation';
import imgBlue from '../../../../Assets/images/blue-power.svg';
import imgGray from '../../../../Assets/images/gray-power.svg';
import imgGreen from '../../../../Assets/images/green-power.svg';

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

function Verwaltung() {
    const { id } = useParams()
    const [gateway, setGateway] = useState<Gateway[]>([])
    const [activeGateway, setActiveGateway] = useState<number>(1)
    const [strings, setStrings] = useState<number[]>([])
    const [activeString, setActiveString] = useState<number>(0)
    const [powerList, setPowerList] = useState<Power[]>([])

    useEffect(() => {
        apiCaller.get(`/api/v1/gateway/?facility=${id}`)
            .then(response => {
                setGateway(response.data.results);
            })
    }, [])

    useEffect(() => {
        if (gateway.length !== 0) {
            const presentGateway = gateway[activeGateway - 1];
            setStrings(presentGateway?.strings)

            let stringId = strings[activeString]

            apiCaller.get(`/api/v1/optimizer/?string=${stringId}`)
                .then(response => {
                    setPowerList(response.data.results);
                })
        }
    }, [gateway, activeGateway, activeString])

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

    return (
        <div className='verwaltung'>
            <h2><i className='icon-arrow' style={{ cursor: "pointer" }} onClick={() => gatewayHandler("backward")}><GrPrevious /></i>{gateway.length !== 0 && gateway[activeGateway - 1].name} ({activeGateway} von {gateway.length})<i className='icon-arrow' style={{ cursor: "pointer" }} onClick={() => gatewayHandler("forward")}><GrNext /></i></h2>
            <Row>
                <Col md="6" className='pe-0'>
                    <div className="gateway-card card-1">
                        <h3><i className="icon"><Image src={imgWech} alt='Icon' /></i>Gateway Daten</h3>
                        <Form>
                            <Form.Group className='form-block'>
                                <Form.Control type='number' placeholder='Gateway ID'></Form.Control>
                                <Form.Label>Gateway ID</Form.Label>
                            </Form.Group>
                            <Form.Group className='form-block'>
                                <Form.Control type='number' placeholder='Anzahl Strings'></Form.Control>
                                <Form.Label>Anzahl Strings</Form.Label>
                            </Form.Group>
                            <Form.Group className='form-block'>
                                <Form.Control type='number' placeholder='Anzahl Optimierer String 1'></Form.Control>
                                <Form.Label>Anzahl Optimierer String 1</Form.Label>
                            </Form.Group>
                            <Form.Group className='form-block'>
                                <Form.Control type='number' placeholder='Anzahl Optimierer String 2'></Form.Control>
                                <Form.Label>Anzahl Optimierer String 2</Form.Label>
                            </Form.Group>
                            <Form.Group className='form-block mb-0'>
                                <Form.Control type='number' placeholder='Anzahl Optimierer String 3'></Form.Control>
                                <Form.Label>Anzahl Optimierer String 3</Form.Label>
                            </Form.Group>
                        </Form>
                        <p><i className="icon-tooltip"><IoInformationCircleOutline /></i>Die Anzahl der Strings und
                            Gateways sowie dazugehörige Bluetooth-Verbindungen können nur in der mobile App
                            verändert/eingesehen werden.</p>
                    </div>
                </Col>
                <Col md="6" className='ps-0'>
                    <div className="gateway-card card-2">
                        <div className="string-wrap">
                            <div className="string-head d-flex justify-content-between align-items-center">
                                <ul className='d-flex'>
                                    {strings?.map((item, index) => (
                                        <>
                                            <li onClick={() => setActiveString(index)}><Button variant='string' className={activeString === index ? 'active' : ''}>String {index + 1}</Button></li>
                                        </>
                                    ))}
                                </ul>
                                <Button variant='edit'><Image src={imgEdit} alt='Icon' /></Button>
                            </div>

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
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Verwaltung
