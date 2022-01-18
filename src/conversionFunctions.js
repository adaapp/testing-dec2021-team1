function hexconverter(input){ // Hex converter function
    let value = input.replace('#', '');
    var hexText = value.match(/.{1,2}/g);
    var hexCoversion = `${parseInt(hexText[0], 16)}, ${parseInt(hexText[1], 16)}, ${parseInt(hexText[2], 16)}`;
    var formatAnwser = "rgb(" + hexCoversion +")"
    return formatAnwser; // Returns final conversion
};

function rgbconverter(input){
    let rgb = input.split(' ').join('');
    rgb = rgb.split(',');       // Splits the RGB into three different numbers
    
    if(rgb.length === 3) { 

     let r = parseInt(rgb[0]);
     let g = parseInt(rgb[1]);
     let b = parseInt(rgb[2]);

     let hexcode = "#" + (r ===0 ? "00" : r.toString(16)) + (g ===0 ? "00" : g.toString(16)) + (b ===0 ? "00" : b.toString(16));
     return hexcode;
    }

    
};

module.exports = { 
hexconverter,
rgbconverter
};
