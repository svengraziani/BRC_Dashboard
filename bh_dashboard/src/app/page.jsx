import Footer from "../shared/Footer";
import Header from "../shared/Header";
import { Container } from "react-bootstrap";
import Login from "./login/page";

export default function Home() {
  return (
    <Container>
      <Header />
      <h1>Content</h1>
      <Login />
      <Footer />
    </Container>
  );
}
