let btns = document.querySelectorAll ('.btn')
let previous_operand = document.querySelector ('.previous_operand')
let current_operand = document.querySelector ('.current_operand')
let equal = document.querySelector ('#equal')

btns.forEach ((button) =>{
    button.addEventListener('click',(element) => {      
        if(element.target.id === "equal"){
            current_operand.textContent = eval(previous_operand.innerHTML)
        }
        else if(element.target.id === "del"){
            previous_operand.textContent =previous_operand.textContent.slice (0,-1)
        }
        else if(element.target.id === "clear") {
            previous_operand.textContent = "";
            current_operand.textContent = "";
        }
        else if(element.target.id === "purcent"){
            current_operand.textContent = previous_operand.textContent / 100;
        }
        else if(element.target.id === "("){
            if(previous_operand.textContent && previous_operand.textContent.includes("(")){
                previous_operand.textContent += ")"
            }
            // else if (previous_operand.textContent && previous_operand.textContent.includes("()")){
            //     previous_operand.textContent += "("
            // }
            else {
                previous_operand.textContent += element.target.id
            }
        }
        else{
            previous_operand.textContent += element.target.id;
        }
    })
})

window.addEventListener('keydown',(ev)=> {
    if(ev.key !== "Enter" && ev.key !== "Backspace") {
        let numbers = "0123456789+-/*()."
        if(numbers.includes(ev.key)) {
            previous_operand.textContent += ev.key;
            current_operand.textContent = eval(previous_operand.textContent)
        }
    }
    else if (ev.key === "Enter") {
        current_operand.textContent = eval(previous_operand.textContent);
        previous_operand.textContent = current_operand.textContent;
        current_operand.textContent = "";
    }
    else if (ev.key === "Backspace") {
        previous_operand.textContent =previous_operand.textContent.slice (0,-1)

    }
})


// const calcul = () =>{

// }
// function calculage(datenow, datanaiss){
//     return datenow - datanaiss
// }
// const calculag = () =>{

// }


// console.log(calculage(2022, 2001))



