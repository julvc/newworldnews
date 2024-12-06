import React, { useState } from 'react';
import logo from '../assets/logo.svg'
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)



    return (
        <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg relative'>
            <div className='flex justify-between items-center w-full h-full md:max-w-[1240px]'>
                <div className='flex items-center'>
                    <img src={logo} alt='logo' className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]' />
                </div>
                <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <li>Anime</li>
                        <li>Videojuegos</li>
                        <li>Peliculas</li>
                        <li>Series</li>
                        <li>Tecnologia</li>
                        <li>Reseñas</li>
                    </ul>

                </div>
                <div className='hidden md:flex sm:mr-10 md:mr-10'>
                    <button className='border-none bg-transparent text-black mr-4'>Login</button>
                    <button className='px-8 py-3'>Registro</button>
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    <img src={!toggle?menu:close} alt='menu' className='w-[28px] h-[28px] object-contain mr-10' />
                </div>


            </div>
            <ul className={toggle ? 'absolute bg-white w-full px-8 md:hidden' : 'hidden'}>
                <li>Anime</li>
                <li>Videojuegos</li>
                <li>Peliculas</li>
                <li>Series</li>
                <li>Tecnologia</li>
                <li>Reseñas</li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-black mb-4 py-3'>Login</button>
                    <button className='px-8 py-3'>Registro</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar