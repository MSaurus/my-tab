import {storage} from './main.js'

let btn = document.getElementById('change-color-btn');

let RGBToHex = rgb => {
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

export let loadBackgroundColor = () => {
    let backgroundColor;
    if (storage.getItem("backgroundColor") !== null) {
        backgroundColor = storage.getItem("backgroundColor")
    } else {
        backgroundColor = "#3c40c6"
    }
    document.body.style.backgroundColor = backgroundColor;
}

let watchColorPicker = event => {
    event.preventDefault();
    let background = document.querySelector('body');
    let newBackgroundColor = event.target.value;
    background.style.backgroundColor = newBackgroundColor;
}

// Only updates the storage when the user confirms the color change
let updateStorage = event => {
    event.preventDefault();
    storage.setItem("backgroundColor", event.target.value)
}

let changeColor = event => {
    event.preventDefault();
    let bodyBackground = document.body.style.backgroundColor;
    let colorPicker = document.getElementById("color-picker");
    colorPicker.value = RGBToHex(bodyBackground);
    colorPicker.addEventListener('input', watchColorPicker);
    colorPicker.addEventListener('change', updateStorage)
    colorPicker.click();
}

btn.addEventListener('click', changeColor);
