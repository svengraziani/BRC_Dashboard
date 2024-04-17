"use client";

import { useParams } from 'next/navigation';
import './details.scss';
import Header from '../../../../shared/Header';

function DashboardDetails(){
    const {id}= useParams()

    return (
        <section className='user-details'>
            <Header />
            <div></div>
        </section>
    )
}

export default DashboardDetails