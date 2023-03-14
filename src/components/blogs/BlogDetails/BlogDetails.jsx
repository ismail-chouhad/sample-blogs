import {  useParams } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";
import HandleDelete from "../Handle/HandleDelete"

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:4000/blogs/'+id);

    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && <article>
                <h2>{blog.title}</h2>
                <h5>Written by {blog.author}</h5>
                <div>{blog.body}</div>
                <HandleDelete id={blog.id}/>
            </article>}
        </div>
     );
}
 
export default BlogDetails;