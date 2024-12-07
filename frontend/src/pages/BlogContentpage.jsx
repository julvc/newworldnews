import React from 'react';
import { useParams } from 'react-router-dom'; // Para capturar la categoría desde la URL
import { Navbar, Footer, BlogContent } from '../components';

const BlogContentpage = ({ blogs }) => {
    const { category } = useParams(); // Obtener la categoría desde la URL

    // Filtrar blogs según la categoría
    const filteredBlogs = blogs?.blogs?.data?.filter(blog => {
        return blog.attributes.category === category;
    });

    return (
        <div>
            <Navbar />
            {filteredBlogs && filteredBlogs.length > 0 ? (
                <BlogContent blogs={filteredBlogs} />
            ) : (
                <div className="w-full text-center py-20">
                    <h1 className="text-3xl font-bold text-red-500">No hay blogs en esta categoría</h1>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default BlogContentpage;
