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
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const informationSchema = yup.object().shape({
  anlagename: yup.string().required("Anlagename is required"),
  aliasname: yup.string().required("Alias-Name is required"),
  street: yup.string().required("Street is required"),
  streetNumber: yup.string().required("Street Number is required"),
  addressAddon: yup.string(), // Optional field, no required validation
  zipcode: yup.string().required("Zipcode is required"),
  location: yup.string().required("Location is required"),
  country: yup.string().required("Country is required"),
  einzelaccountCheckBox: yup.string(),
  // Define validation rules for other fields
  firmenname: yup.string().required("Firmenname is required"),
  vorname: yup.string().required("Vorname is required"),
  nachname: yup.string().required("Nachname is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  telefonnummer: yup.string().required("Telefonnummer is required"),
  auftragsnummer: yup.string().required("Auftragsnummer is required"),
  plz: yup.string().required("PLZ is required"),
  ort: yup.string().required("Ort is required"),
  land: yup.string().required("Land is required"),
  firmenname1: yup.string().required("Firmenname is required"),
  telefonnummer1: yup.string().required("Telefonnummer is required"),
  telefonnummer2: yup.string().required("Telefonnummer is required"),
  vorname1: yup.string().required("Vorname is required"),
  nachname1: yup.string().required("Nachname is required"),
  kosten: yup.string().required("Kosten is required"),
});

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

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(informationSchema),
    });

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

    const generalInformationHandler = (data: any) => {
      setActiveStatus(activeStatus + 1);
    }

    const onSubmit = (values: any) => {
        console.log(values, 'Submitted values'); 
    }

    console.log(errors);
    

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
                <Button disabled={activeStatus === 0} onClick={() => {
                  if (activeStatus > 0) {
                    setActiveStatus(activeStatus - 1);
                  }
                }}><i className="icon-arrow"><GrPrevious /></i> Zurück</Button>
                <Button variant='cancel' onClick={() => setProcessModal(true)}>Abbrechen</Button>
                <Button disabled={activeStatus === 2} onClick={handleSubmit(onSubmit)}>Weiter <i className="icon-arrow"><GrNext /></i></Button>
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
                      {item.name}
                    </Button>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="creation-secondary">
            {activeStatus === 0 && (
              <Informationen 
                isDashboardDetail={true} 
                generalInformationHandler={generalInformationHandler} 
                register={register} 
                handleSubmit={handleSubmit} 
                errors={errors} 
              />
            )}

            {activeStatus === 1 && (
              <Komponenten isDashboardDetail={true} />
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
