import React from 'react'
import { useState, useEffect } from "react";
import '../App.css';

export default function Converter() {
	let [inputBox, setinputBox] = useState("");
    let [result, setResult] = useState("No colour yet!");
    let [colour, setColour] = useState("#000000");

	let [SelectorA, setSelectorA] = useState("RGB");
	let [SelectorB, setSelectorB] = useState("HEX");
    
    let [rgbValues, setRGB] = useState(['', '', '']);

    let [r, setR] = useState(0);
    let [g, setG] = useState(0);
    let [b, setB] = useState(0);

    useEffect(() => {
        if(SelectorA === 'RGB' && SelectorB === 'HEX' && inputBox) {

            let rgb = inputBox.split(' ').join('');
            rgb = rgb.split(',');
            
            if(rgb.length === 3) {
              setR(parseInt(rgb[0]));
              setG(parseInt(rgb[1]));
              setB(parseInt(rgb[2]));
            
              console.log(b);
            
              setResult(`#${rgbValues[0].toString(16) + rgbValues[1].toString(16) + rgbValues[2].toString(16)}`);
              setColour(`#${rgbValues[0]}${rgbValues[1]}${rgbValues[2]})`);
            }

        } else if(SelectorA === 'HEX' && SelectorB === 'RGB' && inputBox) {
            let value = inputBox.replace('#', '');
            var hexText = value.match(/.{1,2}/g);

            setRGB([parseInt(hexText[0], 16), parseInt(hexText[1], 16), parseInt(hexText[2], 16)])

            setR(rgbValues[0]);
            setG(rgbValues[1]);
            setB(rgbValues[2]);

            setResult(`${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}`);
            setColour(`rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`);
        } else {
            setResult('No Colour Yet');
        }

    }, [inputBox]);

    return (
        <div className="wrapper">
            <h1>RGB To Hex Code Colour Converter</h1>
            <form id="ColourCon" action="#">
                <div className="colour-code">
                    <p>Enter the colour code you wish to convert</p>
                    
                    <input 
                       type="text"
                       value={inputBox}
                       onChange={(e) => setinputBox(e.target.value)}
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
                <div style={{width: '50px', height: '50px', backgroundColor: SelectorA === 'HEX' && SelectorB === 'RGB' ? 'rgb('+result+')' : `#${r.toString(16) + g.toString(16) + b.toString(16)}`}}></div>

                <img src="arrows.png" className="arrow-img" alt="" />
                <h1>{SelectorA === 'HEX' && SelectorB === 'RGB' ? result : `#${r.toString(16) + g.toString(16) + b.toString(16)}`}</h1>
            </form>
        </div>
    )
}