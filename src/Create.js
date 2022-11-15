import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const[title,setTitle]=useState('')
    const[body,setBody]=useState('')
    const[author,setAuthor]=useState('')
    const[ispending,setIspending]=useState(false)
    const History=useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body ,author}
        setIspending(true)
        fetch('http://localhost:8000/blogs',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("New blog added")
            setIspending(false)
            History.push("/")
    })

    }
    return ( 
        <div className="create">
            <form onSubmit={handleSubmit}>
            <h2>Add a new blog</h2>

                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea 
                required
                placeholder="ENTER MESSAGE"
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <input 
                    type="text"
                    required
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                />
                {!ispending &&
                <button>Add blog</button>
                }
                {ispending &&
                <button
                    disabled
                >...Adding blog</button>
                }
            </form>
        </div>
     );
}
 
export default Create;