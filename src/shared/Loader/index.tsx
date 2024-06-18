import React from 'react';
import './loader.scss';
import loaderImg from '../../Assets/images/spinner.gif';
import Image from 'next/image';

function LoadingIndicator() {
  return (
    <div className='loader'>
      <Image src={loaderImg} alt='Loader' />
    </div>
  )
}

export default LoadingIndicator
