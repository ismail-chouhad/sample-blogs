import { Link } from "react-router-dom";
import HandleDelete from "../Handle/HandleDelete";

const BlogsLists = ({blogs,title}/*= destraction methode*/) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="home">
            <h1>{title}</h1>
            {blogs.map((blog) => (
            <div className="blog-div" key={blog.id}>
                <div className="div-grid-1">
                    <h2>{blog.title}</h2>
                    <p>Writen by {blog.author}</p>
                    <Link to={`/blogs/${blog.id}`}>
                        <h4> More details...</h4>
                    </Link>
                </div>
                <div className="div-grid-2">
                    <HandleDelete id={blog.id}/>
                </div>
            </div>
            ))}
        </div>
     );
}

export default BlogsLists;
