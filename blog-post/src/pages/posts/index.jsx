import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import '../login/styles.css';

function CreatePost() {

    const [image_url, setImage] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = ()=>{
        const obj = {
            image_url: image_url,
            content: content,
            author_id: "author_id",
            author_name: "author_name" 
        }
        console.log("post data", obj)
    }

    return (
        <div>
            {/* <h1>login page</h1> */}
            <CssBaseline />
                <Box className="login_form" style={{maxWidth:'50%', margin:'auto'}}>
                    <h1 style={{textAlign:'center', marginBottom:'50px'}}>Create Post</h1>
                        <div>
                            <label htmlFor="email">Image url</label>
                            <input type="text" placeholder="image url" name="image_url" onChange={(e)=>setImage(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="password">Content</label>
                            <textarea  rows="8" cols="70" placeholder="content" name="content" onChange={(e)=>setContent(e.target.value)} />
                        </div>
                        <div className="login_button">
                           <button onClick={handleSubmit}>Create Post</button>
                        </div>
                </Box>

        </div>
    )
}

export default CreatePost;
