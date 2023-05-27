import React,{useState} from "react";

// hooks
// kite , setKite 
    // helloWorld , setHelloWorld
let a = 0

const S1 = () => {
    let [count, setCount]  = useState(0)  //  count = 0

     console.log(" I am at start")

    // let a = 0 // value of a is gettinfg reset to 0 on every render
    
    function increaseA(){
          a = a+1
          console.log(a)
    }
    function increaseCount(){
          setCount(count+1)
    }


    console.log(" I am at end")
    return(
        <div>
             <h1> a: {a}</h1> 
             <button onClick={increaseA}>Increase A</button>
             <h1> count: {count}</h1>
             <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}

export default S1;


