import React, { useState } from 'react';
import Tabs from '../Components/Tabs';
import Container from '../Components/Container';
import { Link } from 'react-router-dom';
import Cards from '../Components/Cards';

function Homepages() {
   const [menu, setMenu] = useState(0);
   const listMenu = [
      {
         id: 0,
         jenis: 'All'
      },
      {
         id: 1,
         jenis: 'Mikro'
      },
      {
         id: 2,
         jenis: 'Kecil'
      },
      {
         id: 3,
         jenis: 'Menengah'
      },
   ]
   const datas = [
      {
         'id': 0,
         'img': './images/sayuran.jpg',
         'namaUmkm': 'SAYURAN ORGANIK BANDUNG',
         'jenisUmkm': 'Mikro',
         'bidangUmkm': 'Perdagangan',
         'alamatUmkm': 'Jl.Cisaranten No.72'
      },
      {
         'id': 1,
         'img': './images/kerajinan-tangan.jpg',
         'namaUmkm': 'USAHA KERAJINAN TANGAN',
         'jenisUmkm': 'Kecil',
         'bidangUmkm': 'Perdagangan',
         'alamatUmkm': 'Jl.Laswi No.10'
      },
      {
         'id': 2,
         'img': './images/cemilan.jpg',
         'namaUmkm': 'ANEKA CEMILAN BANDUNG',
         'jenisUmkm': 'Menengah',
         'bidangUmkm': 'Perdagangan',
         'alamatUmkm': 'Jl.Bancey No.72'
      },
      {
         'id': 3,
         'img': './images/kerajinan-batik.jpg',
         'namaUmkm': 'PENGRAJIN KAIN BATIK',
         'jenisUmkm': 'Mikro',
         'bidangUmkm': 'Perdagangan',
         'alamatUmkm': 'Jl.Sarikaso No.90'
      },
      {
         'id': 4,
         'img': './images/sayuran.jpg',
         'namaUmkm': 'SAYURAN ORGANIK BANDUNG',
         'jenisUmkm': 'Mikro',
         'bidangUmkm': 'Perdagangan',
         'alamatUmkm': 'Jl.Cisaranten No.72'
      },
      {
         'id': 5,
         'img': './images/kerajinan-tangan.jpg',
         'namaUmkm': 'USAHA KERAJINAN TANGAN',
         'jenisUmkm': 'Kecil',
         'bidangUmkm': 'Perdagangan',
         'alamatUmkm': 'Jl.Laswi No.10'
      },
      {
         'id': 6,
         'img': './images/cemilan.jpg',
         'namaUmkm': 'ANEKA CEMILAN BANDUNG',
         'jenisUmkm': 'Menengah',
         'bidangUmkm': 'Perdagangan',
         'alamatUmkm': 'Jl.Bancey No.72'
      },
      {
         'id': 7,
         'img': './images/kerajinan-batik.jpg',
         'namaUmkm': 'PENGRAJIN KAIN BATIK',
         'jenisUmkm': 'Mikro',
         'bidangUmkm': 'Perdagangan',
         'alamatUmkm': 'Jl.Sarikaso No.90'
      },
   ]
   const date = new Date().getFullYear();

   return (
      <>
         <Container>
            {/* BANNER HERO */}
            <section className="w-full h-[515px] flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover rounded-md mx-auto text-center" style={{ backgroundImage: 'url(./images/background-banner.jpg)' }}>
               <div className="w-full m-auto">
                  <img src="./images/logo.png" alt="logo" className="inline-block" />
                  <h1 className="w-[60%] mx-auto uppercase font-bold text-4xl text-white mt-7">UMKM (Usaha Mikro Kecil dan Menengah) PEMERINTAH DESA WANGUNSARI</h1>
                  <h5 className="w-full mx-auto uppercase text-2xl text-white mt-2">KEC. SINDANGKERTA KAB. BANDUNG BARAT PROV. JAWA BARAT</h5>
               </div>
            </section>

            {/* TABS MENU */}
            <nav className="w-full h-full flex flex-row justify-between items-center my-10">
               <div className="w-[60%] flex flex-row justify-between items-center gap-x-7">
                  {listMenu?.map((listItem) => {
                     return <Tabs key={listItem.id} variant="solidGray" size="large" className="font-normal" event={() => alert('ok')}>{listItem.jenis}</Tabs>
                  })}
               </div>

               <Link to="/pengajuan-umkm" className="ml-auto inline-block text-xl uppercase font-normal h-10 leading-[40px] px-5 text-white bg-green rounded">ajukan umkm</Link>
            </nav>

            {/* CARDS */}
            <div className="w-full h-full flex flex-wrap justify-between items-start gap-x-7">
               {datas?.map((data, index) => {
                  return <Cards key={index} url="/" nama={data.namaUmkm} img={data.img} jenis={data.jenisUmkm} bidang={data.bidangUmkm} alamat={data.alamatUmkm} />
               })}
            </div>
         </Container>

         <footer className="text-sm text-white bg-black text-center mx-auto py-4">Copyright © {date} Pemerintah Desa Wangunsari Kec.Sindangkerta Kab.Bandung Barat Provinsi Jawa Barat All Right Reserved. </footer>
      </>
   )
}

export default Homepages;