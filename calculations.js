var buttons = document.getElementsByClassName("input-button");
console.log(buttons.length);
var display = document.getElementById("display");
var operend1 = 0;
var operend2 = null;
var operator = null;
var isEqual = false;
for(var i=0; i<buttons.length;i++) {
    buttons[i].addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        switch(value) {
            case 'AC': 
                operend1 = 0; operend2 = null; operator = null;
                display.innerText = null;
                return;
            case '+/-':
                operend1 = parseFloat(display.textContent);
                display.innerText = -operend1;
                break;
            case '%': 
                operator = '%';
                operend1 = parseFloat(display.textContent)*100;
                display.innerText = null;
                break;
            case '/':
                operator = '/';
                operend1 = parseFloat(display.textContent);
                display.innerText = null;
                break;
            case '*':
                operator = '*';
                operend1 = parseFloat(display.textContent);
                display.innerText = null;
                break;
            case '-':
                operator = '-';
                operend1 = parseFloat(display.textContent);
                display.innerText = null;
                break;
            case '+':
                operator = '+';
                operend1 = parseFloat(display.textContent);
                display.innerText = null;
                break;
            case '=':
                isEqual = true;
                operend2 = parseFloat(display.textContent);
                display.innerText = null;
                if(operator == '+')
                    display.innerText = operend1+operend2;
                else if(operator == '-')
                    display.innerText = operend1-operend2;
                else if(operator == '*')
                    display.innerText = operend1*operend2;
                else if(operator == '/') 
                    display.innerText = operend1/operend2;
                else if(operator == '%') 
                    display.innerText = operend1/operend2;
                else {
                    display.innerText = operend2;
                }
                break;
            default:
                if(isEqual == true) {
                    isEqual = false;
                    display.innerText = null; 
                }
                display.innerText += value; 
        }
    });
    
}