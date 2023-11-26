import React from 'react'
import '../App.css'
// import './card.css'

const Card = ({img, desc, title, colour}) => {

    const style = {
        backgroundImage: `url(/images/${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '40px',
    }

    return (
        <div className='container-card w-5/6 rounded-[40px] relative h-[500px] overflow-hidden'>
            <div className='gambar w-full h-full' style={style}></div>
            <div className={`deskripsi absolute bottom-0 left-0 p-4 overflow-y-auto leading-5.3  w-full h-60 ${colour}`}>
                <h1 className='title-ice text-white text-3xl'>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Card