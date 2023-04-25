import React from "react";
import PagesTop from "../pagesTop/PagesTop";
import BlogButtons from "./blogButtons/BlogButtons";
import BlogContent from "./blogContent/BlogContent";
import { useEffect } from "react";

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog">
            <PagesTop name={'блог'} />
            <BlogButtons/>
            <BlogContent/>
        </div>
    )
}

export default Blog;