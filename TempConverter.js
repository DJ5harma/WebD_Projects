const convert_button = document.querySelector("#convertBTN");
const output = document.querySelector("#output");

const input_unit_buttons = document.querySelectorAll('input[name="from"]');
const output_unit_buttons = document.querySelectorAll('input[name="to"]');


convert_button.addEventListener("click", function(){
    
    let input = document.querySelector("#number").value;
    input = parseInt(input);

    let chosen_input, chosen_output;

    for(let i=0; i<3; i++){
        if(input_unit_buttons[i].checked){
            chosen_input=input_unit_buttons[i].id;
            break;
        }
    }
    for(let i=0; i<3; i++){
        if(output_unit_buttons[i].checked){
            chosen_output=output_unit_buttons[i].id;
            break;
        }
    }
        
    if(chosen_input=="celsius1" && chosen_output=="kelvin2"){
        output.innerHTML = (input + 273.15)+" deg C";
    }
    else if(chosen_input=="kelvin1" && chosen_output=="celsius2"){
        output.innerHTML = (input - 273.15)+" deg K";
    }
    else if(chosen_input=="celsius1"&&chosen_output=="fahrenheit2"){
        output.innerHTML = (input*(9/5) + 32)+" deg F";
    }
    else if(chosen_input=="fahrenheit1"&&chosen_output=="celsius2"){
        output.innerHTML = ((input - 32)*(5/9))+" deg C";
    }
    else if(chosen_input=="kelvin1"&&chosen_output=="fahrenheit2"){
        output.innerHTML = ((input-273.15)*(9/5) + 32)+" deg F";
    }
    else if(chosen_input=="fahrenheit1"&&chosen_output=="kelvin2"){
        output.innerHTML = (((input - 32)*(5/9))+273.15)+" deg K";
    }

    else if(chosen_input.substring(0,chosen_input.length-1)){
        alert("YOU CHOSE THE SAME UNITS!");
    }

    else{
        alert("An unknown error occured!");
    }

}) ;
