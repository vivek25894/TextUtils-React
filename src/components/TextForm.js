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
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'light' ? '#122e4b' : 'white' }}></textarea>
                </div>
                <button disabled={text.length === 0} style={{border:'1px solid black'}} className={`btn btn-${(props.theme==='')?`primary`:props.theme} mx-1 my-1`} onClick={handleUPClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} style={{border:'1px solid black'}} className={`btn btn-${(props.theme==='')?`primary`:props.theme} mx-1 my-1`} onClick={handleLWClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} style={{border:'1px solid black'}} className={`btn btn-${(props.theme==='')?`primary`:props.theme} mx-1 my-1`} onClick={handleClear}>Clear Text</button>
                <button disabled={text.length === 0} style={{border:'1px solid black'}} className={`btn btn-${(props.theme==='')?`primary`:props.theme} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} style={{border:'1px solid black'}} className={`btn btn-${(props.theme==='')?`primary`:props.theme} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#122e4b' : 'white' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words {text.length} characters</p>
                <p>{0.08 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}

export default TextForm
