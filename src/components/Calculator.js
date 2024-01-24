import { useState } from "react"

const Calculator = () => {
    const [result,setResult] = useState()
    const [operator,setOperator] = useState()
    const [firstNum,setFirstNum] = useState(0)
    const [secondNum,setSecondNum] = useState(0)

    const handleAddFirst = (e) => {
        const newNum = firstNum++
        setFirstNum(newNum)
    }
    const handleRemoveFirst = () => {

    }

    const handleAddSecond = () => {

    }
    const handleRemoveSecond = () => {

    }

    

    return(
        <div className="calculator">
            <div id="output">{firstNum, operator, secondNum}</div>

            <div className="containerCalculator">
                <div id="buttons">
                    <button id="1">1</button>
                    <button id="2">2</button>
                    <button id="3">3</button>
                    <button id="4">4</button>
                    <button id="5">5</button>
                    <button id="6">6</button>
                    <button id="7">7</button>
                    <button id="8">8</button>
                    <button id="9">9</button>
                </div>
                <div id="operators">
                    <button id="plus">+</button>
                    <button id="minus">-</button>
                    <button id="equal">=</button>

                </div>
            </div>

            

        </div>
    )
}
export default Calculator