import React from 'react'
import TopBar from './components/topbar'
import { IoLogoYoutube, IoLogoTiktok, IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import './App.css'
import Card from './components/card'

const App = () => {
  return (
    <div className='overflow-x-hidden w-full h-screen bg-[#c8ecee]'>
      <header className='p-5 bg-[#a8ccce]'>
        <TopBar />
      </header>
      <main className='p-3 w-full h-3/5 bg-[#a8ccce] shadow-lg flex items-center justify-center flex-col'>
        <h1 id='icon' className='text-5xl md:text-7xl'>MOSS<span className='text-[#04d400]'>ICE</span></h1>
        <p className='text-2xl tracking-[3px] md:tracking-[9px]'>Fresh Drinks And Soft Jelly</p>
      </main>
      <section className='w-full mt-10 p-5 flex flex-col items-center gap-5'>
        <Card img={'./ori.jpg'} colour={'bg-[#44BE89]'} title={'Greenori'} desc={'Varian ini dibuat dengan mengkombinasikan ekstrak daun suji, daun pandan dan susu ditambah dengan lumut yang dibuat dari nutrijel dan kedua ekstrak daun membuat minuman ini menyegarkan dan memberi kesan daun suji yang dominan.'} />

        <Card img={'./biru.jpg'} colour={'bg-[#65CCA9]'} title={'Blue Orcid'} desc={'Varian ini dibuat dengan mengkombinasikan ekstrak bunga telang, pewarna makanan berwarna biru dan juga susu ditambah dengan lumut yang dibuat dari nutrijel plain dan ekstrak bunga telang menghadirkan sensasi rasa yang lembut namun tidak dominan pada bunga telang.'} />

        <Card img={'./merah.jpg'} colour={'bg-[#EB6F59]'} title={'Red Dragon'} desc={'Varian ini dibuat dari ekstrak kulit buah naga dan nutrijjel plain. Jelly varian ini seperti 2 varian lainnya dibuat dengan nutrijel plain dan ekstrak kulit buah naga yang memiliki rasa mirip dengan daging buahnya serta memberikan aroma yang dominan'} />
        
      </section>
      <footer id='contact-us' className='w-full flex justify-between bg-[#a8ccce] p-4'>
        <h1 id='icon' className='text-xl text-[#737373]'>MOSSICE</h1>
        <div className='flex gap-4 text-[#737373] text-2xl'>
          <a href='https://youtu.be/dQw4w9WgXcQ?si=kB2hg6NgaFvmvzHK'>
            <IoLogoWhatsapp id='icon-footer' />
          </a>
          <a href='https://youtu.be/dQw4w9WgXcQ?si=kB2hg6NgaFvmvzHK'>
            <IoLogoTiktok id='icon-footer' />
          </a>
          <a href='https://youtu.be/dQw4w9WgXcQ?si=kB2hg6NgaFvmvzHK'>
            <FaInstagram id='icon-footer' />
          </a>
          <a href='https://youtu.be/dQw4w9WgXcQ?si=kB2hg6NgaFvmvzHK'>
            <IoLogoYoutube id='icon-footer' />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App