"use client";

import Image from "next/image";
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import './logbuch.scss';
import imgLogbuch from '../../Assets/images/icon-logbuch.svg';
import imgError from '../../Assets/images/icon-error.svg';
import { Col, Row, Button, Modal } from "react-bootstrap";
import ReactTable from "../../shared/NewTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MdNavigateNext } from 'react-icons/md';
import { useEffect, useState } from "react";
import SharedModal from "@/shared/Modal";
import { useSelector } from "react-redux";
import { API, apiCaller } from "@/services/apiCaller";
import { debounce } from 'lodash'
import LoadingIndicator from "@/shared/Loader";

type Logbush = {
  customer: number;
  facility: number;
  facility_alias_name: string;
  facility_name: string;
  gateway_device_id: string;
  log_message: string;
  optimizer_id: string;
  severity: number;
  severity_label: string;
  status_code: number;
  status_code_description: string;
  string: number;
  timestamp: string;
}

type LogbushFilter = {
  id: string | number;
  name: string;
  typeOf?: string;
}

function MistakeModal({ logbushDetail, setMistakeModal }: any) {
  return (
    <Modal.Body>
      <h2><i className="icon-warning"><Image src={imgError} alt='Icon' /></i>Felher</h2>
      <div className="description">
        <span className="report-head">Meldung</span>
        <p className="report-description">{logbushDetail.log_message}</p>
      </div>
      <div className="description">
        <span className="report-head">Datum und Uhrzeit</span>
        <p className="report-description">{logbushDetail.timestamp}</p>
      </div>
      <div className="description">
        <span className="report-head">Anlagename</span>
        <p className="report-description">{logbushDetail.facility_name}</p>
      </div>
      <div className="description">
        <span className="report-head">Gateway-ID</span>
        <p className="report-description">{logbushDetail.gateway_device_id}</p>
      </div>
      <div className="description">
        <span className="report-head">String</span>
        <p className="report-description">{logbushDetail.string}</p>
      </div>
      <div className="description">
        <span className="report-head">Optimizer</span>
        <p className="report-description">{logbushDetail.optimizer_id}</p>
      </div>
      <div className="description">
        <span className="report-head">Kunde</span>
        <p className="report-description">N/A</p>
      </div>
      <div className="description">
        <span className="report-head">Anlagestandort</span>
        <p className="report-description">N/A</p>
      </div>
      <Button onClick={() => setMistakeModal(false)}>Schließen</Button>
    </Modal.Body>
  )
}

