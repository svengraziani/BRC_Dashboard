import './Table.scss';
import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import Image from 'next/image';
import imgSearch from '../../Assets/images/icon-search.svg';
import imgSynch from '../../Assets/images/icon-synch.svg';
import imgPlus from '../../Assets/images/icon-plus.svg';
import imgRepair from '../../Assets/images/icon-inbetrieb.svg';
import imgError from '../../Assets/images/icon-error.svg';
import imgWarning from '../../Assets/images/icon-warning.svg';
import { BsFunnel } from 'react-icons/bs';
import { MdNavigateNext } from 'react-icons/md';
import { FaSortAlphaDown } from 'react-icons/fa';
import SelectBox from '../SelectBox';
import { useRouter } from 'next/navigation';

function DashboardTable({statusFilter, filterName}) {
    const router = useRouter();

  return (
    <div className='dashboard-table'>
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
            <Row>
                <Col md="8">
                    {statusFilter && (
                        <SelectBox statusFilter={statusFilter} isIconVisible={true} filterName={filterName} isSearchable={false}/>
                    )}
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
      <Row className='filter-secondary'>
        <Col md="6">
        <Row>
            <Col md="5">
                <SelectBox filterName={"Alias-Name Filter"} isIconVisible={true} statusFilter={["Satteldachanlage C","Satteldachanlage D","Satteldachanlage F"]} isSearchable={true} />
            </Col>
        <Col md="3">
        <SelectBox filterName={"Anlagen-ID"} isIconVisible={false} statusFilter={["987","123","754"]} isSearchable={true} />
        </Col>
        <Col md="4">
        <SelectBox filterName={"Gateway Filter"} isIconVisible={false} statusFilter={["67890","23244","67891"]} isSearchable={true} />
        </Col>
        </Row>
        </Col>
        <Col md="6">
        <Row>
        <Col md="4">
        <SelectBox filterName={"String"} isIconVisible={false} statusFilter={["Warnung","Felher"]} isSearchable={false} />
        </Col>
        <Col md="4">
        <SelectBox filterName={"Optimierer"} isIconVisible={false} statusFilter={["Warnung","Felher"]} isSearchable={false} />
        </Col>
        <Col md="4">
        <SelectBox filterName={"Status Filter"} isIconVisible={false} statusFilter={["Warnung","Felher"]} isSearchable={false} />
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
            <td><i className='icon-error'><Image src={imgError} alt='Icon' /></i>Satteldachanlage C</td>
            <td>45465</td>
            <td>Anlage C</td>
            <td>Karina Drehmann</td>
            <td>Handwerksbetrieb Solar GmbH</td>
            <td>Beispielstraße 13, 53111 Bonn</td>
            <td></td>
            <td><Button type='button' variant='details' onClick={()=> router.push(`/dashboard/details/Anlage C`)}>Details <i className='icon-back'>
                <MdNavigateNext size={20} />    
            </i></Button></td>
        </tr>
        <tr className='empty-tr'>
            <td colSpan={7} height={12} className='empty-td'></td>
        </tr>
        <tr className='warning'>
            <td><i className='icon-warning'><Image src={imgWarning} alt='Icon' /></i>Satteldachanlage D</td>
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
