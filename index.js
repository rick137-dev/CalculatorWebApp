
var calculatorAppState = {
        symbolList : [],
        currentValue : 0
}


/**
 * The algorithm uses a semi-recursive method
 * It goes over the array of symbols and calculates the result prioritizing multiplication, then division, then signed addition
 * When encountering an opening bracket it uses a recursive approach to calculate the content inside the brackets and returns the result
 * It does 2 passes, one to resolve brackets, multiplication and division constructing a stack
 * Second pass resolves the stack into a final number
 */




const checkBrackets = function () {
let currBrackets =0;

for(let i =0;i<this.symbolList.length;i++){
    if(this.symbolList[i]=="("){
        currBrackets++;
    }else if(this.symbolList[i]==")"){
        currBrackets--;
         if(currBrackets<0){
        return false;
    }
    }
}

return true;
}

const evaluateExpression = function (value1, value2, operation){
        if(operation === "+"){
            return value1+value2;
        }
        else if(operation === "-"){
            return value1-value2;
        }
        else if(operation === "x"){
            return value1*value2;
        }
        else if(operation === "/"){
            return value1/value2;
        }
        else{
            return NaN;
        }
}


calculatorAppState.calculateValue = function calc(index) {

    const addStack = [];

    let currNumber =0;

    for(let i = index;i<this.symbolList.length;i++){
        const currElement = this.symbolList[i];

       
    }
}

calculatorAppState.calcState = function () {
const calcValue = this.calculateValue();
this.currentValue = calcValue;
this.symbolList = [calcValue];
}

calculatorAppState.resetState = function() {
    this.symbolList = [];
    this.currentValue = 0;
}