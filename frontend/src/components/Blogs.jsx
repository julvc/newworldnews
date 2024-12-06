import React from "react";
import { Link } from "react-router-dom";


const Blogs = ({ blogs }) => {

    const blogs1 = [
        {
            'id': 1,
            'title': 'News 1',
            'desc': 'Lorem ipsum dolor sit',
            'coverImg': 'https://www.mundodeportivo.com/alfabeta/hero/2020/01/anime.jpg?width=768&aspect_ratio=16:9&format=nowebp',
            'content': 'Intro to Web3 Day 1:',
            'authorName': 'John Doe',
            'authorImg': 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc': 'Web Developer'
        },
        {
            'id': 2,
            'title': 'News 1',
            'desc': 'Lorem ipsum dolor sit',
            'coverImg': 'https://www.mundodeportivo.com/alfabeta/hero/2020/01/anime.jpg?width=768&aspect_ratio=16:9&format=nowebp',
            'content': 'Intro to Web3 Day 1:',
            'authorName': 'John Doe',
            'authorImg': 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc': 'Web Developer'
        },
        {
            'id': 3,
            'title': 'News 1',
            'desc': 'Lorem ipsum dolor sit',
            'coverImg': 'https://www.mundodeportivo.com/alfabeta/hero/2020/01/anime.jpg?width=768&aspect_ratio=16:9&format=nowebp',
            'content': 'Intro to Web3 Day 1:',
            'authorName': 'John Doe',
            'authorImg': 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc': 'Web Developer'
        },
        {
            'id': 4,
            'title': 'News 1',
            'desc': 'Lorem ipsum dolor sit',
            'coverImg': 'https://www.mundodeportivo.com/alfabeta/hero/2020/01/anime.jpg?width=768&aspect_ratio=16:9&format=nowebp',
            'content': 'Intro to Web3 Day 1:',
            'authorName': 'John Doe',
            'authorImg': 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'authorDesc': 'Web Developer'
        },
    ]

    const getCoverImageUrl = (coverImg) => {
        return coverImg?.[0]?.url ? `http://localhost:1337${coverImg[0].url}` : "https://via.placeholder.com/300";
    };

    return (
        <div className="w-full bg-[$f9f9f9] py-12">
            <div className="max-w-screen-2xl mx-auto px-4">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                    {blogs.data.map((blog) => (
                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    className="h-56 w-full object-cover"
                                    src={getCoverImageUrl(blog.coverImg)}
                                    alt={
                                        blog.coverImg?.[0]?.alternativeText ||
                                        "Default alt text"
                                    }
                                />
                                <div className="p-6">
                                    <h3 className="font-bold text-2xl mb-2">
                                        {blog.blogTitle}
                                    </h3>
                                    <p className="text-gray-500 text-base">
                                        {blog.blogDescription}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
    // return (
    //     <div className="w-full bg-[$f9f9f9] py-[50px]">
    //         <div className="max-w-screen-2xl mx-auto px-4">
    //             <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">

    //                 {blogs.data.map((blog) =>
    //                     <Link key={blog.id} to={`/blog/${blog.id}`}>
    //                         <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
    //                             <img className="h-56 w-full object-cover" src={getCoverImageUrl(blog.coverImg)} alt={blog.coverImg?.[0]?.alternativeText || "Default alt text"} />

    //                             <div className="p-8 ">
    //                                 <h3 className="font-bold text-2xl my-1">{blog.blogTitle}</h3>
    //                                 <p className="text-gray-500 text-xl">{blog.blogDescription}</p>
    //                             </div>
    //                         </div>
    //                     </Link>

    //                 )}
    //             </div>
    //         </div>

    //     </div>
    // )
};

export default Blogs