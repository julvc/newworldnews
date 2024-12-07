import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogContent = ({ blogs }) => {
    const { id, category } = useParams(); // Obtener el ID y categoría desde la URL

    // Filtrar los blogs por categoría si se está visitando una categoría
    const filteredBlogs = category
        ? blogs?.blogs?.data?.filter(blog => blog.attributes.category === category)
        : blogs?.blogs?.data;

    // Buscar el blog correspondiente al ID
    const blog = filteredBlogs?.find(blog => blog.id === parseInt(id, 10));

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

    // Obtener la URL de la imagen de portada
    const getCoverImageUrl = (coverImg) => {
        if (coverImg && coverImg[0]?.url) {
            return `http://localhost:1337${coverImg[0].url}`;
        }
        return "https://via.placeholder.com/300"; // Imagen por defecto
    };

    // Obtener la URL de la imagen del autor
    const getAuthorImageUrl = (authorImg) => {
        return authorImg?.url ? `http://localhost:1337${authorImg.url}` : "https://via.placeholder.com/100";
    };

    const attributes = blog.attributes; // Simplificar el acceso a atributos del blog

    return (
        <div className="w-full pb-10 bg-[#f9f9f9]">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
                    <div className="col-span-2">
                        <img
                            className="h-56 w-full object-cover"
                            src={getCoverImageUrl(attributes.coverImg)}
                            alt={attributes.coverImg?.[0]?.alternativeText || "Imagen de portada"}
                        />
                        <h1 className="font-bold text-2xl my-1 pt-5">{attributes.blogTitle}</h1>
                        <h3 className="font-medium text-xl my-1 pt-3 text-gray-700">{attributes.blogDescription}</h3>
                        <div className="pt-5">
                            <ReactMarkdown>{attributes.blogContentOne || "No hay contenido disponible."}</ReactMarkdown>
                        </div>
                        <div className="pt-5">
                            <p>{attributes.blogContentTwo || ""}</p>
                        </div>
                        {attributes.coverVideoField?.url && (
                            <div className="pt-5">
                                <a
                                    href={attributes.coverVideoField.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    Ver video
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]">
                        <div>
                            <img
                                className="p-2 w-32 h-32 rounded-full mx-auto object-cover"
                                src={getAuthorImageUrl(attributes.authorImg)}
                                alt="Imagen del autor"
                            />
                            <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">{attributes.authorName}</h1>
                            <p className="text-center text-gray-900 font-medium">
                                {attributes.authorDesc || "El autor no proporcionó descripción."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogContent;