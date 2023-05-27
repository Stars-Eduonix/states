
import React,{ useState } from "react";

const So = () => {
     let [count, setCount] = useState({gold:0, silver:0, bronze:0})
     // count = {gold:0, silver:0, bronze:0}

     
    

     function increaseGold () {
        setCount({gold:count.gold+1, silver:0, bronze:0})
    }

    function increseSilver(){
           setCount({...count, silver:count.silver+1})
    }

    function increseBronze(){
        setCount({...count, bronze:count.bronze+1})
    }


    return(
        <div>
              <h1>Gold: {count.gold} , Silver: {count.silver}, Bronze: {count.bronze}  </h1>
              <button onClick={increaseGold}>Increase Gold</button>
              <button onClick={increseSilver}  >Increase Silver</button>
              <button onClick={increseBronze}>Increase Bronze</button>
        </div>
    )
}

export default So;