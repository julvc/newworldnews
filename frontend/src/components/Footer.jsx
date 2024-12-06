import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className='w-full bg-[#02044A] text-gray-300 py-8 px-2'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                <div>
                    <h6 className='font-bold uppercase py-2'>Texto a modificar</h6>
                    <ol>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                    </ol>
                </div>
                <div>
                    <h6 className='font-bold uppercase py-2'>Texto a modificar</h6>
                    <ol>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                    </ol>
                </div>
                <div>
                    <h6 className='font-bold uppercase py-2'>Texto a modificar</h6>
                    <ol>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                    </ol>
                </div>
                <div>
                    <h6 className='font-bold uppercase py-2'>Texto a modificar</h6>
                    <ol>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                        <li className='py-1'>Texto a modificar</li>
                    </ol>
                </div>

                <div className='col-span-2 pt-2 md:pt-2'>
                    <p className='font-bold uppercase'>Suscríbete a nuestras Noticias</p>
                    <p className='py-4'>
                        Obtendrás las últimas noticias artículos y recursos en tu correo electrónico cada semana.
                    </p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 rounded-md  mb-2' type="email" placeholder="Ingresa tu correo electrónico"/>
                        <button className='p-2 mb-2 bg-[#00B86E] '>Suscribirse</button>

                    </form>

                </div>

            </div>

            <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center'>
            <p>2024 MP XVO, LLC. Todos los derechos reservados.</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl gap-2'>
                <FaFacebook />
                <FaGithub />
                <FaInstagram />
                <FaTwitch />
                <FaTwitter />

            </div>

        </div>
        </div>
    )
}

export default Footer