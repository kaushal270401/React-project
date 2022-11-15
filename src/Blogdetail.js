import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Blogdetail = () => {
    const {id}=useParams()
    const {data:blog, pending ,error}=useFetch('http://localhost:8000/blogs/'+id)
    const History=useHistory()
    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:"DELETE"
        }).then(
            History.push('/')
        )
    }
    return ( 
        <div className="blog-details">
            {pending &&<div>....loading</div>}            
            {error &&<div>{error}</div>}       
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>

                </article>
            )}
            
        </div>
     );
}
 
export default Blogdetail;