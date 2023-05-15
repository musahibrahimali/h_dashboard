import { FaceBook, Twitter } from '@/widgets';
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-950 py-4 px-8 text-gray-400 flex flex-row justify-between items-center'>
      <h1 className='font-bold'>
        DASHBOARD
      </h1>
      <div className="flex flex-row items-center space-x-4 uppercase text-gray-400">
        <li className='list-none text-white'>
          <FaceBook />
        </li>
        <li className='list-none text-white'>
          <Twitter />
        </li>
      </div>
    </div>
  );
}

export default Footer;