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
import { useDispatch, useSelector } from 'react-redux';
import { setFacilityData } from '@/redux/slice/facilitySlice';
import toast, { Toaster } from 'react-hot-toast';

const informationSchema = yup.object().shape({
  name: yup.string().required("Anlagename is required"),
  alias_name: yup.string().required("Alias-Name is required"),
  street: yup.string().required("Street is required"),
  street_number: yup.string().required("Street Number is required"),
  additional_address_information: yup.string().required("Address Information is required"),
  postal_code: yup.string().required("Zipcode is required"),
  city: yup.string().required("Location is required"),
  country: yup.string().required("Country is required"),
  order_number: yup.string().required("Auftragsnummer is required"),
  // email: yup.string().email("Invalid Email").required("Email is required"),
  power_purchase_costs: yup.string().required("Kosten is required"),
  notes: yup.string()
});

const componentsSchema = yup.object().shape({
  module_manufacturer: yup.string().required("This field is required"),
  inverter_manufacturer: yup.string().required("This field is required"),
  module_type: yup.string().required("This field is required"),
  inverter_type: yup.string().required("This field is required"),
  energy_storage_exists: yup.string().required("This field is required"),
  energy_storage_manufacturer: yup.string().required("This field is required"),
  energy_storage_type: yup.string().required("This field is required"),
  energy_storage_capacity_kwh: yup.number().required("This field is required"),
  wallbox_exists: yup.string().required("This field is required")
})

interface CancelModalProps {
  setProcessModal: Dispatch<SetStateAction<boolean>>
}

function CancelProcessModal({ setProcessModal }: CancelModalProps) {
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
  const [dataDepositCheck, setDataDepositCheck] = useState(false)
  const dispatch = useDispatch()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(activeStatus === 0 ? informationSchema as yup.ObjectSchema<any> : componentsSchema as yup.ObjectSchema<any>),
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
    // setActiveStatus(activeStatus + 1);
  }

  const onSubmit = (values: any) => {
    if (activeStatus === 0 && !dataDepositCheck) {
      return toast.error("Eigentümer hat der Datenhinterlegung zugestimmt")
    }

    dispatch(setFacilityData(values))
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
                setDataDepositCheck={setDataDepositCheck}
                dataDepositCheck={dataDepositCheck}
                setValue={setValue}
              />
            )}

            {activeStatus === 1 && (
              <Komponenten 
                isDashboardDetail={true} 
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                setValue={setValue}
              />
            )}

            {activeStatus === 2 && (
              <WeitereSchritte />
            )}
          </div>
        </div>
        <Toaster />
      </section>
    </>
  );
}

export default DashboardCreation;
