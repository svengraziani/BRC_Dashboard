"use client";

import ReactTable from '@/shared/NewTable';
import './Logbuch.scss';
import { createColumnHelper } from '@tanstack/react-table';
import { Button, Modal } from 'react-bootstrap';
import { useParams, useRouter } from 'next/navigation';
import { MdNavigateNext } from 'react-icons/md';
import Image from 'next/image';
import imgWarning from '../../../../Assets/images/icon-warning.svg';
import imgError from '../../../../Assets/images/icon-error.svg';
import { useEffect, useState } from 'react';
import SharedModal from '@/shared/Modal';
import { apiCaller } from '@/services/apiCaller';

type Logbush = {
    customer: number;
    facility: number;
    facility_alias_name: string;
    facility_name: string;
    gateway_device_id: string;
    log_message: string;
    optimizer_id: string;
    severity: string;
    severity_label: string;
    status_code: string;
    status_code_description: string;
    string: string;
    timestamp: string;
}

function MistakeModal() {
    return (
        <Modal.Body>
            <h2><i className="icon-warning"><Image src={imgError} alt='Icon' /></i>Felher</h2>
            <div className="description">
                <span className="report-head">Meldung</span>
                <p className="report-description">Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle
                    Buchstaben da sind und wie sie aussehen.</p>
            </div>
            <div className="description">
                <span className="report-head">Datum und Uhrzeit</span>
                <p className="report-description">18.12.2023, 08:10:35 Uhr</p>
            </div>
            <div className="description">
                <span className="report-head">Anlagename</span>
                <p className="report-description">Satteldachanlage</p>
            </div>
            <div className="description">
                <span className="report-head">Gateway-ID</span>
                <p className="report-description">67890</p>
            </div>
            <div className="description">
                <span className="report-head">String</span>
                <p className="report-description">String 1</p>
            </div>
            <div className="description">
                <span className="report-head">Optimizer</span>
                <p className="report-description">134567</p>
            </div>
            <div className="description">
                <span className="report-head">Kunde</span>
                <p className="report-description">Max Mustermann</p>
            </div>
            <div className="description">
                <span className="report-head">Anlagestandort</span>
                <p className="report-description">Beispielstraße 2, 53111 Bonn</p>
            </div>
            <Button>Schließen</Button>
        </Modal.Body>
    )
}

function DashboardLogbuch() {
    const [mistakeModal, setMistakeModal] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("")
    const [pageIndex, setPageIndex] = useState<number>(1)
    const [numberOfRecords, setNumberOfRecords] = useState<number>(0)
    const [logbush, setLogbush] = useState<Logbush[]>([])

    const {id} = useParams()

    const columnHelper = createColumnHelper();

    const pageChangeHandler = (pageIndex: number) => {
        setPageIndex(pageIndex);
    }

    useEffect(()=> {
        apiCaller.get(`/api/v1/asset-datapoint-logs/?facility_name=${id}&limit=10&offset=${pageIndex}&search=${search}`)
        .then(response => {
            setNumberOfRecords(response.data.count)
            setLogbush(response.data.results)
        })
    }, [pageIndex, search])

    const columns = [
        columnHelper.accessor('typ', {
            header: "Typ",
            cell: (props) => (<i className='icon-error'><Image src={imgWarning} alt='Icon' /></i>)
        }),
        columnHelper.accessor('datum', {
            header: "Datum and Uhrzeit"
        }),
        columnHelper.accessor('gateway', {
            header: "Gateway"
        }),
        columnHelper.accessor('string', {
            header: "String"
        }),
        columnHelper.accessor('optimizer', {
            header: "Optimizer"
        }),
        columnHelper.accessor('name', {
            header: "Name"
        }),
        columnHelper.accessor('meldung', {
            header: "Meldung"
        }),
        columnHelper.accessor('details', {
            cell: props => <Button variant='details' style={{ cursor: "pointer" }} onClick={() => setMistakeModal(true)}>Details<i className='icon-next'><MdNavigateNext size={18} /></i> </Button>,
            header: ""
        })
    ]
    return (
        <div className='logbuch-details'>
            <SharedModal show={mistakeModal} modalContent={<MistakeModal />} onHide={() => setMistakeModal(false)} />
            <ReactTable data={logbush ? logbush : []} columns={columns} pageChangeHandler={pageChangeHandler} setSearch={setSearch} numberOfRecords={numberOfRecords}/>
        </div>
    )
}

export default DashboardLogbuch
