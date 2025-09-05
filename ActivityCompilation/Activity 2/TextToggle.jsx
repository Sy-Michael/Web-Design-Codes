import { useState } from "react";

export default function TextToggle(){
    const[text ,setText]=useState("");
    const[visible ,setVisible]=useState(true);



return(
   <>
<h1>Activity 2</h1>
<textarea className="text-input" 
placeholder="Type something" 
rows={4} 
maxLength={100}
value={text}
onChange={(e)=>{setText(e.target.value)}} 
></textarea>

<br></br>
 <button onClick={() => {setVisible(!visible)}}>{visible? "Hide Text" : "Show Text"}</button>
 <button onClick={() => {setText("")}} disabled={text.length===0}> clear</button>

 <p>Characters:{text.length}/100</p>

 
{visible && <form>{text}</form>}


</>
)
}
    