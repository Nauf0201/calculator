let current_input = ''

var text = document.getElementById("head")
function input_button(num){
    current_input += num.toString()
    if (text.textContent == 0){
        text.textContent = num.toString()
    }
    else{
        text.textContent += num.toString()
    }
    if (num == "c"){
        text.textContent = 0
        current_input = ''
    }
}

function calculate(){
    var result = eval(current_input);
    text.textContent += "="
    text.textContent += result
}