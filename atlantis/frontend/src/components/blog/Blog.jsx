import React from "react";
import PagesTop from "../pagesTop/PagesTop";
import BlogButtons from "./blogButtons/BlogButtons";
import BlogContent from "./blogContent/BlogContent";
import { useEffect } from "react";
import './Blog.scss'

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blog = false

    return (
        <div className="blog">
            {blog ? 
            <div className="blog__content">
                <PagesTop name={'блог'} />
                <BlogButtons/>
                <BlogContent/>
            </div>
            :
            <div className="ups">
                <h2 className="ups__title">Наразі блог недоступний, зайдіть будь ласка пізніше.</h2>
                <img className="ups__img" src="./img/ups.png" alt="ups" />
            </div>
            }
        </div>
    )
}

export default Blog;