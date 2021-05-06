import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

    const Home = () => {
        const [blogs, setBlogs] = useState(null);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs); 
    }
    useEffect(()=>{
        fetch("http://localhost:8000/blogs")
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setBlogs(data);
        })
    }, []);
    return (  
        <div className="home">
            { blogs && <BlogsList blogs = {blogs} title = "All Blogs!" handleDelete = {handleDelete}></BlogsList>}
        </div>
    );
}
 
export default Home;