import {storage} from './main.js'

let btn = document.getElementById('change-color-btn');

let rgbList = rgb => {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? ", " : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
    return rgb;
}

let isHexadecimal = testValue => {
    let regexp =/^#[0-9A-F]{6}$/i;
    if (regexp.test(testValue)) {
        return true
    } else {
        return false
    }
}

let hexToRGB = hex => {
    let r = 0, g = 0, b = 0;
    // handling 3 digit hex
    if (hex.length == 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];
    // handling 6 digit hex
    } else if (hex.length == 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }

    return [+r, +g, +b]
}

let RGBToHex = rgb => {
    rgb = rgbList(rgb);

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
        backgroundColor = storage.getItem("backgroundColor");
    } else {
        backgroundColor = "#3c40c6";
    }
    fixContrast(backgroundColor);
    document.body.style.backgroundColor = backgroundColor;
}

let watchColorPicker = event => {
    event.preventDefault();
    let background = document.querySelector('body');
    let newBackgroundColor = event.target.value;
    fixContrast(event.target.value);
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

let fixContrast = rgb => {
    if (isHexadecimal(rgb))
    {
        rgb = hexToRGB(rgb);
    } 
    let brightness = Math.round(((parseInt(rgb[0]) * 299) +
                     (parseInt(rgb[1]) * 587) +
                     (parseInt(rgb[2]) * 114)) / 1000);

    let textColor = (brightness > 125) ? '#000' : '#fff';
    document.body.style.color = textColor;
}

btn.addEventListener('click', changeColor);