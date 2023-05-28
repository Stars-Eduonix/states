import React, {useState} from "react"  


const Calcy = () => {
      let [num1, setNum1] = useState("")  //  10
      let [num2, setNum2] = useState("")
      let [ans, setAns] = useState("")
      let [error, setError] = useState("")
      let [success, setSuccess] = useState("")

        

        function cal(event){
            event.preventDefault()
              
             if(num1 == ""){
                  setError("Please Enter First Number")
                  setSuccess("")
                  setAns("")
                  return 
             }
            if(num2 == ""){
                    setError("Please Enter Second Number")
                    setSuccess("")
                    setAns("")
                    return
            }

              setError("")
              switch(event.target.innerText){
                    case "Add": setAns(+(num1) + +(num2))
                                break;
                    case "Sub": setAns(+(num1) - +(num2))
                                break;
                    case "Mul": setAns(+(num1) * +(num2))
                                break;
                    case "Div": setAns(+(num1) / +(num2))
              }
              setSuccess("Success Your Result is shown above")
              

        }



    return(
        <div> 
              <form>
                    <input type="text" placeholder="Enter First Number" 
                      onChange={(event)=> setNum1(event.target.value)}
                    /> 
                    <input type="text" placeholder="Enter Second Number" 
                        onChange={(event)=>setNum2(event.target.value)}
                    />
                    <button onClick={cal}> Add </button>
                    <button onClick={cal}> Sub </button>
                    <button onClick={cal}> Mul </button>
                    <button onClick={cal}> Div </button>
              </form>
              {
                 ans &&
                 <h1> Result = {ans} </h1>
              }
                 <h1 style={{color: "red"}}> {error} </h1>
                 <h1 className="success"> {success} </h1>

        </div>
    )
}


export default Calcy;