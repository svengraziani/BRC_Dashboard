"use client";

import Image from "next/image";
import logoImg from "../../assets/images/logo.svg";
import "./login.scss";
import "../../css/sass/global.scss";

import Link from "next/link";

export default function Login() {
  return (
    <section className="form-bg">
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
          <input type="password" placeholder="Passwort" className="form-control"></input>
        </div>
        <Link href={"/register"}>Passwort vergessen</Link>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p>Neu hier? <Link href={"/register"}>Jetzt registrieren</Link></p>
    </div>
    </section>
  )
}