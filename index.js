
var calculatorAppState = {
        symbolList : [],
        currentValue : 0
}

calculatorAppState.calculateValue = function() {

    let currSum =0;

   return currSum;
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