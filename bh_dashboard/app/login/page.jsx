"use client";
import "./login.scss";
import Image from "next/image";
import logoImg from "@/Assets/images/logo.svg";
import Link from "next/link";

export default function Login() {
  return (
    <div className="login-form">
      <div className="logo">
        <Link href={'#'}>
        <Image src={logoImg} />
        </Link>
      </div>
      <h2>Login</h2>
      <form>
        <div className="form-block">
          <input type="email" placeholder="E-mail" className="form-control"></input>
        </div>
        <div className="form-block">
          <input type="text" placeholder="Name" className="form-control"></input>
        </div>
        <Link href={"/register"} style={{display: "block"}}>Passwort vergessen</Link>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p>Neu hier? <Link href={"/register"}>Jetzt registrieren</Link></p>
    </div>
  )
}