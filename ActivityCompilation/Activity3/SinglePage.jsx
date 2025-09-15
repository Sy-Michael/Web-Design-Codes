
import {BrowserRouter as  Router, Routes , Route , Link} from 'react-router-dom';
import { useState } from 'react';

function Home() {
    return <h1>Welcome to the Home Page</h1>
}
function Counter() {
    const[count, setCount]=useState(0);
    return (
    <div>
        <p>Click the button to increase the number</p>
        <button onClick={()=>setCount(count+1)}>Count: {count}</button>
       
    </div>
    )
}
function Text() {
const[text , setText]=useState("");
   return(
    <div>
<p>"Enter your name and press the button"</p>
   <div>
    <input type='text'
    placeholder='Enter your name'
    onChange={(e)=> setText(e.target.value)}
    />
    <button onClick={()=> alert(`Hello, ${text || "Guest"}!`)}>Greet Me</button> 
    </div>
    </div>
   )
}

export default function SinglePage() {
    return(
        <Router>
            <nav>
            <Link to  = '/'>Home</Link>
            <Link to  = '/counter'>Counter</Link>
            <Link to  = '/text'>Text</Link>
</nav>
<Routes>
    <Route path = '/' element = {<Home/>}/>
    
    <Route path = '/counter' element = {<Counter/>}/>
    
    <Route path = '/text' element = {<Text/>}/>
</Routes>
        </Router>
    )
}