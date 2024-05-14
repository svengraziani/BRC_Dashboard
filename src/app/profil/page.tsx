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


function Profil() {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, clearErrors, setValue } = useForm();

    console.log(errors, 'errors');

    const [companyName, setCompanyName] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [emailId, setEmailId] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [streetLocation, setStreetLocation] = useState()
    const [streetNumber, setStreetNumber] = useState()
    const [addressData, setAddressData] = useState()
    const [zipCode, setZipCode] = useState()
    const [locationData, setLocationData] = useState()
    const [countryData, setCountryData] = useState()

    const [userDetdails, setuserDetails] = useState()

    // const [userData,setUserData]=useState()

    const [formError, setFormError] = useState(null);


    let token = localStorage.getItem("token")

    //set user data in state
    useEffect(() => {

        setValue("firstName", userDetdails?.first_name)
        setValue("lastName", userDetdails?.last_name)
        setValue("emailId", userDetdails?.email)
        setValue("phoneNumber", userDetdails?.phone)
        setValue("streetLocation", userDetdails?.street)
        setValue("streetNumber", userDetdails?.street_number)
        setValue("zipCode", userDetdails?.postal_code)


        setFirstName(userDetdails?.first_name)
        setCompanyName(userDetdails?.full_name)
        setLastName(userDetdails?.last_name)
        setEmailId(userDetdails?.email)
        setPhoneNumber(userDetdails?.phone)
        setStreetLocation(userDetdails?.street)
        setStreetNumber(userDetdails?.street_number)
        setAddressData(userDetdails?.additional_address_information)
        setZipCode(userDetdails?.postal_code)
        setLocationData(userDetdails?.city)
        setCountryData(userDetdails?.country)
    }, [userDetdails])

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const handleCountryChange = (event: any) => {
        setCountryData(event.target.value);
    };



    // Save data
    const saveChangesHandler = (data: any) => {

        console.log("sandeep22222222222", data)

        let payload = {
            first_name: firstName,
            last_name: lastName,
            street: streetLocation,
            street_number: streetNumber,
            postal_code: zipCode,
            city: locationData,
            country: countryData,
            additional_address_information: addressData,
            phone: phoneNumber,
            email_notifications_enabled: true
        }

        setFormError(null);

        apiCaller.put(`/api/v1/user/${userDetdails?.pk}/`, payload, config).then((response) => {
            console.log("response1111", response)

        }).catch((error) => {
            console.log("error", error)
            setFormError(error.response.data.message || "An error occurred while saving changes.");
        })

    }



    // Show user data
    // useEffect(()=>{
    //       apiCaller.get(`/api/v1/user/${userDetdails?.pk}/`,config).then((response)=>{

    //     //    setUserData(response)

    //       })  .catch((error) => {
    //         console.log("error",error)

    //       })
    // },[])





    // User Details
    useEffect(() => {
        apiCaller.get("/api/v1/user/", config).then((response) => {
            console.log("response11112222", response)
            setuserDetails(response?.data?.results?.[0])
        }).catch((error) => {
            console.log("error", error)

        })
    }, [])

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
                            <Button onClick={handleSubmit(saveChangesHandler)}>Änderungen Speichern</Button>
                            <Button>Account löschen</Button>
                        </Col>
                    </Row>
                    <Form
                    // onSubmit={handleSubmit(saveChangesHandler)}
                    >
                        <div className='profile-card'>
                            <Row>
                                <Col md="4">
                                    <Form.Group className='form-block'>
                                        <Form.Control type="text" placeholder="Firmenname" value={companyName}
                                            {...register('companyName', { required: true })}
                                            onChange={(e) => {
                                                setCompanyName(e.target.value);
                                                // Clear error message when value is entered
                                                errors.companyName && clearErrors('companyName');
                                            }}
                                        />
                                        <Form.Label>Firmenname</Form.Label>
                                        {errors.companyName && <p className="error-message">Please enter company name</p>}
                                    </Form.Group>
                                </Col>
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
                            </Row>
                            <Row>
                                <Col md="4">
                                    <Form.Group className='form-block'>
                                        <Form.Control type="email" placeholder="E-Mail"
                                            {...register('emailId', { required: true })}
                                            // onChange={(e)=>setEmailId(e.target.value)} 
                                            onChange={(e) => {
                                                setEmailId(e.target.value);
                                                // Clear error message when value is entered
                                                errors.emailId && clearErrors('emailId');
                                            }}
                                            value={emailId} />
                                        <Form.Label>E-Mail</Form.Label>
                                        {errors.emailId && <div className="error-message">Please enter email-Id</div>}
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className='form-block'>
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
                                        <Form.Control type="number" placeholder="Adresszusatz"
                                            {...register('addressData', { required: true })}
                                            // onChange={(e)=>setAddressData(e.target.value)} 
                                            onChange={(e) => {
                                                setAddressData(e.target.value);
                                                // Clear error message when value is entered
                                                errors.addressData && clearErrors('addressData');
                                            }}
                                            value={addressData} />
                                        <Form.Label>Adresszusatz</Form.Label>
                                        {errors.addressData && <div className="error-message">Please enter address</div>}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <Form.Group className='form-block mb-0'>
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
                                    <Form.Group className='form-block mb-0'>
                                        <Form.Control type="text" placeholder="Standort: Ort"
                                            {...register('locationData', { required: true })}
                                            // onChange={(e)=>setLocationData(e.target.value)} 
                                            onChange={(e) => {
                                                setLocationData(e.target.value);
                                                // Clear error message when value is entered
                                                errors.locationData && clearErrors('locationData');
                                            }}
                                            value={locationData} />
                                        <Form.Label>Standort: Ort</Form.Label>
                                        {errors.locationData && <div className="error-message">Please enter location</div>}
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className='form-block mb-0'>
                                        <Form.Select aria-label="Dropdown"
                                            {...register('countryData', { required: true })}
                                            onChange={handleCountryChange}>
                                            <option>Standort: Land</option>
                                            {/* <option value="India">India</option>
                    <option value="Russia">Russia</option>
                    <option value="Brazil">Brazil</option> */}
                                            <option value="India" selected={countryData === "India"}>India</option>
                                            <option value="Russia" selected={countryData === "Russia"}>Russia</option>
                                            <option value="Brazil" selected={countryData === "Brazil"}>Brazil</option>
                                        </Form.Select>
                                        {errors.countryData && <div className="error-message">Please select country</div>}
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                        <div className="button-wrap">
                            <Button onClick={() => router.push("/resetpassword")}>Passwort ändern</Button>
                        </div>
                    </Form>
                    <div className="notice">
                        <div className='notice-primary'>
                            <span className='notice-head'>HINWEIS</span>
                        </div>
                        <p>Feld Firmenname ist hier noch enthalten, kann aber entfernt werden falls er nicht angezeigt werden
                            soll</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profil
