import React, { useState } from 'react'

const TextForm = (props) => {
    const handleUPClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case!", "success");
    }
    const handleLWClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case!", "success");
    }
    const handleClear = () => {
        setText("");
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? '#122e4b' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#122e4b' : 'white' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1" style={{ backgroundColor: props.theme }} onClick={handleUPClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" style={{ backgroundColor: props.theme }} onClick={handleLWClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" style={{ backgroundColor: props.theme }} onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-1" style={{ backgroundColor: props.theme }} onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" style={{ backgroundColor: props.theme }} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#122e4b' : 'white' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/[ ]+/).join(" ").trim().split(" ").length} words {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the text area to Preview here."}</p>
            </div>
        </>
    )
}

export default TextForm
