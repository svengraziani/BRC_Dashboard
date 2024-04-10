import Link from "next/link";

import "./signup.scss";
import "../../css/sass/global.scss";

export default function Signup() {
  return(
    <section className="form-bg">
    <div className="signup-form">
      <Link href={"/login"}>Zurück zum Login</Link>
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
      <p>Neu hier? <Link href={"/signup"}>Jetzt registrieren</Link></p>
    </div>
    </section>
  )
}
