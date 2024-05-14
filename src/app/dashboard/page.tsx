"use client";

import './dashboard.scss';
import '../../css/sass/global.scss';
import Sidebar from "../../shared/Sidebar";
import Image from "next/image";
import imgAnlagen from '../../Assets/images/icon-anlagen.svg';
import imgRepair from '../../Assets/images/icon-inbetrieb.svg';
import imgError from '../../Assets/images/icon-error.svg';
import imgWarning from '../../Assets/images/icon-warning.svg';
import Header from '../../shared/Header';
import { Button, Col, Row } from 'react-bootstrap';
import ReactTable from '../../shared/NewTable';
import { createColumnHelper } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { MdNavigateNext } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { apiCaller } from '@/services/apiCaller';
// import { setFacilityData } from '@/redux/slice/facilitySlice';

export default function Dashboard() {
    // const statusFilter = ["Warnung", "Felher", "Offene Inbetriebnahme"]
    const router = useRouter();

    const dispatch=useDispatch()
    const reduxStore = useSelector(state => state)
    // const facilityData=useSelector((state:any)=>state.facility)
    console.log(reduxStore,'redux store');

    const [selectData,setSelectData]=useState()
    
    const [dashboardData, setDashboardData]=useState()
    console.log("dashboardData1111",dashboardData)

    const token =localStorage.getItem("token")

    const [searchKey,setSearchKey]=useState("")

    const [statusFilter,setStatusFilter]=useState( [
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

    useEffect(()=>{

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
    
      apiCaller.get("api/v1/facility/",config).then((response)=>{
        setDashboardData(response?.data?.results)
      })  .catch((error) => {
        console.log("error",error)

      })
    },[])
    

    const defaultData = [
        {
            aliasName: "Satteldachanlage C",
            anlagenId: "45465",
            name: "Anlage C",
            nameEigentumer: "Karina Drehmann",
            handwerk: "Handwerksbetrieb Solar GmbH",
            adsressder: "Beispielstraße 13, 53111 Bonn",
            aktionen: ""
        },
        {
            aliasName: "Satteldachanlage D",
            anlagenId: "345345",
            name: "Anlage D",
            nameEigentumer: "Lukas Brunner",
            handwerk: "Handwerksbetrieb Solar GmbH",
            adsressder: "Beispielstraße 15, 53111 Bonn",
            aktionen: ""
        },
        {
            aliasName: "Satteldachanlage B",
            anlagenId: "654124",
            name: "Anlage B",
            nameEigentumer: "Mario Meier",
            handwerk: "Handwerksbetrieb Solar GmbH",
            adsressder: "Beispielstraße 22, 53111 Bonn",
            aktionen: [<i className='icon-repair' key={'test'} onClick={() => router.push("/dashboard/create")}><Image key={'img'} src={imgRepair} alt='Icon' /></i>]
        },
        {
            aliasName: "Satteldachanlage A",
            anlagenId: "458741",
            name: "Anlage A",
            nameEigentumer: "Max Mustermann",
            handwerk: "Handwerksbetrieb Solar GmbH",
            adsressder: "Beispielstraße 2, 53111 Bonn",
            aktionen: ""
        },
        {
            aliasName: "Satteldachanlage E",
            anlagenId: "485962",
            name: "Anlage E",
            nameEigentumer: "Max Mustermann",
            handwerk: "Handwerksbetrieb Solar GmbH",
            adsressder: "Beispielstraße 205, 53111 Bonn",
            aktionen: ""
        },
    ]

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
    columnHelper.accessor('nameEigentumer', {
      cell: info => info.getValue(),
      header: "Name Eigentümer"
    }),
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
    columnHelper.accessor('Aktionen', {
      cell: info => info.getValue(),
      header: "Aktionen"
    }),
    columnHelper.accessor('aliasName', {
      cell: props => <Button variant='details' style={{cursor:"pointer"}} onClick={()=> router.push("/dashboard/details/xyz")}>Details<i className='icon-next'><MdNavigateNext size={18} /></i> </Button>,
      header: ""
    }),
  ]


  // search
  const searchListHandler = (e:any) => {
    const searchValue = e.target.value;
    setSearchKey(e.target.value)

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    if (searchValue.trim() !== '') {
      apiCaller.get(`api/v1/facility/?search=${searchValue}`, config)
          .then((response) => {
              setDashboardData(response?.data?.results);
          })
          .catch((error) => {
              console.log("Error:", error);
          });
  } else {
      apiCaller.get("api/v1/facility/", config)
          .then((response) => {
              setDashboardData(response?.data?.results);
          })
          .catch((error) => {
              console.log("Error:", error);
          });
  }

  const selectedStatus = statusFilter
        .filter((item: any) => item.isChecked)
        .map((item: any) => item.name)
        .join(',');

        if(selectedStatus && searchValue.trim() === ''){
          apiCaller.get(`api/v1/facility/?status=${selectedStatus}`, config)
          .then((response: any) => {
              setDashboardData(response?.results);
          })
          .catch((error) => {
              console.log("Error:", error);
          });
        }

  }



//   useEffect(()=>{
//     const selectedStatus = statusFilter
//     .filter((item: any) => item.isChecked)
//     .map((item: any) => item.name)
//     .join(',');

// if(searchKey && selectedStatus ){
//   const config = {
//     headers: {
//         Authorization: `Bearer ${token}`
//     }
// };

// apiCaller.get(`api/v1/facility/?search=${searchKey}&status=${selectedStatus}`, config)
//     .then((response) => {
//         console.log("Response:", response);

//         setDashboardData(response?.results);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });
// }
//   },[statusFilter,searchKey])


  // FIlter
  const selectListHandler = (statusFilter: any) => {
    // Extract selectedStatus from the statusFilter
    const selectedStatus = statusFilter
        .filter((item: any) => item.isChecked)
        .map((item: any) => item.name)
        .join(',');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    if (selectedStatus && searchKey) {
        apiCaller.get(`api/v1/facility/?search=${searchKey}&status=${selectedStatus}`, config)
            .then((response: any) => {
                console.log("Response:", response);
                setDashboardData(response?.results);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    } else if (selectedStatus) {
        apiCaller.get(`api/v1/facility/?status=${selectedStatus}`, config)
            .then((response: any) => {
                console.log("Response:", response);
                setDashboardData(response?.results);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    } else if (searchKey) {
        apiCaller.get(`api/v1/facility/?search=${searchKey}`, config)
            .then((response: any) => {
                console.log("Response:", response);
                setDashboardData(response?.results);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    } else {
        apiCaller.get(`api/v1/facility/`, config)
            .then((response: any) => {
                console.log("Response:1111111", response);
                setDashboardData(response?.data?.results);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }
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
                selectListHandler={selectListHandler}
                 data={dashboardData ? dashboardData : []} 
                 columns={columns} isFilters={false} 
                 isStatusFilter={true} isCreation={true} 
                 isFiltersWrap={true} 
                 statusFilter={statusFilter}
                 setStatusFilter={setStatusFilter}
                 setDashboardData={setDashboardData}
                 setSelectData={setSelectData}
                 selectData={selectData} 
                 searchListHandler={searchListHandler}/>
                {/* <DashboardTable statusFilter={statusFilter} filterName="Status Filter"/> */}
                <div className="filter-wrap"></div>
            </div>
        </section>
        </>
    )
}