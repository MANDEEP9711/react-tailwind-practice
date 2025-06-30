import React from 'react'
import { useState } from 'react'
const ExtractFirstpeople = () => {
    const name=["John", "Doe", "Jane", "Smith"];
    const [count, setCount] = useState(0);
    const [people, setPeople] = useState("");
    return (
      <div>
        <input type="text" placeholder='no of people' id='people' onChange={(event)=>setCount(event.target.value)} className='border-1'/>
         <label htmlFor="people">enter no of peoples you want</label><br/>
         <button onClick={()=>{
          if(count> name.length){
            setCount(name.length-1);
          }
          setPeople(name.slice(0,count).map((person,index)=>`${index+1}. ${person}`).join(" ,"))
         }}>click</button>
        <div className='flex flex-wrap gap-4'>
          {people}
        </div>
      </div>
    )
}

export default ExtractFirstpeople;