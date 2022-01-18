import React from 'react'
import { useState } from "react";
import '../App.css';
import '../conversionFunctions';
const {
    hexconverter,
    rgbconverter
  } = require("../conversionFunctions");


export default function Converter() {
	let [inputBox, setinputBox] = useState(""); //The variable that stores the what a user has inputed in
    let [result, setResult] = useState("No colour yet!"); // where the result of the conversion is stored

	let [SelectorA, setSelectorA] = useState("RGB"); // The first drop down box, Selector A is the variable you would look at
	let [SelectorB, setSelectorB] = useState("HEX"); // The first drop down box, Selector B is the variable you would look at

    
    let setR = useState(0);
    let setG = useState(0);
    let setB = useState(0);


    let Anwser;
    


    function converter(input) {         // The function that converts the input box values 
        if(SelectorA === 'RGB' && SelectorB === 'HEX' && input) {       // If statement checks if the RGB2HEX conversion is selected
            Anwser = rgbconverter(input)
            let r = setR; 
            let g = setG;
            let b = setB;
        
            setResult(Anwser)
        } else if(SelectorA === 'HEX' && SelectorB === 'RGB' && input) {  // Hex converter function
            Anwser = hexconverter(input)
            setResult(Anwser)
        } else {
            setResult('No Colour Yet');
        }

        setinputBox(input);
    }

    return (
        <div className="wrapper">
            <h1>RGB To Hex Code Colour Converter</h1>
            <form id="ColourCon" action="#">
                <div className="colour-code">
                    <p>Enter the colour code you wish to convert</p>
                    
                    <input 
                       type="text"
                       value={inputBox}
                       onChange={(e) => converter(e.target.value)}
					/>
                </div>
                <div className="drop-list">
                    <div className="from">
                        <p>From</p>
                        <div 
						className="select-box">
                            <select id ="selectA" 
							onChange={(e) => setSelectorA(e.target.value)} value={SelectorA} >
                                <option value="RGB">RGB</option>
                                <option value="HEX">HEX</option>                        
                            </select>
                        </div>
                    </div>
                    <div className="To">
                        <p>To</p>
                        <div className="select-box">
                            <select id ="selectB" 
							onChange={(e) => setSelectorB(e.target.value)} value ={SelectorB} >
                                <option value="RGB">RGB</option>
                                <option value="HEX">HEX</option>                                
                            </select>
                        </div>
                    </div>
                </div>
                <div style={{width: '50px', height: '50px', backgroundColor: result}}></div>

                <img src="arrows.png" className="arrow-img" alt="" />
                <h1>{result}</h1>
            </form>
        </div>
    )
}
