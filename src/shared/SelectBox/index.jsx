"use client";

import { Button, Form } from 'react-bootstrap';
import './SelectBox.scss';
import { BsFunnel } from 'react-icons/bs';
import { FaCaretDown } from "react-icons/fa";
import { useState } from 'react';
import Image from 'next/image';
import imgSearch from '../../Assets/images/icon-search.svg';

function SelectBox({statusFilter, filterName, isSearchable, isIconVisible}) {
    const [isVisible, setIsVisible] = useState(false)

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

                    {statusFilter.map((item, index) => (
                        <li key={index}>
                        <Form.Check 
                            key={index}
                            type={"checkbox"}
                            label={item}
                            name="group1"
                            id={item}
                        />
                    </li>
                    ))}
                    
                    {/* <li>
                        <Form.Check
                            type={"checkbox"}
                            label="Fehler"
                            name="group1"
                            id={"fehler"}
                        />
                    </li>
                    <li>
                        <Form.Check
                            type={"checkbox"}
                            label="Offene Inbetriebnahme"
                            name="group1"
                            id={"offeneinbetriebnahme"}
                        />
                    </li> */}
                    <li><Button variant='apply'>Anwenden</Button></li>
                </ul>
            </div>
              )}
          </div>
      </div>
  )
}

export default SelectBox
