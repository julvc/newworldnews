import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Blogs from '../components/Blogs';

const BlogContent = ({ blogs }) => {
    const { category, id } = useParams();
    console.log("ID from params:", id);

    if (id) {
        // Buscar el blog por `documentId`
        const blog = blogs?.data?.find(blog => blog.id === parseInt(id));
        // const blog = blogs?.data?.find(blog => blog.documentId === id);

        if (!blog) {
            return (
                <div className="w-full pb-10 bg-[#f9f9f9]">
                    <div className="max-w-[1240px] mx-auto text-center py-20">
                        <h1 className="text-3xl font-bold text-red-500">No se encontró el blog</h1>
                        <p>El ID "{id}" no coincide con ningún blog existente.</p>
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
            <div className="w-full py-12 bg-[#f9f9f9] pt-20"> {/* Aumentado a pt-20 */}
                <div className='max-w-[1240px] mx-auto'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
                        <div className='cols-span-2 gap-x-8 gap-y-8'>
                            {/* <img className="h-56 w-full object-cover" src={getCoverImageUrl(blog.coverImg)} alt={blog.coverImg?.[0]?.alternativeText || "Default alt text"} /> */}
                            {/* <img src={getCoverImageUrl(blog.coverImg)} alt="Imagen de portada" /> */}
                            <img src={getCoverImageUrl(blog.coverImg)} alt="texto" />
                            <img src='http://localhost:1337${coverImg[0].url}'></img>
                            {/* <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={getAuthorImageUrl(blog.authorImg)} alt={blog.authorName} /> */}

                            <h1 className='font-bold text-2xl my-1 pt-5'>{blog.blogTitle}</h1>
                            <h3 className='font-bold text-2xl my-1 pt-5'>{blog.blogDescription}</h3>
                            <div className='pt-5'><ReactMarkdown>{blog.blogContentOne || "No content available"}</ReactMarkdown></div>
                            <div className='pt-5'><p>{blog.blogContentTwo || "No additional content"}</p></div>
                            <div className='pt-5'>
                                <p>{blog.coverVideoField?.url || "No video available"}</p>
                            </div>
                        </div>
                        <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]'>
                            <div>
                                <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={getAuthorImageUrl(blog.authorImg)} alt='' />
                                <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.authorName}</h1>
                                <p className='text-center text-gray-900 font-medium'>{blog.authorDesc || "No description available"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



    if (category) {
        // Filtrar blogs por categoría
        const filteredBlogs = blogs?.data?.filter(blog => blog.category === category);

        if (!filteredBlogs?.length) {
            return (
                <div className="w-full pb-10 bg-[#f9f9f9]">
                    <div className="max-w-[1240px] mx-auto text-center py-20">
                        <h1 className="text-3xl font-bold text-red-500">No se encontraron blogs</h1>
                        <p>La categoría "{category}" no coincide con ningún blog existente.</p>
                    </div>
                </div>
            );
        }

        // Reutilizar el componente `Blogs` para mostrar blogs filtrados
        return <Blogs blogs={{ data: filteredBlogs }} />;
    }

    return null;
};

export default BlogContent;
