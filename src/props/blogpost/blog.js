import { useState } from "react";
import Post from "./post";

const Blog = () => {
    return(
    <>
    <Post title={"Test1"} author={"Arthur"} content={"con-tent2"}/>
    <Post title={"test2"} author={"ArthurRD"} content={"con-tent1"}/>
    <Post title={"test23"} author={"ArthurRD2"} content={"con-tent3"}/>
    </>
    )
}

export default Blog;