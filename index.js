const display = document.getElementById("input-container");

let calculated = false;

function appendValue(value) {

    if (calculated) {
        display.value = value;
        calculated = false;
    } else {
        display.value += value;
    }
    

}

function clearDisplay() {
    display.value = "";
    calculated=false;
    
}

function Calculate() {
    display.value = eval(display.value);
    calculated = true;
}
function backSpace(){
    display.value= display.value.slice(0,-1);
    calculated = false;
}