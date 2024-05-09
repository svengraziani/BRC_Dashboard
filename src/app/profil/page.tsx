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

function Profil() {
    const router = useRouter();

   
   

const [companyName,setCompanyName]=useState()
const [firstName,setFirstName]=useState()
const [lastName,setLastName]=useState()
const [emailId,setEmailId]=useState()
const [phoneNumber,setPhoneNumber]=useState()
const [streetLocation,setStreetLocation]=useState()
const [streetNumber,setStreetNumber]=useState()
const [addressData,setAddressData]=useState()
const [zipCode,setZipCode]=useState()
const [locationData,setLocationData]=useState()
const [countryData,setCountryData]=useState()

const [userDetdails,setuserDetails]=useState()

// const [userData,setUserData]=useState()


let token=localStorage.getItem("token")

console.log("sandeep111",firstName)

//set user data in state
useEffect(()=>{

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
},[userDetdails])

const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const handleCountryChange = (event:any) => {
    setCountryData(event.target.value);
};



// Save data
const saveChangesHandler=()=>{

let payload={
    first_name: firstName,
    last_name: lastName,
    street: streetLocation,
    street_number: streetNumber,
    postal_code:zipCode,
    city: locationData,
    country: countryData,
    additional_address_information: addressData,
    phone: phoneNumber,
    email_notifications_enabled: true
}

apiCaller.put(`/api/v1/user/${userDetdails?.pk}/`,payload,config).then((response)=>{
    console.log("response1111",response)
    
  })  .catch((error) => {
    console.log("error",error)

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
useEffect(()=>{
    apiCaller.get("/api/v1/user/",config).then((response)=>{
        console.log("response11112222",response)
      setuserDetails(response?.data?.results?.[0])
    })  .catch((error) => {
      console.log("error",error)

    })
},[])

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
            <Button onClick={saveChangesHandler}>Änderungen Speichern</Button>
            <Button>Account löschen</Button>
            </Col>
        </Row>
    <Form>
      <div className='profile-card'>
        <Row>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="text" placeholder="Firmenname" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} />
                <Form.Label>Firmenname</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="text" placeholder="Vorname" onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
                <Form.Label>Vorname</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="text" placeholder="Nachname" onChange={(e)=>setLastName(e.target.value)} value={lastName} />
                <Form.Label>Nachname</Form.Label>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="email" placeholder="E-Mail" onChange={(e)=>setEmailId(e.target.value)} value={emailId} />
                <Form.Label>E-Mail</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="tel" placeholder="Telefonnummer" onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber}/>
                <Form.Label>Telefonnummer</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4"></Col>
        </Row>
        <Row>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="text" placeholder="Standort: Straße" onChange={(e)=>setStreetLocation(e.target.value)} value={streetLocation}/>
                <Form.Label>Standort: Straße</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="number" placeholder="Standort: Straße Nr." onChange={(e)=>setStreetNumber(e.target.value)} value={streetNumber}/>
                <Form.Label>Standort: Straße Nr.</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="number" placeholder="Adresszusatz" onChange={(e)=>setAddressData(e.target.value)} value={addressData}/>
                <Form.Label>Adresszusatz</Form.Label>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md="4">
                <Form.Group className='form-block mb-0'>
                <Form.Control type="number" placeholder="Standort: PLZ" onChange={(e)=>setZipCode(e.target.value)} value={zipCode}/>
                <Form.Label>Standort: PLZ</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block mb-0'>
                <Form.Control type="text" placeholder="Standort: Ort"  onChange={(e)=>setLocationData(e.target.value)} value={locationData}/>
                <Form.Label>Standort: Ort</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block mb-0'>
                <Form.Select aria-label="Dropdown" onChange={handleCountryChange}>
                    <option>Standort: Land</option>
                    {/* <option value="India">India</option>
                    <option value="Russia">Russia</option>
                    <option value="Brazil">Brazil</option> */}
                     <option value="India" selected={countryData === "India"}>India</option>
                    <option value="Russia" selected={countryData === "Russia"}>Russia</option>
                    <option value="Brazil" selected={countryData === "Brazil"}>Brazil</option>
                </Form.Select>
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
