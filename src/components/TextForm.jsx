// use rfc for react function componenet
import React, { useState } from 'react'

export default function TextForm(props) {
    const handlePost = () => {
        console.log("Comment Posted");
        setText("Want to post another comment");
        setCommentText("")
        props.createAlert("Comment posted", "success");
    }
    const handleOnChange = (event) => {
        console.log("Text changed");
        setCommentText(event.target.value);
        setText("Comment is empty");
    }
    const [Text, setText] = useState("Enter comment here");
    const [commentText, setCommentText] = useState("");
    return (
        <div style={props.Style}>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="Input1" className="form-label">Email address</label>
                <input type="email" className="form-control" style={props.Style} id="Input1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="Textarea1" className="form-label">Content</label>
                <textarea className="form-control" id="Textarea1" style={props.Style} value={commentText} placeholder={Text} onChange={handleOnChange} rows="6"></textarea>
            </div>
            <div align="right">
                <button className="btn btn-outline-primary" onClick={handlePost}>POST</button>
            </div>
            <div className="container">
                <p>{commentText.split(" ").filter((element)=>{return element.length!== 0}).length} words {commentText.length} characters</p>
            </div>
        </div>
    )
}
