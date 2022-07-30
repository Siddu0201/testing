import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleCopyClick = () => {
        // let newText = document.getElementById('myBox');
        // newText.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    // const wordCount = () => {
    //     if(text.length > 0 ){
    //         return text.trim().replace(/  +/g, ' ').split(" ").length;
    //     }else{
    //         return 0;
    //     }
    // }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter Text here' onChange={handleOnChange} id="myBox" rows="8" value={text}></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={handleCopyClick}>Copy Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((elm)=> {return elm.length!==0;}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minute read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something in textbox to preview'}</p>
            </div>
        </>
    );
}
