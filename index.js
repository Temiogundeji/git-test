const rectangle = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle with l = " + l);
    if(l <=0 && b<=0){
        console.log('Rectangle dimension should be greater than zero');
    }
    else{
        console.log('The area of a rectangle is ', rectangle.area(l,b));
        console.log('The perimeter of a rectangle is ', rect.perimeter(l,b));
    }
}

solveRect(2,4);

