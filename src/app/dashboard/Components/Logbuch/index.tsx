"use client";

import ReactTable from '@/shared/NewTable';
import './Logbuch.scss';
import { createColumnHelper } from '@tanstack/react-table';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { MdNavigateNext } from 'react-icons/md';
import Image from 'next/image';
import imgWarning from '../../../../Assets/images/icon-warning.svg';

function DashboardLogbuch() {

    const router =  useRouter();

    const defaultData = [
        {
            typ: "",
            datum: "18.12.2023, 18:07:01 Uhr",
            gateway: 67890,
            string: "String 1",
            optimizer: 134567,
            name: "Anlage A",
            meldung: "Dies ist ein Typoblindtext. An ihm kann man sehen, ...",
            details: ""
        },
        {
            typ: "",
            datum: "18.12.2023, 06:10:01 Uhr",
            gateway: 67880,
            string: "String 2",
            optimizer: 134567,
            name: "Anlage A",
            meldung: "Dies ist ein Typoblindtext. An ihm kann man sehen, ...",
            details: ""
        },
        {
            typ: "",
            datum: "17.12.2023, 08:10:37 Uhr",
            gateway: 23244,
            string: "String 3",
            optimizer: 134567,
            name: "Anlage A",
            meldung: "Dies ist ein Typoblindtext. An ihm kann man sehen, ...",
            details: ""
        },
        {
            typ: "",
            datum: "15.12.2023, 13:00:50 Uhr",
            gateway: 67891,
            string: "String 4",
            optimizer: 134567,
            name: "Anlage A",
            meldung: "Dies ist ein Typoblindtext. An ihm kann man sehen, ...",
            details: ""
        }
    ]

    const columnHelper = createColumnHelper();

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
            cell: props => <Button variant='details' style={{cursor:"pointer"}} onClick={()=> router.push("/dashboard/details/xyz")}>Details<i className='icon-next'><MdNavigateNext size={18} /></i> </Button>,
            header: ""
        })
    ]
  return (
    <div className='logbuch-details'>
      <ReactTable data={defaultData} columns={columns} />
    </div>
  )
}

export default DashboardLogbuch
