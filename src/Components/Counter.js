
import React, {useState} from "react";


const Counter = () => {
    let [a, setA] = useState(0) 
    //    let x = useState(100)
    //    console.log("usestate", x[0], x[1])

    //   let [a,b] = x 
    //    console.log(a,b)

    function increase(value){
          setA(a+value)
    }
    function decrease(value){
            setA(a-value)
    }
    function reset(){
            setA(0)
    }




    return(
        <div>
            <h1> a: {a}</h1> 
            <button onClick={()=>increase(5)}>Increase</button>
            <button onClick={()=>decrease(6)}>Decrease</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

export default Counter;