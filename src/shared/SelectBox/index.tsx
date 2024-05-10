"use client";

import { Button, Form } from 'react-bootstrap';
import './SelectBox.scss';
import { BsFunnel } from 'react-icons/bs';
import { FaCaretDown } from "react-icons/fa";
import { useState } from 'react';
import Image from 'next/image';
import imgSearch from '../../Assets/images/icon-search.svg';

interface Props {
    statusFilter: string[];
    filterName: string;
    isSearchable: boolean;
    isIconVisible: boolean
}

function SelectBox({statusFilter, filterName, isSearchable, isIconVisible, setStatusFilter, queryHandler, queryName}: any) {
    const [isVisible, setIsVisible] = useState(false)

    const closeHandler = () => {
        setIsVisible(false)
        
        queryHandler(queryName, statusFilter)
    }

    const selectItemHandler = (value: string) => {
        const updatedStatusFilter = statusFilter.map((item: any) => {
            if (item.name === value) {
                return { ...item, isChecked: !item.isChecked };
            }
            return item;
        });

        setStatusFilter(updatedStatusFilter)
    }
    
  return (
      <div className='select-box'>
          <div className="dropdown">
              <Button variant='dropdown' onClick={()=> setIsVisible(!isVisible)}>
              {isIconVisible &&  (
                <i className='icon-filter'><BsFunnel size={10} /></i>
              )}
              
              <span className="label">{filterName}</span>
              <i className="icon-down"><FaCaretDown /></i>
              </Button>
              
              {isVisible && (
                <div className='dropdown-data'>
                <ul>
                {isSearchable && (
                    <Form.Group className='form-block block'>
                    <Form.Control type='search' placeholder='Suche' spellCheck="false"></Form.Control>
                    <i className='icon-search'>
                    <Image src={imgSearch} alt='Icon' />
                    </i>
                </Form.Group>
                )}

                    {statusFilter.map((item: any, index: any) => (
                        <li key={index}>
                        <Form.Check 
                            key={index}
                            type={"checkbox"}
                            label={item?.name}
                            name="group1"
                            id={item.name}
                            checked={item.isChecked}
                            value={item.name}
                            onChange={e => selectItemHandler(e.target.value)}
                        />
                    </li>
                    ))}
                    
                    <li><Button variant='apply' onClick={closeHandler}>Anwenden</Button></li>
                </ul>
            </div>
              )}
          </div>
      </div>
  )
}

export default SelectBox
