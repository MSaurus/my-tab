let btn = document.getElementById('change-color-btn');

/** Need this since the color picker wants hex 
*** to set the default value and apparently js
*** just convert hex to rgb when I put in a hex
*** value into the backgroundColor
**/ 
function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? ", " : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
}

let watchColorPicker = event => {
    event.preventDefault();
    let background = document.querySelector('body');
    background.style.backgroundColor = event.target.value;
}

let changeColor = event => {
    event.preventDefault();
    let bodyBackground = document.body.style.backgroundColor;
    let colorPicker = document.getElementById("color-picker");
    colorPicker.value = RGBToHex(bodyBackground);
    colorPicker.addEventListener('input', watchColorPicker);
    colorPicker.click();

    // let changeColorDiv = document.getElementById('change-color');
    // colorPicker.value = document.body.style.backgroundColor;
    // colorPicker.addEventListener('input', watchColorPicker);
}

btn.addEventListener('click', changeColor);
