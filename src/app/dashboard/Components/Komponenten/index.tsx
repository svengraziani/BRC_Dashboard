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

const schema = yup.object().shape({
  modulHersteller: yup.string().required('Bitte wählen Sie einen Hersteller aus'),
  modulTyp: yup.string().required('Bitte wählen Sie einen Typ aus'),
  wechselrichterHersteller: yup.string().required('Bitte geben Sie den Hersteller ein'),
  wechselrichterTyp: yup.string().required('Bitte geben Sie den Typ ein'),
  speicherWallboxJa: yup.boolean().oneOf([true], 'Bitte wählen Sie aus').required(),
  speicherWallboxNein: yup.boolean().oneOf([true], 'Bitte wählen Sie aus').required(),
  speicherHerstellername: yup.string().required('Please enter manufacturer name'),
  speicherTyp:yup.string().required('Please enter type'),
 
  speicherKapazität: yup.number().typeError('Bitte geben Sie eine Zahl ein').positive('Die Kapazität muss positiv sein').required('Bitte geben Sie die Kapazität ein'),
  wallboxJa: yup.boolean().oneOf([true], 'Bitte wählen Sie aus').required(),
  wallboxNein: yup.boolean().oneOf([true], 'Bitte wählen Sie aus').required()
});


function Komponenten({isDashboardDetail}: {isDashboardDetail: boolean}) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema) 
  });

  const onSubmit = (data: any) => {
    console.log("data6666666666",data)
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
                    <Form.Select aria-label="Dropdown"  {...register('modulHersteller', { required: true })}>
                      <option>Hersteller</option>
                      <option value="India">India</option>
                      <option value="Russia">Russia</option>
                      <option value="Brazil">Brazil</option>
                    </Form.Select>
                    {errors.modulHersteller && <div className="error-message">{errors.modulHersteller.message}</div>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block mb-0">
                    <Form.Select aria-label="Dropdown"  {...register('modulTyp', { required: true })}>
                      <option>Typ</option>
                      <option value="India">India</option>
                      <option value="Russia">Russia</option>
                      <option value="Brazil">Brazil</option>
                    </Form.Select>
                    {errors.modulTyp && <div className="error-message">{errors.modulTyp.message}</div>}
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
                    <Form.Control type="text" placeholder="Herstellername" {...register('wechselrichterHersteller', { required: true })} />
                    <Form.Label>Herstellername</Form.Label>
                    {errors.wechselrichterHersteller && <div className="error-message">{errors.wechselrichterHersteller.message}</div>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block mb-0">
                    <Form.Control type="text" placeholder="Typ" {...register('wechselrichterTyp', { required: true })} />
                    <Form.Label>Typ</Form.Label>
                    {errors.wechselrichterTyp && <div className="error-message">{errors.wechselrichterTyp.message}</div>}
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
                <Form.Label>Wallbox vorhanden?</Form.Label>
                <Form.Group className="form-block d-flex">
                <Col md="2">
                  <Form.Check
                    type={"radio"}
                    // name={"wallbox"}
                    id={"Ja"}
                    label={"Ja"}
                    {...register('speicherWallboxJa')}
                  />
                </Col>
                <Col md="2">
                  <Form.Check
                    type={"radio"}
                    // name={"wallbox"}
                    id={"Nein"}
                    label={"Nein"}
                    {...register('speicherWallboxNein')}
                  />
                </Col>
                </Form.Group>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block">
                    <Form.Control type="text" placeholder="Herstellername"  {...register('speicherHerstellername', { required: true })} />
                    <Form.Label>Herstellername</Form.Label>
                    {errors.speicherHerstellername && <div className="error-message">{errors.speicherHerstellername.message}</div>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block">
                    <Form.Control type="text" placeholder="Typ" {...register('speicherTyp', { required: true })}/>
                    <Form.Label>Typ</Form.Label>
                    {errors.speicherTyp && <div className="error-message">{errors.speicherTyp.message}</div>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block mb-0">
                    <Form.Control
                      type="number"
                      placeholder="Kapazität in KWh"
                      {...register('speicherKapazität', { required: true })}
                    />
                    <Form.Label>Kapazität in KWh</Form.Label>
                    {errors.speicherKapazität && <div className="error-message">{errors.speicherKapazität.message}</div>}
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
                    {...register('wallboxJa')}
                  />
                </Col>
                <Col md="2">
                  <Form.Check
                    type={"radio"}
                    // name={"wallbox"}
                    id={"nein"}
                    label={"Nein"}
                    {...register('wallboxNein')}
                  />
                </Col>
              </Row>
            {/* </Form> */}
          </div>
        </Col>
      </Row>
      <Button type="submit"> submit </Button>
    </div>
    </Form>
  );
}

export default Komponenten
