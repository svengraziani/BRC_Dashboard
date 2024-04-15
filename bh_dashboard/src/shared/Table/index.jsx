import './Table.scss';
import '../../css/sass/global.scss';
import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import Image from 'next/image';
import imgSearch from '../../Assets/images/icon-search.svg';
import imgSynch from '../../Assets/images/icon-synch.svg';
import imgPlus from '../../Assets/images/icon-plus.svg';
import imgRepair from '../../Assets/images/icon-inbetrieb.svg';
import { BsFunnel } from 'react-icons/bs';
import { MdNavigateNext } from 'react-icons/md';
import { FaSortAlphaDown } from 'react-icons/fa';

function DashboardTable() {
  return (
    <div className='dashboard-table'>
      <Row className='filter-wrap'>
        <Col md="6">
        <Form.Group className="form-block block">
        <Form.Control type="search" placeholder="Suche"></Form.Control>
        <i className='icon-search'>
            <Image src={imgSearch} alt='Icon' />
        </i>
        </Form.Group>
        </Col>
        <Col md="6">
            <Row>
                <Col md="8">
                    <Form.Group className="form-block">
                    <i className='icon-filter'><BsFunnel size={10} /></i>
                        <Form.Select aria-label="Dropdown">
                          <option>Status Filter</option>
                          <option value="India">India</option>
                          <option value="Russia">Russia</option>
                          <option value="Brazil">Brazil</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md="2">
                    <i className='icon-synch'>
                    <Image src={imgSynch} alt='Icon' />
                    </i>
                </Col>
                <Col md="2">
                    <Button>
                        <i className='icon-plus'>
                            <Image src={imgPlus} alt='Icon' />
                        </i>
                    </Button>
                </Col>
            </Row>
        </Col>
      </Row>
      <table className='table-wrap'>
    <thead>
        <tr>
            <th>Alias-Name <i className='icon-sort'><FaSortAlphaDown /></i></th>
            <th>Anlagen-ID <i className='icon-sort'><FaSortAlphaDown /></i></th>
            <th>Name <i className='icon-sort'><FaSortAlphaDown /></i></th>
            <th>Name Eigentümer <i className='icon-sort'><FaSortAlphaDown /></i></th>
            <th>Handwerksbetrieb <i className='icon-sort'><FaSortAlphaDown /></i></th>
            <th>Adresse der Anlage <i className='icon-sort'><FaSortAlphaDown /></i></th>
            <th>Aktionen <i className='icon-sort'><FaSortAlphaDown /></i></th>
        </tr>
        <tr>
            <th colSpan={7} height={10}></th>
        </tr>
    </thead>
    <tbody>
        <tr className='error'>
            <td>Satteldachanlage C</td>
            <td>45465</td>
            <td>Anlage C</td>
            <td>Karina Drehmann</td>
            <td>Handwerksbetrieb Solar GmbH</td>
            <td>Beispielstraße 13, 53111 Bonn</td>
            <td></td>
            <td><Button type='button' variant='details'>Details <i className='icon-back'>
                <MdNavigateNext size={20} />    
            </i></Button></td>
        </tr>
        <tr className='empty-tr'>
            <td colSpan={7} height={12} className='empty-td'></td>
        </tr>
        <tr className='warning'>
            <td>Satteldachanlage D</td>
            <td>45465</td>
            <td>Anlage D</td>
            <td>Lukas Brunner</td>
            <td>Handwerksbetrieb Solar GmbH</td>
            <td>Beispielstraße 13, 53111 Bonn</td>
            <td></td>
            <td><Button type='button' variant='details'>Details <i className='icon-back'>
                <MdNavigateNext size={20} />    
            </i></Button></td>
        </tr>
        <tr className='empty-tr'>
            <td colSpan={7} height={12} className='empty-td'></td>
        </tr>
        <tr>
            <td>Satteldachanlage B</td>
            <td>45465</td>
            <td>Anlage B</td>
            <td>Mario Meier</td>
            <td>Handwerksbetrieb Solar GmbH</td>
            <td>Beispielstraße 13, 53111 Bonn</td>
            <td><i className='icon-repair'><Image src={imgRepair} alt='Icon' /></i></td>
            <td><Button type='button' variant='details'>Details <i className='icon-back'>
                <MdNavigateNext size={20} />    
            </i></Button></td>
        </tr>
        <tr className='empty-tr'>
            <td colSpan={7} height={12} className='empty-td'></td>
        </tr>
        <tr>
            <td>Satteldachanlage A</td>
            <td>45465</td>
            <td>Anlage A</td>
            <td>Max Mustermann</td>
            <td>Handwerksbetrieb Solar GmbH</td>
            <td>Beispielstraße 13, 53111 Bonn</td>
            <td></td>
            <td><Button type='button' variant='details'>Details <i className='icon-back'>
                <MdNavigateNext size={20} />    
            </i></Button></td>
        </tr>
        <tr className='empty-tr'>
            <td colSpan={7} height={12} className='empty-td'></td>
        </tr>
        <tr>
            <td>Satteldachanlage E</td>
            <td>45465</td>
            <td>Anlage E</td>
            <td>Max Mustermann</td>
            <td>Handwerksbetrieb Solar GmbH</td>
            <td>Beispielstraße 13, 53111 Bonn</td>
            <td></td>
            <td><Button type='button' variant='details'>Details <i className='icon-back'>
                <MdNavigateNext size={20} />    
            </i></Button></td>
        </tr>
        <tr className='empty-tr'>
            <td colSpan={7} height={12} className='empty-td'></td>
        </tr>
        <tr>
            <td>Satteldachanlage F</td>
            <td>45465</td>
            <td>Anlage F</td>
            <td>Thomas Kreuzer</td>
            <td>Handwerksbetrieb Solar GmbH</td>
            <td>Beispielstraße 13, 53111 Bonn</td>
            <td></td>
            <td><Button type='button' variant='details'>Details <i className='icon-back'>
                <MdNavigateNext size={20} />    
            </i></Button></td>
        </tr>
    </tbody>
 </table>
    </div>
  )
}

export default DashboardTable
