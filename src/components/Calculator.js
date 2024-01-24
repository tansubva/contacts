import { useState } from "react"

const Calculator = () => {
    const [result,setResult] = useState()
    const [operator,setOperator] = useState()
    const [firstNum,setFirstNum] = useState(0)
    const [secondNum,setSecondNum] = useState(0)

    const handleNum = (id) => {
        setFirstNum(id)
    }
    

    

    return(
        <div className="calculator">
            <div id="output">{result}</div>
            {/* <div style={"display: flex"}></div> */}

            <div className="containerCalculator">
                <div id="buttons">
                    <button onClick={() => {handleNum(1)}} id="1">1</button>
                    <button onClick={() => {handleNum(2)}} id="2">2</button>
                    <button onClick={() => {handleNum(3)}} id="3">3</button>
                    <button onClick={() => {handleNum(4)}} id="4">4</button>
                    <button onClick={() => {handleNum(5)}} id="5">5</button>
                    <button onClick={() => {handleNum(6)}} id="6">6</button>
                    <button onClick={() => {handleNum(7)}} id="7">7</button>
                    <button onClick={() => {handleNum(8)}} id="8">8</button>
                    <button onClick={() => {handleNum(9)}} id="9">9</button>
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