"use client";

import Image from "next/image";
import imgMultiuser from '../../Assets/images/icon-multipleuser.svg';
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import './benutzer.scss';
import { Button } from "react-bootstrap";
import ReactTable from "../../shared/NewTable";
import { createColumnHelper } from "@tanstack/react-table";

const defaultData = [
  {
    aliasName: "Satteldachanlage C",
    anlagenID: 12421,
    name: "Anlage B",
    nameEigentümer: "Karina Drehmann",
    handwerksbetrieb: "Handwerksbetrieb Solar GmbH",
    adressederAnlage: "Beispielstraße 13, 53111 Bonn"
  },
  {
    aliasName: "aa C",
    anlagenID: 567890,
    name: "Anlage B",
    nameEigentümer: "Karina Drehmann",
    handwerksbetrieb: "Handwerksbetrieb Solar GmbH",
    adressederAnlage: "Beispielstraße 13, 53111 Bonn"
  },
  {
    aliasName: "bb C",
    anlagenID: 45678,
    name: "Anlage B",
    nameEigentümer: "Karina Drehmann",
    handwerksbetrieb: "Handwerksbetrieb Solar GmbH",
    adressederAnlage: "Beispielstraße 13, 53111 Bonn"
  },
  {
    aliasName: "Satteldachanlage C",
    anlagenID: 98722,
    name: "Anlage B",
    nameEigentümer: "Karina Drehmann",
    handwerksbetrieb: "Handwerksbetrieb Solar GmbH",
    adressederAnlage: "Beispielstraße 13, 53111 Bonn"
  },
  {
    aliasName: "Satteldachanlage C",
    anlagenID: 69861,
    name: "Anlage B",
    nameEigentümer: "Karina Drehmann",
    handwerksbetrieb: "Handwerksbetrieb Solar GmbH",
    adressederAnlage: "Beispielstraße 13, 53111 Bonn"
  },
]

function Benutzer() {
  const columnHelper = createColumnHelper()
  
  const columns = [
    columnHelper.accessor('aliasName', {
      header: "",
      cell: (props) => (<span>! logo</span>)
    }),
    columnHelper.accessor('aliasName', {
      cell: info => info.getValue(),
      header: "Alias Name"
    }),
    columnHelper.accessor('anlagenID', {
      cell: info => info.getValue(),
      header: "Anlagen ID"
    }),
    columnHelper.accessor('name', {
      cell: info => info.getValue(),
      header: "Name"
    }),
    columnHelper.accessor('nameEigentümer', {
      cell: info => info.getValue(),
      header: "Name Eigentümer"
    }),
    columnHelper.accessor('handwerksbetrieb', {
      cell: info => info.getValue(),
      header: "Handwerksbetrieb"
    }),
    columnHelper.accessor('adressederAnlage', {
      cell: info => info.getValue(),
      header: "Adresseder Anlage"
    }),
    columnHelper.accessor('aliasName', {
      cell: props => <span style={{cursor:"pointer"}}>Details </span>,
      header: ""
    }),
  ]

  return (
    <section className="benutzer">
      <Header />
      <div className="benutzer-wrap">
        <Sidebar />
        <div className="benutzer-block">
            <div className="heading-wrap">
                <h2><i className="icon-multiuser">
                    <Image src={imgMultiuser} alt="Icon"/>
                </i>Benutzer</h2>
                <Button>Servicetechniker einladen</Button>
            </div>
            <ReactTable data={defaultData} columns={columns}/>
        </div>

        <div>

        {/* Table Component */}
        
        </div>
      </div>
      
    </section>
  )
}

export default Benutzer
