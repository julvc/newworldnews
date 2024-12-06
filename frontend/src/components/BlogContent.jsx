import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogContent = ({ blogs }) => {
    console.log(blogs);
    const { id } = useParams();
    console.log("Blog ID from URL:", id);  // Verifica el ID de la URL
    console.log("Blogs:", blogs);  // Muestra toda la estructura de blogs

    let blog = null;
    
    // Verifica si 'blogs' tiene la propiedad 'blogs' y 'data' correctamente
    if (blogs && blogs.blogs && blogs.blogs.data) {
        console.log("Blogs data:", blogs.blogs.data);  // Verifica el contenido de 'data'
        const filteredBlogs = blogs.blogs.data.filter(blog => blog.id === parseInt(id, 10));
        console.log("Filtered Blogs:", filteredBlogs);
        blog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
    }

    if (!blog) {
        return (
            <div className="w-full pb-10 bg-[#f9f9f9]">
                <div className="max-w-[1240px] mx-auto text-center py-20">
                    <h1 className="text-3xl font-bold text-red-500">Blog no encontrado</h1>
                    <p>El blog que estás buscando no existe o ha sido eliminado.</p>
                </div>
            </div>
        );
    }

    const getCoverImageUrl = (coverImg) => {
        // Asegúrate de acceder al campo correcto (como coverImg[0].url si es un array de objetos)
        if (coverImg && coverImg[0] && coverImg[0].url) {
            return `http://localhost:1337${coverImg[0].url}`;
        }
        return "https://via.placeholder.com/300"; // Imagen por defecto
    };
    
    const getAuthorImageUrl = (authorImg) => {
        // Si authorImg es un objeto, accede a su propiedad url
        return authorImg && authorImg.url ? `http://localhost:1337${authorImg.url}` : "https://via.placeholder.com/100";
    };

    return (
        <div className='w-full pb-10 bg-[#f9f9f9]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
                    <div className='cols-span-2 gap-x-8 gap-y-8'>
                        <img className="h-56 w-full object-cover" src={getCoverImageUrl(blog.coverImg)} alt={blog.coverImg?.[0]?.alternativeText || "Default alt text"} />
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


export default BlogContent