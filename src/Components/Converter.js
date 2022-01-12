import React from 'react'
import { useState } from "react";
import '../App.css';

// function that deals with all of this. 
export default function Converter() {
	const [inputBox, setinputBox] = useState("");
	const [SelectorA, setSelectorA] = useState("");
	const [SelectorB, setSelectorB] = useState("");

    return (
        <div class="wrapper">
            <h1>RGB To Hex Code Colour Converter</h1>
            <form id="ColourCon" action="#">
                <div class="colour-code">
                    <p>Enter the colour code you wish to convert</p>
                    <input 
					type="text" 
					value={inputBox}
					onChange={(e) => setinputBox(e.target.value)}
					/>
                </div>
                <div class="drop-list">
                    <div class="from">
                        <p>From</p>
                        <div 
						class="select-box">
                            <select id ="selectA" 
							onChange={(e) => setSelectorA(e.target.value)} value ={SelectorA} >
                                <option value="RGB">RGB</option>
                                <option value="HEX">HEX</option>                        
                            </select>
                        </div>
                    </div>
                    <img src="pink.png" class="colour-img" alt="" />
                    <div class="To">
                        <p>To</p>
                        <div class="select-box">
                            <select id ="selectB" 
							onChange={(e) => setSelectorB(e.target.value)} value ={SelectorB} >
                                <option value="RGB">RGB</option>
                                <option value="HEX">HEX</option>                                
                            </select>
                        </div>
                    </div>
                </div>
                <img src="arrows.png" class="arrow-img" alt="" />
                <h1>{inputBox}</h1>
            </form>
        </div>
    )
}