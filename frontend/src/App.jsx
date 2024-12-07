import { Routes, Route } from "react-router-dom";
import { Homepage, BlogContentpage } from "./pages";
import useFetch from './hooks/useFetch';
import React from "react";

export default function App() {
    let { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*');
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage blogs={data ? data : ""} />}></Route>
                {/* <Route path="/blog/:id" element={<BlogContentpage blogs={data ? data : ""} />}></Route> */}
                {/* <Route path="/category/:category" element={<BlogContentpage blogs={data ? data : ""} />} /> */}
                <Route path="/blog/:id" element={<BlogContentpage blogs={data ? data : ""} />} />
                <Route path="/category/:category" element={<BlogContentpage blogs={data ? data : ""} />} />
            </Routes>
        </div>
    );
}