import React, { useState } from "react";

import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
  
import './NewTable.scss'
import { FaSortAlphaDown } from 'react-icons/fa';
import { Button, Row, Col, Form } from "react-bootstrap"
import Image from "next/image";
import imgSearch from '../../Assets/images/icon-search.svg';
import imgSynch from '../../Assets/images/icon-synch.svg';
import imgPlus from '../../Assets/images/icon-plus.svg';
import SelectBox from '../SelectBox';
import { useRouter } from "next/navigation";
import { apiCaller } from "@/services/apiCaller";

function ReactTable({ data, columns, isFilters , isStatusFilter, isCreation, isFiltersWrap, queryHandler, selectListHandler, setSelectData, selectData}: any) {
  const router = useRouter();
  const [sorting, setSorting] = React.useState<any>([])

  const [selectedStatus, setSelectedStatus] = useState("");
  const [orderingValue, setOrderingValue] = useState()

  const token =localStorage.getItem("token")



  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    getSortedRowModel: getSortedRowModel(), //client-side sorting
    onSortingChange: setSorting,
    state: {
      sorting
    }
  })

  const [aliasNameFilter, setAliasNameFilter] = useState([
    {
      name:"Satteldachanlage C",
      isChecked: false
    },
    {
      name:"Satteldachanlage D",
      isChecked: false
    },
    {
      name:"Satteldachanlage E",
      isChecked: false
    },
  ])

  const [anlagenIdFilter, setAnlagenIdFilter] = useState([
    {
      name: '1',
      isChecked: false
    },
    {
      name: '2',
      isChecked: false
    },
    {
      name: '3',
      isChecked: false
    },
  ])

  const [gatewayFilter, setGatewayFilter] = useState([
    {
      name: '67890',
      isChecked: false
    },
    {
      name: '56790',
      isChecked: false
    },
    {
      name: '89056',
      isChecked: false
    },
  ])

  const [string, setString] = useState([
    {
      name: 'String 1',
      isChecked: false
    },
    {
      name: 'String 2',
      isChecked: false
    },
    {
      name: 'String 3',
      isChecked: false
    },
  ])

  const [optimierer, setOptimierer] = useState([
    {
      name: 'Opt 1',
      isChecked: false
    },
    {
      name: 'Opt 2',
      isChecked: false
    },
    {
      name: 'Opt 3',
      isChecked: false
    },
  ])

  const [statusFilter, setStatusFilter] = useState([
    {
      name: 'Warnung',
      isChecked: false
    },
    {
      name: 'Fehler',
      isChecked: false
    },
  ])

  return (
    <div className="dashboard-table">
      {isFiltersWrap && (
        <Row className='filter-wrap'>
        <Col lg="6">
          <Form.Group className="form-block block">
            <Form.Control type="search" placeholder="Suche" spellCheck="false" onChange={e => {
              console.log(e.target.value, 'e.target.value');
              
            }}></Form.Control>
            <i className='icon-search'>
              <Image src={imgSearch} alt='Icon' />
            </i>
          </Form.Group>
        </Col>
        <Col lg="6">
          <Row className="justify-content-end">
            <Col lg="10" className='d-flex align-items-center justify-content-end'>
              {isStatusFilter && (
                <SelectBox statusFilter={statusFilter} setStatusFilter={setStatusFilter} isIconVisible={true} 
                filterName={'Status Filter'} isSearchable={false} selectListHandler={selectListHandler} setSelectData={setSelectData} selectData={selectData}/>
              )}
              <div className='d-flex align-items-center justify-content-end gap-4'>
                <Button variant='synch'>
                  <i className='icon-synch'>
                    <Image src={imgSynch} alt='Icon' />
                  </i>
                </Button>
                {isCreation && (
                  <Button onClick={() => router.push('/dashboard/create')}>
                  <i className='icon-plus'>
                    <Image src={imgPlus} alt='Icon' />
                  </i>
                </Button>
                )}
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
      )}
      
      {isFilters && (
        <Row className='filter-secondary align-items-center'>
        <Col lg="6" className="d-flex align-items-center">
        <Col lg="5" className="px-2">
              <SelectBox filterName={"Alias-Name Filter"} queryName={"aliasName"} isIconVisible={true} statusFilter={aliasNameFilter} queryHandler={queryHandler} setStatusFilter={setAliasNameFilter} isSearchable={true} />
            </Col>
            <Col lg="3" className="px-2">
              <SelectBox filterName={"Anlagen-ID"} queryName={"anlagenId"} isIconVisible={false} statusFilter={anlagenIdFilter} setStatusFilter={setAnlagenIdFilter} queryHandler={queryHandler} isSearchable={true} />
            </Col>
            <Col lg="4" className="px-2">
              <SelectBox filterName={"Gateway Filter"} queryName={"gateway"} isIconVisible={false} statusFilter={gatewayFilter} queryHandler={queryHandler} setStatusFilter={setGatewayFilter} isSearchable={true} />
            </Col>
        </Col>
        <Col lg="6" className="d-flex align-items-center">
        <Col lg="4" className="px-2">
              <SelectBox filterName={"String"} queryName={"string"} isIconVisible={false} statusFilter={string} queryHandler={queryHandler} setStatusFilter={setString} isSearchable={false} />
            </Col>
            <Col lg="4" className="px-2">
              <SelectBox filterName={"Optimierer"} queryName={"optimierer"} isIconVisible={false} statusFilter={optimierer} queryHandler={queryHandler} setStatusFilter={setOptimierer} isSearchable={false} />
            </Col>
            <Col lg="4" className="px-2">
              <SelectBox filterName={"Status Filter"} queryName={"status"} isIconVisible={false} statusFilter={statusFilter} queryHandler={queryHandler} setStatusFilter={setStatusFilter} isSearchable={false} />
            </Col>
        </Col>
      </Row>
      )}
      <div className="table-wrap">
      <table className="table-block">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} style={{ color: "blue" }}>
              {headerGroup.headers.map((header, index) => (
                <th key={header.id} >
                  <span style={{ paddingLeft: "20px" }}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </span>
                  <Button variant="filter" onClick={header.column.getToggleSortingHandler()}>
                    <i className="icon-alpha"><FaSortAlphaDown /></i>
                  </Button>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="tableRow">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      </div>
      <div className="h-4" />
    </div>
  )
}

export default ReactTable