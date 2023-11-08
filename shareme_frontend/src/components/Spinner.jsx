import React from 'react'
import {Audio} from 'react-loader-spinner';
const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full mt-[50px] '>
        <Audio
        // type={circle}
        color="#00BFFH"
        height={60}
        width={180}
        className='m-5'
        
        />
        <p className='text-lg text-center px-2'>{message}</p>
        </div>
  )
} 

export default Spinner