import React from 'react'
import { useState } from "react";
import '../App.css';

// function that deals with all of this. 
export default function Converter() {
	let [inputBox, setinputBox] = useState("");
    let [result, setResult] = useState("No colour yet!");
	let [SelectorA, setSelectorA] = useState("RGB");
	let [SelectorB, setSelectorB] = useState("HEX");
    
    let [r, setR] = useState(0);
    let [g, setG] = useState(0);
    let [b, setB] = useState(0);

    function convertValue(e) {

        if(SelectorA === 'RGB' && SelectorB === 'HEX' && e.target.value.length) {
            let rgb = e.target.value.split(' ').join('');
            rgb = rgb.split(',');

            if(rgb.length === 3) {
                setR(parseInt(rgb[0]));
                setG(parseInt(rgb[1]));
                setB(parseInt(rgb[2]));

                setResult(`#${r.toString(16) + g.toString(16) + b.toString(16)}`);
            }
        } if(SelectorA === 'HEX' && SelectorB === 'RGB' && e.target.value.length) {


        } else {
            setResult('No colour yet!');
        };


        setinputBox(e.target.value);

        console.log(`#${r.toString(16) + g.toString(16) + b.toString(16)}`);
    };

    return (
        <div className="wrapper">
            <h1>RGB To Hex Code Colour Converter</h1>
            <form id="ColourCon" action="#">
                <div className="colour-code">
                    <p>Enter the colour code you wish to convert</p>
                    <input 
					type="text" 
					value={inputBox}
					onChange={(e) => convertValue(e)}
					/>
                </div>
                <div className="drop-list">
                    <div className="from">
                        <p>From</p>
                        <div 
						className="select-box">
                            <select id ="selectA" 
							onChange={(e) => setSelectorA(e.target.value)} value ={SelectorA} >
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
                <div style={{width: '50px', height: '50px', backgroundColor: `#${r.toString(16) + g.toString(16) + b.toString(16)}`}}></div>
                <img src="arrows.png" className="arrow-img" alt="" />
                <h1>{result}</h1>
            </form>
        </div>
    )
}