import BlogsList from "./BlogsList";
import useFetch from "./useFetch";

    const Home = () => {
        const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    
    return (  
        <div className="home">
            {error && <p>{error}</p>}
            {isPending && <p>Loading Blogs...</p>}
            { blogs && <BlogsList blogs = {blogs} title = "All Blogs!"></BlogsList>}
        </div>
    );
}
 
export default Home;