import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('Ismail')
    const [isPanding,setIsPanding] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPanding(true);

        fetch('http://localhost:4000/blogs',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(blog),
        }).then(() => {
            console.log('new blog added');
            setIsPanding(false);
            // navigate.go(-1) //Go to the page just before the active page
            navigate('/')
        })
    }

    return ( 
        <div className="create-blogs">
            <h1>Create a new blog!</h1>
            <form className="create-form" onSubmit={handleSubmit}>
                <label htmlFor="for-title">Blog title</label>
                <input type="text"
                    id="for-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required/>

                <label htmlFor="for-body">Blog content</label>
                <textarea id="for-body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>

                <label htmlFor="for-author">Blog author</label>
                <select  id="for-author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Ismail">Ismail</option>
                    <option value="CHOUHAD">CHOUHAD</option>
                </select>
                {!isPanding && <button>Create</button>}
                {isPanding && <button>...</button>}
            </form>
        </div>
     );
}
export default Create;