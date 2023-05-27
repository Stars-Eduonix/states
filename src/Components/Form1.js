

import React,{useState} from "react";



const Form1 = () => {

      let [name, setName] = useState("") // name="ab"

       function updateName(event){
          setName(event.target.value)

       }


    return(
        <div>
             
                 <input 
                 type="text" 
                 placeholder="Enter your name" 
                 onChange = {updateName} 
                 />
              
                 <p>{name}</p>
        </div>
    )
}

export default Form1;