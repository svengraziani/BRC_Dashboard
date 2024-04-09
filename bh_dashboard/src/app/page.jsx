import Footer from "../shared/Footer";
import Header from "../shared/Header";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Header />
      <h1>Content</h1>
      <Footer />
    </Container>
  );
}
