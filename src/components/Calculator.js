import { useState } from "react"

const Calculator = () => {
    const [result,setResult] = useState()
    const [operator,setOperator] = useState()
    const [firstNum,setFirstNum] = useState(0)
    const [secondNum,setSecondNum] = useState(0)

    const handleAddFirst = (e) => {
        setFirstNum(newNum)
    }
    const handleRemoveFirst = () => {

    }

    const handleAddSecond = () => {

    }
    const handleRemoveSecond = () => {

    }

    

    return(
        <div>
            <div>{ firstNum }</div>
            <button onChange={handleAddFirst}>+</button>
            <button onChange={handleRemoveFirst}>-</button>
            <br />
            <br />
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
            <br />
            <br />
            <div>{ secondNum }</div>
            <button onChange={handleAddSecond}>+</button>
            <button onChange={handleRemoveSecond}>-</button>

            
            <div id="output"></div>

        </div>
    )
}
export default Calculator