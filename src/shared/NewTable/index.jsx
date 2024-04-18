import React from "react";

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

function ReactTable({ data, columns, isFilters , isStatusFilter, isCreation, isFiltersWrap}) {
  const [sorting, setSorting] = React.useState([])

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


  return (
    <div className="dashboard-table">
      {isFiltersWrap && (
        <Row className='filter-wrap'>
        <Col md="6">
          <Form.Group className="form-block block">
            <Form.Control type="search" placeholder="Suche" spellCheck="false"></Form.Control>
            <i className='icon-search'>
              <Image src={imgSearch} alt='Icon' />
            </i>
          </Form.Group>
        </Col>
        <Col md="6">
          <Row className="justify-content-end">
            <Col md="10" className='d-flex align-items-center justify-content-end'>
              {isStatusFilter && (
                <SelectBox statusFilter={["Satteldachanlage C", "Satteldachanlage D", "Satteldachanlage F"]} isIconVisible={true} filterName={'Status Filter'} isSearchable={false} />
              )}
              <div className='d-flex align-items-center justify-content-end gap-4'>
                <Button variant='synch'>
                  <i className='icon-synch'>
                    <Image src={imgSynch} alt='Icon' />
                  </i>
                </Button>
                {isCreation && (
                  <Button>
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
        <Row className='filter-secondary'>
        <Col md="6">
          <Row>
            <Col md="5">
              <SelectBox filterName={"Alias-Name Filter"} isIconVisible={true} statusFilter={["Satteldachanlage C", "Satteldachanlage D", "Satteldachanlage F"]} isSearchable={true} />
            </Col>
            <Col md="3">
              <SelectBox filterName={"Anlagen-ID"} isIconVisible={false} statusFilter={["987", "123", "754"]} isSearchable={true} />
            </Col>
            <Col md="4">
              <SelectBox filterName={"Gateway Filter"} isIconVisible={false} statusFilter={["67890", "23244", "67891"]} isSearchable={true} />
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <Row>
            <Col md="4">
              <SelectBox filterName={"String"} isIconVisible={false} statusFilter={["Warnung", "Felher"]} isSearchable={false} />
            </Col>
            <Col md="4">
              <SelectBox filterName={"Optimierer"} isIconVisible={false} statusFilter={["Warnung", "Felher"]} isSearchable={false} />
            </Col>
            <Col md="4">
              <SelectBox filterName={"Status Filter"} isIconVisible={false} statusFilter={["Warnung", "Felher"]} isSearchable={false} />
            </Col>
          </Row>
        </Col>
      </Row>
      )}
      <table style={{ width: "100%" }} className="table-block">
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
      <div className="h-4" />
    </div>
  )
}

export default ReactTable