import Footer from "@/common/Footer";
import Header from "@/common/Header";
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
