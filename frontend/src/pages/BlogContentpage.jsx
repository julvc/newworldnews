import React from 'react'
import { Navbar, Footer , BlogContent} from '../components'

const BlogContentpage = (blogs) => {

    return (
        <div>
            <Navbar />
            <BlogContent blogs={blogs}/>
            <Footer />
        </div>
    )
}

export default BlogContentpage