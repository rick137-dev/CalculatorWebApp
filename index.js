
var calculatorAppState = {
        symbolList : [],
        currentValue : 0
}


/**
 * The algorithm uses a semi-recursive method
 * It goes over the array of symbols and calculates the result prioritizing multiplication, then division, then signed addition
 * When encountering an opening bracket it uses a recursive approach to calculate the content inside the brackets and returns the result
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

    let currSum =0;
    let currIndex;

    let currNumber =0;
    
    let currElement;

    for(currIndex = index; currIndex<this.symbolList.length;currIndex++){
        currElement = this.symbolList[currIndex];

        if(evaluateExpression(currSum,currNumber,currElement)){ //means currElement is an operation
            currSum = evaluateExpression(currSum,currNumber,currElement);
            currNumber = 0;
        }
        
         else if(currElement === "("){
            
            
        }
         else if(currElement === ")"){
            return {sum: currSum,
                index: currIndex};
            
        }
        else{

            currNumber  = currNumber*10 + currElement;
        }


    }


   return {sum : currSum,
    index: currIndex};
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