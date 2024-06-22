let input = document.querySelector('#screen');
let buttons = document.querySelectorAll('button');

let str = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        
        if(e.target.innerHTML == '='){
            str = eval(str);
            input.value = str;
            str = str.slice(0, -1);

        }
        if(e.target.innerHTML == 'DEL'){
            str = str.slice(0, -1);
            input.value = str;
        }
        else if(e.target.innerHTML == 'AC'){
            str = "";
            input.value = str;
        }
        else{
        str += e.target.innerHTML;
        input.value = str;
        input.value = str; 
        }
    })
})