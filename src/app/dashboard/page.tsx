"use client";

import './dashboard.scss';
import '../../css/sass/global.scss';
import Sidebar from "../../shared/Sidebar";
import Image from "next/image";
import imgAnlagen from '../../Assets/images/icon-anlagen.svg';
import imgError from '../../Assets/images/icon-error.svg';
import Header from '../../shared/Header';
import { Button, Col, Row } from 'react-bootstrap';
import ReactTable from '../../shared/NewTable';
import { createColumnHelper } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { MdNavigateNext } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { API, apiCaller } from '@/services/apiCaller';
import LoadingIndicator from '@/shared/Loader';

type QueryParams = {
  name: string;
  isChecked: boolean;
}

type Country = {
  code: string;
  name: string;
}

type DashboardType = {
  next: string | null;
  count: number;
  previous: string;
  results: {
    additional_address_information: string;
    alias_name: string;
    city: string;
    country: Country,
    craft_business: string | null | number;
    energy_storage_capacity_kwh: string | null | number;
    energy_storage_exists: boolean;
    energy_storage_manufacturer: string;
    energy_storage_type: string;
    gateways: number[];
    inverter_manufacturer: string;
    inverter_type: string;
    module_manufacturer: string;
    module_type: string;
    name: string;
    notes: string;
    order_number: string;
    pk: number;
    postal_code: string;
    power_purchase_costs: number | string | null;
    roles: number[];
    status: string;
    street: string;
    street_number: string;
    url: string;
    wallbox_exists: boolean;
  }[]
}

export default function Dashboard() {
  const router = useRouter();

  const [dashboardData, setDashboardData] = useState<any>([])
  const [numberOfRecords, setNumberOfRecords] = useState<number>(0)
  const [pageIndex, setPageIndex] = useState<number>(1)
  const [query, setQuery] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const pageLimit = 10;

  const [apiUrl, setApiUrl] = useState<string>(`/api/v1/facility/?limit=${pageLimit}&offset=1`)

  const [statusFilter, setStatusFilter] = useState([
    {
      name: "ERROR",
      isChecked: false
    },
    {
      name: "WARNING",
      isChecked: false
    },
    {
      name: "PENDING",
      isChecked: false
    },
    {
      name: "OK",
      isChecked: false
    },
  ])

  const [search, setSearch] = useState("")

  useEffect(() => {
    setIsLoading(true)

    let apiQuery = ''

    if (query) {
      query.map(item => {
        apiQuery = `${apiQuery}&status=${item}`
      })
    }

    apiCaller.get(`${apiUrl}&search=${search}${apiQuery}`)
      .then(response => {
        setDashboardData(response?.data)
        setNumberOfRecords(response.data.count)

        setIsLoading(false)
      })

  }, [search, query, pageIndex])

  const columnHelper = createColumnHelper()

  const columns = [
    columnHelper.accessor('aliasName', {
      header: "",
      cell: (props) => (<i className='icon-error'><Image src={imgError} alt='Icon' /></i>)
    }),
    columnHelper.accessor('alias_name', {
      cell: info => info.getValue(),
      header: "Alias-Name"
    }),
    columnHelper.accessor('pk', {
      cell: info => info.getValue(),
      header: "Anlagen-ID"
    }),
    columnHelper.accessor('name', {
      cell: info => info.getValue(),
      header: "Name"
    }),
    // columnHelper.accessor('nameEigentumer', {
    //   cell: info => info.getValue(),
    //   header: "Name Eigentümer"
    // }),
    columnHelper.accessor('craft_business', {
      cell: info => info.getValue(),
      header: "Handwerksbetrieb"
    }),
    columnHelper.accessor('postal_code', {
      cell: (props: any) => {
        return <h6>{props?.row?.original.street_number} {" "} {props.row.original.street} , {props.row.original.city} {`(${props.row.original.postal_code})`}</h6>
      },
      header: "Adresse der Anlage"
    }),
    // columnHelper.accessor('Aktionen', {
    //   cell: info => info.getValue(),
    //   header: "Aktionen"
    // }),
    columnHelper.accessor('aliasName', {
      cell: (props: any) => <Button variant='details' style={{ cursor: "pointer" }} onClick={() => {
        router.push(`/dashboard/details/${props.row.original?.pk}`)
      }}><i className='icon-next'><MdNavigateNext size={24} /></i> </Button>,
      header: ""
    }),
  ]

  const queryHandler = (type: string, queryData: QueryParams[]) => {

    let filterByCheck = queryData.filter(item => item.isChecked === true)

    if (filterByCheck.length <= 0) {
      setQuery([])
      return;
    }

    const nameList: string[] = []

    filterByCheck.map((item: any) => {
      nameList.push(item.name)
    })

    setQuery(nameList)
  }

  const resetHandler = () => {
    const updatedStatusFilter = statusFilter.map(item => ({
      ...item,
      isChecked: false
    }));

    setStatusFilter(updatedStatusFilter);

    apiCaller.get(`api/v1/facility`)
      .then((response) => {
        setDashboardData(response?.data)
        setNumberOfRecords(response.data.count)
        setIsLoading(false)
      })
  }

  const pageChangeHandler = (pageIndex: number, action: 'decrease' | 'increase') => {
    let nextUrl = action === "increase" ? dashboardData.next : dashboardData.previous;
    let queryUrl = nextUrl.split(API)[1];
    let splittedQuery = queryUrl.split("&");

    let extractedUrl = `${splittedQuery[0]}&${splittedQuery[1]}`;
    setApiUrl(extractedUrl)

    setPageIndex(pageIndex);
  }

  return (
    <>
      <Header />
      <section className="dashboard">
        <Sidebar />
        <div className="dashboard-right">
          <Row className='heading-wrap'>
            <Col md="6">
              <h2><i className="icon-head">
                <Image src={imgAnlagen} alt="Icon" />
              </i>Dashboard - Anlagen</h2>
            </Col>
            <Col md="6">
              <p>Letzte Aktualisierung: 24.10.2023, 15:00 Uhr</p>
            </Col>
          </Row>
          {/* Table component */}
          <ReactTable
            data={dashboardData.results ? dashboardData?.results : []}
            columns={columns}
            isFilters={false}
            isStatusFilter={true}
            isCreation={true}
            isFiltersWrap={true}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            setDashboardData={setDashboardData}
            setSearch={setSearch}
            numberOfRecords={numberOfRecords}
            queryHandler={queryHandler}
            resetHandler={resetHandler}
            pageChangeHandler={pageChangeHandler}
            query={query}
          />
          <div className="filter-wrap"></div>
        </div>

        {isLoading && <LoadingIndicator />}
      </section>
    </>
  )
}