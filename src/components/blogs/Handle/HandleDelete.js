import { useNavigate } from "react-router-dom";

const HandleDelete = (props) => {
    const id = props.id;
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:4000/blogs/'+id , {
        method:'DELETE',
        }).then(()=>{
            console.log('blog was deleted!');
            navigate("/");
            })
    }

    return ( 
        <button
        className="delete" 
        onClick={handleDelete}
        >Delete</button>
     );
}
 
export default HandleDelete;