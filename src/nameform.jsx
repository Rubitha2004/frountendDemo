import React,{useEffect, useState,useRef} from "react"
function Cat()
{
    let [count,setCount]=useState(0)
    let [name,setName]=useState("rubitha")
    let countRef =useRef(0);
    let nameRef=useRef();
//     useEffect(()=>{
//       console.log("value updates");

//       //code cleanup
//       return (()=>{
//         console.log.log("code cleanup");
//       })
// },[count])


//useRef
let increment =()=>
{
  setCount(count+1)
  countRef.current++;

  console.log("state: ",count)
  console.log("Ref:",countRef.current)
}
let decrement =()=>
  {
    setCount(count-1)
    countRef.current--;
  
    console.log("state: ",count)
    console.log("Ref:",countRef.current)
  }
  let num=(e)=>
  {
    setName(name)
    nameRef.current=name;
    console.log("name:",name);
    console.log("ref:",nameRef.current);
  }
    return(
        <>
        <div>
        <h1>Count:{count}</h1>
        <h1>CountRef:{countRef.current}</h1>
        <button onClick={increment}>++</button>
        <button onClick={decrement}>--</button>

         <h1>Name{name}</h1>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}></input> 
         <button onClick={num}>button</button>
        </div>
        </>

    )
}
export default Cat