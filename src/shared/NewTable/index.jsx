import React from "react"
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
  } from '@tanstack/react-table'
  
import './NewTable.scss'

function ReactTable({data, columns}){
    const [sorting, setSorting] = React.useState([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        debugTable:true,
        getSortedRowModel: getSortedRowModel(), //client-side sorting
        onSortingChange: setSorting,
        state: {
          sorting
        }
      })
    

    return (
        <div className="p-2">
      <table style={{width:"100%"}}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} style={{color:"blue"}}>
              {headerGroup.headers.map((header, index) => (
                <th key={header.id} >
                  <p onClick={header.column.getToggleSortingHandler()}>{index}</p>
                  <span style={{float:"left", paddingLeft:"20px"}}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="tableRow">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} style={{padding:"20px"}}>
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