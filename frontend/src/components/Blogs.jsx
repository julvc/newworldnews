import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = ({ blogs }) => {
    if (!blogs?.data?.length) {
        return (
            <div className="w-full text-center py-20">
                <h1 className="text-3xl font-bold text-gray-500">No hay blogs disponibles</h1>
            </div>
        );
    }

    const getCoverImageUrl = (coverImg) => {
        return coverImg?.[0]?.url ? `http://localhost:1337${coverImg[0].url}` : "https://via.placeholder.com/300";
    };

    return (
        <div className="w-full py-12 bg-[#f9f9f9]">
            <div className="max-w-screen-2xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.data.map(blog => (
                        <div key={blog.documentId} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {/* Cover Image */}
                            <img
                                className="h-56 w-full object-cover rounded-t-xl"
                                src={getCoverImageUrl(blog.coverImg)}
                                alt={blog.coverImg?.[0]?.alternativeText || "Default alt text"}
                            />
                            <div className="p-6">
                                {/* Blog Title */}
                                <h2 className="font-bold text-2xl mb-2">{blog.blogTitle}</h2>
                                {/* Creation Date */}
                                <p className="text-gray-500 text-sm mb-4">
                                    Creado el: {new Date(blog.createdAt).toLocaleDateString()}
                                </p>
                                {/* Blog Content Snippet */}
                                <p className="text-gray-700 mb-4">
                                    {blog.blogContentOne?.slice(0, 150) || "Sin descripción"}...
                                </p>
                                {/* Link to Full Blog */}
                                <Link
                                    to={`/blog/${blog.documentId}`}
                                    className="text-blue-500 hover:underline font-medium"
                                >
                                    Leer más
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;