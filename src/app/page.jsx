"use client";

import Footer from "../shared/Footer";
import Header from "../shared/Header";
import { Container } from "react-bootstrap";
import Login from "./login/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  useEffect(()=>{
    router.push("/login")
  }, [])

  return (
    <Container>
    </Container>
  );
}
