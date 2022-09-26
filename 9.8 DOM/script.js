const buttons = document.querySelectorAll('button');
console.log(buttons);
// buttons.onclick = ()=>{
//     var inputValue = document.querySelector('input');
//     inputValue.value += buttons.value;
//     console.log(inputValue+1);
//     console.log(buttons);
// }

function handleClick(val){
    var inputValue = document.querySelector('input');
    if(val==='='){
        try {
            inputValue.value = eval(inputValue.value);
        } catch (error) {
            inputValue.value = "Invalid";
        }
        return;
    }
    inputValue.value += val;
}

