
import React,{ useState } from "react";



const Sa = () => {
     let [arr, setArr] = useState([10,20,30,40,50])
     let [num, setNum] = useState(0)
      
     console.log(arr)

     console.log(num)

     function addToArray(){
           setArr([...arr, +num ])
     }

     function addNumber(e){
        setNum(+e.target.value)
     }


    return(
        <div>
              <h1> {arr.join(",")}</h1>
               <input
                type="number"
                onChange={addNumber}
               />
               <button
                onClick={addToArray}
               >Add to Arr</button>
               
        </div>
    )
}

export default Sa;