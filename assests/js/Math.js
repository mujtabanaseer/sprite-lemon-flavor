//--------------calculation object as function parameter------------------------------------------------
calculation = {a: 2, b: 4, c: 6, message: "This is math calculation object properties:"}
math(calculation)
function math(calculation) {
    console.log(calculation["message"])
    console.log("a = "+calculation['a'])
    console.log("b = "+calculation['b'])
    console.log("c = "+calculation['c'])
    let add=calculation.a + calculation['b']
    let dif=calculation.c - calculation['b']
    let mul=calculation.c * calculation['a']
    let div=calculation.c / calculation['a']
    console.log("addition is a+b = "+add)
    console.log("subtraction is c-b = "+dif)
    console.log("multiplication is c*a = "+mul)
    console.log("division is c/a = "+div)
}
