"use client";

import { Button, Form } from 'react-bootstrap';
import './SelectBox.scss';
import { BsFunnel } from 'react-icons/bs';
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import imgSearch from '../../Assets/images/icon-search.svg';

type Value = {
    id: number | string;
    name: string;
    typeOf: string;
}

function SelectBox({ statusFilter, filterName, isSearchable, isIconVisible, setStatusFilter, queryHandler, queryName, isLogbushFilter, logbuchStatusChange, filterDisabledObject }: any) {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("")
    const [selectedValue, setSelectedValue] = useState<Value>()

    console.log(filterDisabledObject, 'filterDisabledObject');


    const closeHandler = () => {
        setIsVisible(false)

        if (isLogbushFilter) {
            logbuchStatusChange(search, queryName, statusFilter, true, selectedValue)
        } else {
            queryHandler(queryName, statusFilter)
        }
    }

    useEffect(() => {
        if (isLogbushFilter) {
            logbuchStatusChange(search, queryName, statusFilter, isVisible)
        }
    }, [search, isVisible])

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
                <Button variant='dropdown' onClick={() => {
                    if (filterDisabledObject) {                        
                        if (filterDisabledObject.isOptimiererDisabled && queryName === "optimizer") {
                            return;
                        }

                        if (filterDisabledObject.isStringDisabled && queryName === "string") {
                            return;
                        }
                    }

                    setIsVisible(!isVisible)
                }}>
                    {isIconVisible && (
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
                                    <Form.Control type='search' placeholder='Suche' spellCheck="false" onChange={e => setSearch(e.target.value)}></Form.Control>
                                    <i className='icon-search'>
                                        <Image src={imgSearch} alt='Icon' />
                                    </i>
                                </Form.Group>
                            )}

                            {statusFilter.map((item: any, index: any) => (
                                <li key={index}>
                                    <Form.Check
                                        key={index}
                                        onClick={() => {
                                            setSelectedValue({ id: item.id, name: item.name, typeOf: queryName })
                                        }}
                                        type={isLogbushFilter ? "radio" : "checkbox"}
                                        label={item?.name}
                                        name="group1"
                                        id={item.name}
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
