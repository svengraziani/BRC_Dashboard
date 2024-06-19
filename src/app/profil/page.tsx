"use client";

import Image from 'next/image';
import imgProfil from '../../Assets/images/icon-user.svg';
import './profil.scss';
import '../../css/sass/global.scss';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { apiCaller } from '@/services/apiCaller';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { COUNTRY_LIST } from '@/services/constants';
import LoadingIndicator from '@/shared/Loader';


function Profil() {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, clearErrors, setValue } = useForm();

    const [companyName, setCompanyName] = useState<string>()
    const [firstName, setFirstName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [emailId, setEmailId] = useState<string>()
    const [phoneNumber, setPhoneNumber] = useState<string>()
    const [streetLocation, setStreetLocation] = useState<string>()
    const [streetNumber, setStreetNumber] = useState<string>()
    const [addressData, setAddressData] = useState<string>()
    const [zipCode, setZipCode] = useState<string>()
    const [locationData, setLocationData] = useState<string>()
    const [countryData, setCountryData] = useState<string>()

    const [isBtnDisabled, setIsBtnDisabled] = useState(false)

    const [isLoading, setIsLoading] = useState(true)

    const [userDetails, setUserDetails] = useState<any>()
    const reduxStore: any = useSelector(state => state)

    //set user data in state
    useEffect(() => {
        setValue("firstName", userDetails?.first_name)
        setValue("lastName", userDetails?.last_name)
        setValue("emailId", userDetails?.email)
        setValue("phoneNumber", userDetails?.phone)
        setValue("streetLocation", userDetails?.street)
        setValue("streetNumber", userDetails?.street_number)
        setValue("zipCode", userDetails?.postal_code)
        setValue("additional_address_information", userDetails?.additional_address_information)
        setValue("city", userDetails?.city)

        setFirstName(userDetails?.first_name)
        setCompanyName(userDetails?.full_name)
        setLastName(userDetails?.last_name)
        setEmailId(userDetails?.email)
        setPhoneNumber(userDetails?.phone)
        setStreetLocation(userDetails?.street)
        setStreetNumber(userDetails?.street_number)
        setAddressData(userDetails?.additional_address_information)
        setZipCode(userDetails?.postal_code)
        setLocationData(userDetails?.city)
        setCountryData(userDetails?.country?.code)
    }, [userDetails])

    // Save data
    const saveChangesHandler = (data: any) => {
        setIsBtnDisabled(true)

        let payload = {
            first_name: firstName,
            last_name: lastName,
            street: streetLocation,
            street_number: streetNumber,
            postal_code: zipCode,
            city: locationData,
            country: {
                code: countryData
            },
            additional_address_information: addressData,
            phone: phoneNumber,
            email_notifications_enabled: true
        }

        apiCaller.put(`/api/v1/user/${userDetails?.pk}/`, payload).then((response) => {
            if (response.status) {
                toast.success("Mein Profil Erfolgreich geupdated")
            }
            setIsBtnDisabled(false)
        }).catch((error) => {
            setIsBtnDisabled(false)
        })
    }

    const deleteHandler = () => {
        apiCaller.delete(`/api/v1/user/${userDetails?.pk}`)
            .then(response => {
            })
            .catch(error => {
                toast.error(error.response.data.errors[0].detail)
            })
    }

    // User Details
    useEffect(() => {
        apiCaller.get(`/api/v1/user/${reduxStore?.user.pk}`).then((response) => {
            setUserDetails(response?.data)
            setIsLoading(false)
        }).catch((error) => {
        })
    }, [reduxStore.user])

    return (
        <>
            <Header />
            <section className='dashboard profil'>
                <Sidebar />
                <div className='dashboard-right'>
                    <Row className='heading-wrap'>
                        <Col md="6">
                            <h2><i className='icon-profil'>
                                <Image src={imgProfil} alt='Icon' />
                            </i>Mein Profil</h2>
                        </Col>
                        <Col md="6" className='d-flex gap-4 justify-content-end'>
                            <Button onClick={handleSubmit(saveChangesHandler)} disabled={isBtnDisabled}>Änderungen Speichern</Button>
                            <Button onClick={deleteHandler}>Account löschen</Button>
                        </Col>
                    </Row>
                    <Form
                    >
                        <div className='profile-card'>
                            <Row>
                                <Col md="4">
                                    <Form.Group className='form-block'>
                                        <Form.Control type="text" placeholder="Vorname"
                                            {...register('firstName', { required: true })}
                                            // onChange={(e)=>setFirstName(e.target.value)} 
                                            onChange={(e) => {
                                                setFirstName(e.target.value);
                                                // Clear error message when value is entered
                                                errors.firstName && clearErrors('firstName');
                                            }}
                                            value={firstName} />
                                        <Form.Label>Vorname</Form.Label>
                                        {errors.firstName && <div className="error-message">Please enter first name</div>}
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className='form-block'>
                                        <Form.Control type="text" placeholder="Nachname"
                                            {...register('lastName', { required: true })}
                                            // onChange={(e)=>setLastName(e.target.value)} 
                                            onChange={(e) => {
                                                setLastName(e.target.value);
                                                // Clear error message when value is entered
                                                errors.lastName && clearErrors('lastName');
                                            }}
                                            value={lastName} />
                                        <Form.Label>Nachname</Form.Label>
                                        {errors.lastName && <div className="error-message">Please enter last name</div>}
                                    </Form.Group>
                                </Col>
                                <Col md="4"></Col>
                            </Row>

                            <Row>
                                <Col md="4">
                                    <Form.Group className='form-block'>
                                        <Form.Control type="text" placeholder="Standort: Straße"
                                            {...register('streetLocation', { required: true })}
                                            //  onChange={(e)=>setStreetLocation(e.target.value)} 
                                            onChange={(e) => {
                                                setStreetLocation(e.target.value);
                                                // Clear error message when value is entered
                                                errors.streetLocation && clearErrors('streetLocation');
                                            }}
                                            value={streetLocation} />
                                        <Form.Label>Standort: Straße</Form.Label>
                                        {errors.streetLocation && <div className="error-message">Please enter street location</div>}
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className='form-block'>
                                        <Form.Control type="number" placeholder="Standort: Straße Nr."
                                            {...register('streetNumber', { required: true })}
                                            //  onChange={(e)=>setStreetNumber(e.target.value)} 
                                            onChange={(e) => {
                                                setStreetNumber(e.target.value);
                                                // Clear error message when value is entered
                                                errors.streetNumber && clearErrors('streetNumber');
                                            }}
                                            value={streetNumber} />
                                        <Form.Label>Standort: Straße Nr.</Form.Label>
                                        {errors.streetNumber && <div className="error-message">Please enter street number</div>}
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className='form-block'>
                                        <Form.Control type="text" placeholder="Adresszusatz"
                                            {...register('additional_address_information', { required: true })}
                                            onChange={(e) => {
                                                setAddressData(e.target.value);
                                                // Clear error message when value is entered
                                                errors.addressData && clearErrors('additional_address_information');
                                            }}
                                            value={addressData} />
                                        <Form.Label>Adresszusatz</Form.Label>
                                        {errors.additional_address_information && <div className="error-message">Please enter address</div>}
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="4">
                                    <Form.Group className='form-block '>
                                        <Form.Control type="number" placeholder="Standort: PLZ"
                                            {...register('zipCode', { required: true })}
                                            // onChange={(e)=>setZipCode(e.target.value)}
                                            onChange={(e) => {
                                                setZipCode(e.target.value);
                                                // Clear error message when value is entered
                                                errors.zipCode && clearErrors('zipCode');
                                            }}
                                            value={zipCode} />
                                        <Form.Label>Standort: PLZ</Form.Label>
                                        {errors.zipCode && <div className="error-message">Please enter Pin code</div>}
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className='form-block '>
                                        <Form.Control type="text" placeholder="Standort: Ort"
                                            {...register('city', { required: true })}
                                            onChange={(e) => {
                                                setLocationData(e.target.value);
                                                errors.city && clearErrors('city');
                                            }}
                                            value={locationData} />
                                        <Form.Label>Standort: Ort</Form.Label>
                                        {errors.city && <div className="error-message">Please enter location</div>}
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className='form-block '>
                                        <Form.Select aria-label="Dropdown" value={countryData} onChange={e => {
                                            if (e.target.value !== "Standort: Land") {
                                                setValue("countryData", e.target.value)
                                                setCountryData(e.target.value)
                                            } else {
                                                setValue("countryData", null)
                                            }
                                        }}>
                                            <option>Standort: Land</option>
                                            {COUNTRY_LIST.map((item, key) => (
                                                <option key={key} value={item.code}>{item.name}</option>
                                            ))}
                                        </Form.Select>
                                        {errors.countryData && <div className="error-message">Please select country</div>}
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="4">
                                    <Form.Group className='form-block mb-0'>
                                        <Form.Control type="email" placeholder="E-Mail"
                                            {...register('emailId', { required: true })}
                                            // onChange={(e)=>setEmailId(e.target.value)} 
                                            disabled
                                            onChange={(e) => {
                                                setEmailId(e.target.value);
                                                // Clear error message when value is entered
                                                errors.emailId && clearErrors('emailId');
                                            }}
                                            value={emailId} />
                                        <Form.Label className='disabled-label'>E-Mail</Form.Label>
                                        {errors.emailId && <div className="error-message">Please enter email-Id</div>}
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className='form-block mb-0'>
                                        <Form.Control type="tel" placeholder="Telefonnummer"
                                            {...register('phoneNumber', { required: true })}
                                            // onChange={(e)=>setPhoneNumber(e.target.value)}
                                            onChange={(e) => {
                                                setPhoneNumber(e.target.value);
                                                // Clear error message when value is entered
                                                errors.phoneNumber && clearErrors('phoneNumber');
                                            }}
                                            value={phoneNumber} />
                                        <Form.Label>Telefonnummer</Form.Label>
                                        {errors.phoneNumber && <div className="error-message">Please enter phone number</div>}
                                    </Form.Group>
                                </Col>
                                <Col md="4"></Col>
                            </Row>
                        </div>
                        <div className="button-wrap">
                            <Button onClick={() => router.push("/resetpassword")}>Passwort ändern</Button>
                        </div>
                    </Form>
                    {/* <div className="notice">
                        <div className='notice-primary'>
                            <span className='notice-head'>HINWEIS</span>
                        </div>
                        <p>Feld Firmenname ist hier noch enthalten, kann aber entfernt werden falls er nicht angezeigt werden
                            soll</p>
                    </div> */}
                </div>
            </section>

            {isLoading && <LoadingIndicator />}
            <Toaster />
        </>
    )
}

export default Profil
