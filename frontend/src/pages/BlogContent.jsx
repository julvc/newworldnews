import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Blogs from '../components/Blogs';

const BlogContent = ({ blogs }) => {
    const { category, id } = useParams();

    if (id) {
        // Buscar el blog por `documentId`
        const blog = blogs?.data?.find(blog => blog.documentId === id);

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

        // Renderizar un blog específico
        return (
            <div className="w-full pb-10 bg-[#f9f9f9]">
                <div className="max-w-[1240px] mx-auto py-20">
                    <h2 className="text-4xl font-bold mb-4">{blog.blogTitle}</h2>
                    <p className="text-gray-500 mb-4">Creado el: {new Date(blog.createdAt).toLocaleDateString()}</p>
                    <div className="prose">
                        <ReactMarkdown>{blog.blogContentOne || "Contenido no disponible"}</ReactMarkdown>
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
