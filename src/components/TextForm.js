import React, {useState} from "react";

export default function TextForm(props){
    

    const handleUpClick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");

    }

    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "info");
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
        
    }

    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "primary");
    }

    const handleSpeakClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);

    }

    // const countWords = (text) => {
    //     return(
    //         text.split(' ').length
    //     )
    // }



    const [text, setText] = useState('');

    return(
        <>
        <div className="container" style={{color : props.Mode ==='dark'?'#b8a9c9':'#622569'}}> 
            <h3>{props.heading}</h3>
            <div className="form-group">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.Mode ==='dark'?'#201234':'#e3dceb', color:props.Mode ==='dark'?'#b8a9c9':'#622569', borderColor:props.Mode ==='dark'?'#b8a9c9':'#622569'}} id="MyBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className = "btn btn-primary mx-2 my-1" onClick={handleUpClick}>Conver to Uppercase</button>
            <button disabled={text.length===0}  className = "btn btn-primary mx-2 my-1" onClick={handleLoClick}>Conver to Lowercase</button>
            <button disabled={text.length===0}  className = "btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0}  className = "btn btn-primary mx-2 my-1" onClick={handleSpeakClick}>Speak</button>


        </div>
        <div className="container my-2" style={{color:props.Mode==='dark'?'#b8a9c9':'#622569'}}>
            <h3>Your Text Summary</h3>
            <p>words count is {text.split(/\s+/).filter((element)=> {return (element.length!==0)}).length} char count is {text.split(' ').filter((element)=> {return (element.length!==0)}).length}</p>
            <p>words count without comma is {text.split(',').filter((element)=> {return (element.length!==0)}).length} char count is {text.split(' ').filter((element)=> {return (element.length!==0)}).length}</p>
            <p>Time required to read the para {0.008*text.split(' ').filter((element)=> {return (element.length!==0)}).length}</p>
            <h3 style={{colour:"#622569"}}>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>

        </div>
        </>
    );
}