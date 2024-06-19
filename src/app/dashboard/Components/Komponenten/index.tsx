"use client";

import Image from "next/image";
import imgSpeicher from '../../../../Assets/images/icon-speicher.svg';
import imgWallbox from '../../../../Assets/images/icon-wallbox.svg';
import imgWech from '../../../../Assets/images/icon-wechselrichtertyp.svg';
import imgModul from '../../../../Assets/images/icon-modultyp.svg';
import { Col, Row, Form, Button } from "react-bootstrap";
import './Komponenten.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Komponenten({isDashboardDetail, register, handleSubmit, errors={}, setValue}: any) {

  const onSubmit = (data: any) => {
  };

  

  return (
    <Form onSubmit={handleSubmit && handleSubmit(onSubmit)}>
    <div className="komponenten">

      {isDashboardDetail && (
          <span className="fields">* Pflichtfelder</span>
      )}

      <Row className="primary-block">
        <Col md="6">
          <h2>
            <i>
              <Image src={imgModul} alt="Icon" />
            </i>
            Modultyp
          </h2>
          <div className="general-card">
            {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
              <Row>
                <Col xs>
                  <Form.Group className="form-block">
                    <Form.Select aria-label="Dropdown" onChange={e => {
                      if (e.target.value !== "Hersteller") {
                        setValue("module_manufacturer", e.target.value)
                      } else {
                        setValue("module_manufacturer", null)
                      }
                    }}>
                      <option>Hersteller</option>
                      <option value="India">India</option>
                      <option value="Russia">Russia</option>
                      <option value="Brazil">Brazil</option>
                    </Form.Select>
                    {errors.module_manufacturer && <div className="error-message">{errors.module_manufacturer.message}</div>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block mb-0">
                    <Form.Select aria-label="Dropdown" onChange={e => {
                      if (e.target.value !== "Typ") {
                        setValue("module_type", e.target.value)
                      } else {
                        setValue("module_type", null)
                      }
                    }}
                    >
                      <option>Typ</option>
                      <option value="India">India</option>
                      <option value="Russia">Russia</option>
                      <option value="Brazil">Brazil</option>
                    </Form.Select>
                    {errors.module_type && <div className="error-message">{errors.module_type.message}</div>}
                  </Form.Group>
                </Col>
              </Row>
              {/* <Button type="submit">TESTING Data</Button> */}
            {/* </Form> */}
          </div>
        </Col>
        <Col md="6">
          <h2>
            <i>
              <Image src={imgWech} alt="Icon" />
            </i>
            Wechselrichtertyp
          </h2>
          <div className="general-card">
            {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
              <Row>
                <Col xs>
                  <Form.Group className="form-block">
                    <Form.Control type="text" placeholder="Herstellername" {...register('inverter_manufacturer', { required: true })} />
                    <Form.Label>Herstellername</Form.Label>
                    {errors.inverter_manufacturer && <div className="error-message">{errors.inverter_manufacturer.message}</div>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block mb-0">
                    <Form.Control type="text" placeholder="Typ" {...register('inverter_type', { required: true })} />
                    <Form.Label>Typ</Form.Label>
                    {errors.inverter_type && <div className="error-message">{errors.inverter_type.message}</div>}
                  </Form.Group>
                </Col>
              </Row>
            {/* </Form> */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <h2>
            <i>
              <Image src={imgSpeicher} alt="Icon" />
            </i>
            Speicher
          </h2>
          <div className="general-card">
            {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
            <Row>
                <Form.Label>Speicher vorhanden?</Form.Label>
                <Form.Group className="form-block d-flex">
                <Col md="2">
                  <Form.Check
                    type={"radio"}
                    id={"Ja"}
                    label={"Ja"}
                    {...register('energy_storage_exists')}
                  />
                </Col>
                <Col md="2">
                  <Form.Check
                    type={"radio"}
                    id={"Nein"}
                    label={"Nein"}
                    {...register('energy_storage_exists')}
                  />
                </Col>
                </Form.Group>
                {errors.energy_storage_exists && <div className="error-message">{errors.energy_storage_exists.message}</div>}

              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block">
                    <Form.Control type="text" placeholder="Herstellername"  {...register('energy_storage_manufacturer', { required: true })} />
                    <Form.Label>Herstellername</Form.Label>
                    {errors.energy_storage_manufacturer && <div className="error-message">{errors.energy_storage_manufacturer.message}</div>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block">
                    <Form.Control type="text" placeholder="Typ" {...register('energy_storage_type', { required: true })}/>
                    <Form.Label>Typ</Form.Label>
                    {errors.energy_storage_type && <div className="error-message">{errors.energy_storage_type.message}</div>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block mb-0">
                    <Form.Control
                      type="number"
                      placeholder="Kapazität in KWh"
                      {...register('energy_storage_capacity_kwh', { required: true })}
                    />
                    <Form.Label>Kapazität in KWh</Form.Label>
                    {errors.energy_storage_capacity_kwh && <div className="error-message">{errors.energy_storage_capacity_kwh.message}</div>}
                  </Form.Group>
                </Col>
              </Row>
            {/* </Form> */}
          </div>
        </Col>
        <Col md="6">
          <h2>
            <i>
              <Image src={imgWallbox} alt="Icon" />
            </i>
            Wallbox
          </h2>
          <div className="general-card">
            {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
              <Row>
                    <Form.Label>Wallbox vorhanden?</Form.Label>
                <Col md="2">
                  <Form.Check
                    type={"radio"}
                    // name={"wallbox"}
                    id={"ja"}
                    label={"Ja"}
                    {...register('wallbox_exists', { required: true })}
                  />
                </Col>
                <Col md="2">
                  <Form.Check
                    type={"radio"}
                    // name={"wallbox"}
                    id={"nein"}
                    label={"Nein"}
                    {...register('wallbox_exists', { required: true })}
                  />
                </Col>
              </Row>
              {errors.wallbox && <div className="error-message">{errors.wallbox.message}</div>}
            {/* </Form> */}
          </div>
        </Col>
      </Row>
    </div>
    </Form>
  );
}

export default Komponenten
