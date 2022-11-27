import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ img, nama, jenis, bidang, alamat, url }) {
   return (
      <>
         <div className="w-[23%] border border-black p-3 mb-8 rounded bg-light">
            <img src={img} alt="sayuran" className="w-full inline-block" />

            <div className="mt-3">
               <h3 className="text-base font-bold uppercase text-black">{nama}</h3>
               <p className="text-base capitalize text-black">Jenis: {jenis}</p>
               <p className="text-base capitalize text-black">Bidang: {bidang}</p>
               <p className="text-base capitalize text-black">Alamat: {alamat}</p>
            </div>

            <Link to={url} className="text-sm font-medium uppercase py-2 px-4 rounded mt-5 inline-block bg-gray text-white">selengkapnya</Link>
         </div>
      </>
   )
}

export default Cards;