import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Blogs from '../components/Blogs';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch, FaDiscord, FaYoutube } from 'react-icons/fa';


const BlogContent = ({ blogs }) => {
    const { category, title } = useParams();

    if (title) {
        console.log("Title from params:", title);

        const blog = blogs?.data?.find(blog => blog.blogTitle === title.replace(/-/g, ' '));

        if (!blog) {
            return (
                <div className="w-full pb-10 bg-[#f9f9f9]">
                    <div className="max-w-[1600px] mx-auto text-center py-20">
                        <h1 className="text-4xl font-bold text-red-500">No se encontró el blog</h1>
                        <p>El ID "{title}" no coincide con ningún blog existente.</p>
                    </div>
                </div>
            );
        }

        const getCoverImageUrl = (coverImg) => {
            if (coverImg && Array.isArray(coverImg) && coverImg.length > 0 && coverImg[0].url) {
                return `http://localhost:1337${coverImg[0].url}`;
            }
            return "https://via.placeholder.com/300"; // Imagen por defecto
        };

        const getAuthorImageUrl = (authorImg) => {
            if (authorImg && authorImg.url) {
                return `http://localhost:1337${authorImg.url}`;
            }
            return "https://via.placeholder.com/100"; // Imagen por defecto
        };

        return (
            <div className="w-full py-12 bg-[#f9f9f9] pt-20">
                <div className="max-w-[2500px] mx-auto">
                    {/* Contenedor para el blog y el autor */}
                    <div id="blogZone" className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 ss:grid-cols-1 px-6 sm:pt-20 md:mt-0 ss:pt-20 text-black">
                        {/* Contenido del blog */}
                        <div className="w-full">
                            <img src={getCoverImageUrl(blog.coverImg)} alt="Texto" className="w-full h-auto mb-6 rounded-lg shadow-lg" />
                            <h1 className="font-bold text-4xl my-4">{blog.blogTitle}</h1>
                            <h3 className="font-bold text-2xl my-4">{blog.blogDescription}</h3>
                            <div className="pt-4"><ReactMarkdown>{blog.blogContentOne || "No content available"}</ReactMarkdown></div>
                            <div className="pt-4"><p>{blog.blogContentTwo || "No additional content"}</p></div>
                            <div className="pt-4">
                                <p>{blog.coverVideoField?.url || "No video available"}</p>
                            </div>
                        </div>

                        {/* Zona del autor debajo del contenido */}
                        <div id="authorZone" className="w-full bg-white rounded-xl drop-shadow-md py-8 mt-8 lg:mt-8">
                            <div className="flex items-center space-x-6">
                                {/* Imagen del autor a la izquierda con margen */}
                                <img className="p-2 w-40 h-40 rounded-full object-cover ml-4" src={getAuthorImageUrl(blog.authorImg)} alt={blog.authorName} />

                                <div className="text-left">
                                    {/* Nombre con color azul oscuro */}
                                    <h1 className="font-bold text-3xl text-blue-900">{blog.authorName}</h1>

                                    {/* Descripción debajo del nombre */}
                                    <p className="text-gray-900 font-medium">{blog.authorDesc || "No description available"}</p>
                                </div>
                            </div>

                            {/* Redes Sociales alineadas a la derecha */}
                            <div className="flex space-x-6 mt-6 justify-end w-full pr-10">
                                <a href={blog.authorFacebook || "#"} target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 hover:text-blue-800">
                                    <FaFacebook />
                                </a>
                                <a href={blog.authorInstagram || "#"} target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600 hover:text-pink-800">
                                    <FaInstagram />
                                </a>
                                <a href={blog.authorTwitch || "#"} target="_blank" rel="noopener noreferrer" className="text-2xl text-purple-600 hover:text-purple-800">
                                    <FaTwitch />
                                </a>
                                <a href={blog.authorDiscord || "#"} target="_blank" rel="noopener noreferrer" className="text-2xl text-indigo-600 hover:text-indigo-800">
                                    <FaDiscord />
                                </a>
                                {/* Añadir margen derecho al último icono y asegurar margen adicional en el contenedor */}
                                <a href={blog.authorYoutube || "#"} target="_blank" rel="noopener noreferrer" className="text-2xl text-red-600 hover:text-red-800 mr-8">
                                    <FaYoutube />
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            // <div className="w-full py-12 bg-[#f9f9f9] pt-20">
            //     <div className='max-w-[2500px] mx-auto'>
            //         <div id='blogZone' className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 md:gap-x-12 sm:gap-y-12 ss:gap-y-12 px-6 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
            //             <div className='col-span-2'>
            //                 <img src={getCoverImageUrl(blog.coverImg)} alt="texto" className="w-full h-auto mb-6 rounded-lg shadow-lg" />

            //                 <h1 className='font-bold text-4xl my-4'>{blog.blogTitle}</h1>
            //                 <h3 className='font-bold text-2xl my-4'>{blog.blogDescription}</h3>
            //                 <div className='pt-4'><ReactMarkdown>{blog.blogContentOne || "No content available"}</ReactMarkdown></div>
            //                 <div className='pt-4'><p>{blog.blogContentTwo || "No additional content"}</p></div>
            //                 <div className='pt-4'>
            //                     <p>{blog.coverVideoField?.url || "No video available"}</p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div id='authorZone' className="w-full bg-white rounded-xl drop-shadow-md py-8 mt-8 lg:mt-0">
            //             <div>
            //                 <img className="p-2 w-40 h-40 rounded-full mx-auto object-cover" src={getAuthorImageUrl(blog.authorImg)} alt={blog.authorName} />
            //                 <h1 className="font-bold text-3xl text-center text-gray-900 pt-4">{blog.authorName}</h1>
            //                 <p className="text-center text-gray-900 font-medium">{blog.authorDesc || "No description available"}</p>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }

    if (category) {
        const filteredBlogs = blogs?.data?.filter(blog => blog.category === category);

        if (!filteredBlogs?.length) {
            return (
                <div className="w-full pb-10 bg-[#f9f9f9]">
                    <div className="max-w-[2800px] mx-auto text-center py-20">
                        <h1 className="text-4xl font-bold text-red-500">No se encontraron blogs</h1>
                        <p>La categoría "{category}" no coincide con ningún blog existente.</p>
                    </div>
                </div>
            );
        }

        return <Blogs blogs={{ data: filteredBlogs }} />;
    }

    return null;
};

export default BlogContent;
