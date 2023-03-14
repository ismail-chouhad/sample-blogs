import BlogsLists from "../blogs/BlogsLists/BlogsLists";
import useFetch from "../CustomHooks/useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:4000/blogs/')

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogsLists blogs={blogs} title="All blogs!"/>}
        </div>
     );
}

export default Home;