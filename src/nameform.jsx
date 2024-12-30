import {useState} from "react"
function Cat()
{
    let [count,setCount]=useState(0)
    let [name,setName]=useState("rubitha")
    return(
        <>
        <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>++</button>
        <button onClick={()=>setCount(count-1)}>--</button>

        <h1>Name{name}</h1>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}></input>
    
        </div>
        </>

    )
}
export default Cat