function Logbuch() {
  const [mistakeModal, setMistakeModal] = useState<boolean>(false);
  const [query, setQuery] = useState<any>([])
  const [logbush, setLogbush] = useState<any>([])
  const [pageIndex, setPageIndex] = useState<number>(1)
  const [search, setSearch] = useState<string>("")
  const [numberOfRecords, setNumberOfRecords] = useState<number>(0)
  const [logbushDetail, setLogbushDetail] = useState<Logbush>()

  const [aliasNameFilter, setAliasNameFilter] = useState<LogbushFilter[]>([])
  const [gatewayFilter, setGatewayFilter] = useState<LogbushFilter[]>([])

  const [isStringDisabled, setIsStringDisabled] = useState(true)
  const [isOptimiererDisabled, setIsOptimiererDisabled] = useState(true)

  const [isLoading, setIsLoading] = useState(true)

  const [apiUrl, setApiUrl] = useState<string>("/api/v1/asset-datapoint-logs/?limit=10&offset=1")

  const statusObject = {
    aliasName: aliasNameFilter,
    gateway: gatewayFilter
  }

  const filterDisabledObject = {
    isStringDisabled,
    isOptimiererDisabled
  }

  const columnHelper = createColumnHelper()

  const columns = [
    columnHelper.accessor('aliasName', {
      header: "Typ",
      cell: (props) => (<span>logo</span>)
    }),
    columnHelper.accessor('timestamp', {
      cell: info => info.getValue(),
      header: "Datum und Uhrzeit"
    }),
    columnHelper.accessor('facility_alias_name', {
      cell: info => info.getValue(),
      header: "Alias-Name"
    }),
    columnHelper.accessor('facility', {
      cell: info => info.getValue(),
      header: "Anlagen-ID"
    }),
    columnHelper.accessor('facility_name', {
      cell: info => info.getValue(),
      header: "Name"
    }),
    columnHelper.accessor('gateway_device_id', {
      cell: info => info.getValue(),
      header: "Gateway"
    }),
    columnHelper.accessor('string', {
      cell: info => info.getValue(),
      header: "String"
    }),
    columnHelper.accessor('optimizer_id', {
      cell: info => info.getValue(),
      header: "Optimizer"
    }),
    columnHelper.accessor('log_message', {
      cell: info => info.getValue(),
      header: "Meldung"
    }),
    columnHelper.accessor('aliasName', {
      cell: (props: any) => <Button variant='details' style={{ cursor: "pointer" }} onClick={() => {
        setLogbushDetail(props.row.original)
        setMistakeModal(true)
      }}>Details<i className='icon-next'><MdNavigateNext size={18} /></i> </Button>,
      header: ""
    }),
  ]

  useEffect(() => {
    let stringEnabled = query.filter((item: any) => {
      return item.name === "gateway"
    })

    if (stringEnabled.length !== 0) {
      setIsStringDisabled(true)
    }
  }, [query])

  const queryHandler = (type: any, queryData: any) => {
    const nameList: any = [];

    queryData.map((item: any) => {
      if (item.isChecked === true) {
        nameList.push(item.name)
      }
    })

    if (nameList.length === 0) {

      const updatedQuery = query.filter((item: any) => item?.name !== type);
      setQuery(updatedQuery);

      return;
    }

    let datacheck = query?.find((item: any) => item?.name === type)

    if (!datacheck) {
      // Name Doesn't exists

      const object = {
        name: type,
        searchQuery: nameList.join(",")
      }

      setQuery([...query, object])
    } else {
      const updatedQuery = query.map((item: any) => {
        if (item.name === type) {
          return { ...item, searchQuery: nameList.join(",") };
        }
        return item;
      });

      setQuery(updatedQuery);
    }
  }

  const resetHandler = () => {
    setIsLoading(true)

    setQuery([])

    apiCaller.get(`${apiUrl}`)
      .then(response => {
        setLogbush(response.data);
        setNumberOfRecords(response.data.count)

        setIsLoading(false)
      })
  }

  const pageChangeHandler = (pageIndex: number, action: 'decrease' | 'increase') => {
    let nextUrl = action === "increase" ? logbush.next : logbush.previous;
    let queryUrl = nextUrl.split(API)[1];
    let splittedQuery = queryUrl.split("&");

    let extractedUrl = `${splittedQuery[0]}&${splittedQuery[1]}`;
    setApiUrl(extractedUrl)

    setPageIndex(pageIndex);
  }

  const aliasNameStatus = (search: string) => {
    setIsLoading(true)

    apiCaller.get(`/api/v1/facility/?limit=3&search=${search}`)
      .then(response => {
        const aliasName: LogbushFilter[] = []
        response.data.results.map((item: any) => {
          aliasName.push({ id: item.pk, name: item.alias_name })
        })

        setAliasNameFilter(aliasName)

        setIsLoading(false)
      })
  }

  const gatewayStatus = (search: string) => {
    setIsLoading(true)
    apiCaller.get(`/api/v1/gateway/?limit=3&search=${search}`)
      .then(response => {
        const gatewayFilter: LogbushFilter[] = []
        response.data.results.map((item: any) => {
          gatewayFilter.push({ id: item.pk, name: item.name })
        })

        setGatewayFilter(gatewayFilter)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setIsLoading(true)

    let apiQuery = ''

    if (query) {
      console.log(query,'query ?????');
      
      query.map((item: any, index: any) => {
        apiQuery = apiQuery + `${item.name}=${item.searchQuery} ${index !== query.length - 1 ? "&" : ""}`
      })
    }

    apiCaller.get(`${apiUrl}&search=${search}${apiQuery.length !== 0 ? `&${apiQuery.replace(/\s/g, "")}` : ``}`)
      .then(response => {
        setLogbush(response.data);
        setNumberOfRecords(response.data.count)

        setIsLoading(false)
      })
  }, [query, pageIndex, search])

  const logbuchStatusChange = (searchKey: string, queryName: string, statusFilter: any, isVisible: boolean, selectedValue: LogbushFilter) => {
    if (isVisible) {

      // Check if the type of query already exists
      let filterByQuery = query.filter((item: any) => {
        return item.name === selectedValue?.typeOf
      })

      if (selectedValue) {
        // console.log(selectedValue,'selected value');
        
        if (filterByQuery.length === 0) {
          setQuery([...query, { name: selectedValue.typeOf, searchQuery: selectedValue.id }])
        } else {
          const updatedQuery = query.map((item: any) => {
            if (item.name === selectedValue?.typeOf) {
              return { ...item, searchQuery: selectedValue.id };
            }
            return item;
          });

          setQuery(updatedQuery);
        }
      }

      switch (queryName) {
        case "facility":
          aliasNameStatus(searchKey)
          break;
        case "gateway":
          gatewayStatus(searchKey)
          break;
        case "string":
          break;
        case "optimizer":
          break;
        default:
          break;
      }
    }
  }

  return (
    <>
      <Header />
      <section className="dashboard logbuch">

        <SharedModal show={mistakeModal} modalContent={<MistakeModal logbushDetail={logbushDetail} setMistakeModal={setMistakeModal} />} onHide={() => setMistakeModal(false)} />

        <Sidebar />
        <div className='dashboard-right'>
          <Row className="heading-wrap">
            <Col md="6">
              <h2><i className='icon-profil'>
                <Image src={imgLogbuch} alt='Icon' />
              </i>Logbuch</h2>
            </Col>
            <Col md="6">
              <p>Letzte Aktualisierung: 24.10.2023, 15:00 Uhr</p>
            </Col>
          </Row>
          {/* <DashboardTable /> */}
          <ReactTable data={logbush.results ? logbush.results : []} filterDisabledObject={filterDisabledObject} resetHandler={resetHandler} logbushFilterData={statusObject} logbuchStatusChange={logbuchStatusChange} setSearch={setSearch} pageChangeHandler={pageChangeHandler} queryHandler={queryHandler} columns={columns} isFilters={true} isStatusFilter={false} isCreation={false} isFiltersWrap={true} numberOfRecords={numberOfRecords} />
        </div>
      </section>

      {isLoading && <LoadingIndicator />}
    </>
  )
}

export default Logbuch
