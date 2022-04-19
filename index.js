let displayText = document.getElementById("display")
let buttons = Array.from(document.getElementsByClassName('button'))

innerText = 0;

buttons.map(button => {
    button.addEventListener('click', (a) =>{
        switch(a.target.innerText){
            case 'AC':
                displayText.innerText = ' ';
        }
    }
    )
}


)