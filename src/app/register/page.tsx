"use client";

import Image from "next/image";
import arrowImg from '../../Assets/images/icon-back.svg';
import sectionImg from "../../Assets/images/section-logo.png";
import backgroundImage from '../../Assets/images/background.jpg';
import Link from "next/link";
import "./register.scss";
import { Button, Row, Col, Form, Modal } from "react-bootstrap";
import { useSearchParams, useRouter } from "next/navigation";
import { capitalizeFirstLetter } from "../../services/genericFunctions";
import { FormEvent, Suspense, useState } from "react";
import SharedModal from "@/shared/Modal";
import { apiCaller } from "@/services/apiCaller";

function CompleteRegistartionModal() {
  const router = useRouter();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    router.push("/placeholderpath");
  }

  return (
    <Modal.Body>
      <h2>Registrierung abschließen</h2>
      <p>Bitte prüfen Sie Ihre E-Mails. Wir haben Ihnen eine E-Mail mit einem Link für die Passwortvergabe
        gesendet. Damit können Sie die Registrierung abschließen.</p>
      <Button onClick={submitHandler}>OK</Button>
    </Modal.Body>
  )
}

export default function Register() {
  const searchParams = useSearchParams();
  const query = searchParams.get("regis");
  const [registrationModal, setRegistrationModal] = useState<boolean>(false);

  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [street, setStreet] = useState<string>("")
  const [addressNumber, setAddressNumber] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [postcode, setPostcode] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  const [telephone, setTelephone] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  
  const [businessName, setBusinessName] = useState<string>("")

  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [streetError, setStreetError] = useState<string>("");
  const [addressNumberError, setAddressNumberError] = useState<string>("");
  const [postcodeError, setPostcodeError] = useState<string>("");
  const [locationError, setLocationError] = useState<string>("");
  const [countryError, setCountryError] = useState<string>("");
  const [telephoneError, setTelephoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [businessNameError, setBusinessNameError] = useState<string>("");

  const [errors, setErrors] = useState<any>({});

  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [privacyAccepted, setPrivacyAccepted] = useState<boolean>(false);


  // const router = useRouter();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: any = {};

    if (!firstName.trim()) {
      errors.firstName = "Vorname ist erforderlich";
    }

    if (!lastName.trim()) {
      errors.lastName = "Nachname ist erforderlich";
    }

    if (!street.trim()) {
      errors.street = "Straße ist erforderlich";
    }

    if (!addressNumber.trim()) {
      errors.addressNumber = "Nr. ist erforderlich";
    }

    if (!postcode.trim()) {
      errors.postcode = "PLZ ist erforderlich";
    }

    if (!location.trim()) {
      errors.location = "Ort ist erforderlich";
    }

    if (!country.trim()) {
      errors.country = "Land ist erforderlich";
    }

    if (!telephone.trim()) {
      errors.telephone = "Telefonnummer ist erforderlich";
    }

    if (!email.trim()) {
      errors.email = "E-Mail ist erforderlich";
    }

    if (!termsAccepted) {
      errors.termsAccepted = "Nutzungsbedingungen müssen akzeptiert werden";
    }

    if (!privacyAccepted) {
      errors.privacyAccepted = "Datenschutzerklärung muss akzeptiert werden";
    }

    setErrors(errors);



    let payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      street: street,
      street_number: addressNumber,
      postal_code: postcode,
      city: location,
      country: country,
      additional_address_information: address,
      phone: telephone,
      email_notifications_enabled: true,
      business_name: ""
    }

    if (query === "unternehmensaccount") {
      payload.business_name = businessName;
    } else {
      // delete payload.business_name;
    }

    apiCaller.post("/api/v1/user/register/", payload)
    .then(response => {
      console.log(response,'response ???????????????????');
    })

    // setRegistrationModal(true);
  }

  const handleChange = (field: string, value: string | boolean) => {
    switch (field) {
      case "firstName":
        setFirstName(value as string);
        if (errors.firstName) {
          setErrors((prevState: any) => ({ ...prevState, firstName: "" }));
        }
        break;
      case "lastName":
        setLastName(value as string);
        if (errors.lastName) {
          setErrors((prevState: any) => ({ ...prevState, lastName: "" }));
        }
        break;
      case "street":
        setStreet(value as string);
        if (errors.street) {
          setErrors((prevState: any) => ({ ...prevState, street: "" })); 
        }
        break;
      case "addressNumber":
        setAddressNumber(value as string);
        if (errors.addressNumber) {
          setErrors((prevState: any) => ({ ...prevState, addressNumber: "" }));
        }
        break;
      case "postcode":
        setPostcode(value as string);
        if (errors.postcode) {
          setErrors((prevState: any) => ({ ...prevState, postcode: "" }));
        }
        break;
      case "location":
        setLocation(value as string);
        if (errors.location) {
          setErrors((prevState: any) => ({ ...prevState, location: "" }));
        }
        break;
      case "country":
        setCountry(value as string);
        if (errors.country) {
          setErrors((prevState: any) => ({ ...prevState, country: "" }));
        }
        break;
      case "telephone":
        setTelephone(value as string);
        if (errors.telephone) {
          setErrors((prevState: any) => ({ ...prevState, telephone: "" }));
        }
        break;
      case "email":
        setEmail(value as string);
        if (errors.email) {
          setErrors((prevState: any) => ({ ...prevState, email: "" }));
        }
        break;
      case "businessName":
        setBusinessName(value as string);
        if (errors.businessName) {
          setErrors((prevState: any) => ({ ...prevState, businessName: "" }));
        }
        break;
        case "termsAccepted":
          setTermsAccepted(value as boolean);
          break;
        case "privacyAccepted":
          setPrivacyAccepted(value as boolean);
          break;
        default:
          break;
    }
  };

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <section className="form-bg register">
        <Image
          alt="backgroun-image"
          src={backgroundImage}
          placeholder="blur"
          fill
          quality={100}
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: "-1"
          }}
        />
        <div className="section-logo">
          <Image src={sectionImg} alt="Section-Logo" />
        </div>

        <SharedModal show={registrationModal} modalContent={<CompleteRegistartionModal />} onHide={() => setRegistrationModal(false)} />

        <div className="form-wrap register-form">
          <Row>
            <Col xs>
              <div className="back-btn">
                <Link href={"/login"} className="d-flex align-items-center my-0">
                  <i className="icon-back">
                    <Image src={arrowImg} alt="arrow-image"></Image>
                  </i>Zurück zum Login</Link>
              </div>
            </Col>
          </Row>
          <h2>Registrierung {capitalizeFirstLetter(query ? query : "")}</h2>
          <Form onSubmit={submitHandler} className="my-0">
            {query === "unternehmensaccount" && (
              <Row>
                <Col md="12">
                  <Form.Group className="form-block">
                    <Form.Control value={businessName} 
                    // onChange={e => setBusinessName(e.target.value)} 
                    onChange={(e) => handleChange("businessName", e.target.value)} 
                    type="text" placeholder="Firmenname*" spellCheck={false} />
                    <Form.Label>Firmenname*</Form.Label>
                    {errors.businessName && <p className="error-message">{errors.businessName}</p>}
                  </Form.Group>
                </Col>
              </Row>
            )}

            <Row>
              <Col md="6">
                <Form.Group className="form-block">
                  <Form.Control type="text" value={firstName}
                  //  onChange={e => setFirstName(e.target.value)} 
                   onChange={(e) => handleChange("firstName", e.target.value)} 
                   placeholder="Vorname*" spellCheck={false} />
                  <Form.Label>Vorname*</Form.Label>
                  {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="form-block">
                  <Form.Control type="text" value={lastName} 
                  // onChange={e => setLastName(e.target.value)}
                  onChange={(e) => handleChange("lastName", e.target.value)} 
                  placeholder="Nachname*" spellCheck={false} />
                  <Form.Label>Nachname*</Form.Label>
                  {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Form.Group className="form-block">
                  <Form.Control type="text" value={street}
                  //  onChange={e => setStreet(e.target.value)}
                  onChange={(e) => handleChange("street", e.target.value)} 
                   placeholder="Straße*" spellCheck={false} />
                  <Form.Label>Straße*</Form.Label>
                  {errors.street && <p className="error-message">{errors.street}</p>}
                </Form.Group>
              </Col>
              <Col md="6">
                <Row>
                  <Col md="4">
                    <Form.Group className="form-block">
                      <Form.Control type="number" value={addressNumber} 
                      // onChange={e => setAddressNumber(e.target.value)}
                      onChange={(e) => handleChange("addressNumber", e.target.value)} 
                       placeholder="Nr.*" spellCheck={false} />
                      <Form.Label>Nr.*</Form.Label>
                      {errors.addressNumber && <p className="error-message">{errors.addressNumber}</p>}
                    </Form.Group>
                  </Col>
                  <Col md="8">
                    <Form.Group className="form-block">
                      <Form.Control type="text" placeholder="Adresszusatz" spellCheck={false} value={address}
                       onChange={e => setAddress(e.target.value)} 
                       
                       />
                      <Form.Label>Adresszusatz</Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Form.Group className="form-block">
                  <Form.Control type="number" value={postcode} 
                  // onChange={e => setPostcode(e.target.value)} 
                  onChange={(e) => handleChange("postcode", e.target.value)}
                  placeholder="PLZ*" spellCheck={false} />
                  <Form.Label>PLZ*</Form.Label>
                  {errors.postcode && <p className="error-message">{errors.postcode}</p>}
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="form-block">
                  <Form.Control type="text" value={location} 
                  onChange={(e) => handleChange("location", e.target.value)}
                  // onChange={e => setLocation(e.target.value)} 
                  placeholder="Ort*" spellCheck={false} />
                  <Form.Label>Ort*</Form.Label>
                  {errors.location && <p className="error-message">{errors.location}</p>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Form.Group className="form-block">
                  <Form.Select aria-label="Dropdown"
                  onChange={(e) => handleChange("country", e.target.value)}
                  // onChange={e => setCountry(e.target.value)}
                  >
                    <option>Land*</option>
                    <option value="India">India</option>
                    <option value="Russia">Russia</option>
                    <option value="Brazil">Brazil</option>
                  </Form.Select>
                  {errors.country && <p className="error-message">{errors.country}</p>}
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="form-block">
                  <Form.Control type="tel" placeholder="Telefonnummer*" spellCheck={false} value={telephone} 
                  // onChange={e => setTelephone(e.target.value)} 
                   onChange={(e) => handleChange("telephone", e.target.value)} />
                  <Form.Label>Telefonnummer*</Form.Label>
                  {errors.telephone && <p className="error-message">{errors.telephone}</p>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs>
                <Form.Group className="form-block">
                  <Form.Control type="email" placeholder="E-Mail*" spellCheck={false} value={email} 
                  // onChange={e => setEmail(e.target.value)}
                  onChange={(e) => handleChange("email", e.target.value)} ></Form.Control>
                  <Form.Label>E-Mail*</Form.Label>
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </Form.Group>
              </Col>
            </Row>
            <h3>* Pflichtfelder</h3>
            <Row>
              <Col md="6">
                <Form.Check
                  type={"checkbox"}
                  // name={"registration"}
                  name={"termsAccepted"}

                  id={`einzelaccount`}
                  label={<div className="conditions d-flex"><Link href="#">Nutzungsbedingungen</Link>
                    <span>akzeptieren*</span></div>} 
                    checked={termsAccepted}
                    onChange={(e) => handleChange("termsAccepted", e.target.checked)}
                     />
                    {errors.termsAccepted && <p className="error-message">{errors.termsAccepted}</p>}
              </Col>
              <Col md="6">
                <Form.Check
                  type={"checkbox"}
                  // name={"registration"}
                  name={"privacyAccepted"}

                  id={`datenschutzerklärung`}
                  label={<div className="conditions d-flex"><Link href="#">Datenschutzerklärung</Link>
                    <span>akzeptieren*</span></div>} 
                      checked={privacyAccepted}
                      onChange={(e) => handleChange("privacyAccepted", e.target.checked)}/>
                       {errors.privacyAccepted && <p className="error-message">{errors.privacyAccepted}</p>}
              </Col>
            </Row>
            <Button type="submit">Registrieren</Button>
          </Form>
        </div>
      </section>
    </Suspense>
  )
}