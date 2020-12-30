//---------------------------------student and calculation objects as function parameters--------------------
student = {id: 9, name: 'mujtaba', age: 30, course: 'JavaScript', message: 'This is student information :'}
calculation = {a: 2, b: 4, c: 6, message: "This is math calculation object properties:"}
function combine(student,calculation){
    console.log("------------------------------")
    console.log("id : " + student.id)
    console.log("name : " + student.name)
    console.log("age : " + student.age)
    console.log("course : " + student.course)
    console.log("a = "+calculation.a)
    console.log("b = "+calculation.b)
    console.log("c = "+calculation.c)
    let add=calculation.a + calculation.b
    let dif=calculation.c - calculation.b
    let mul=calculation.c * calculation.a
    let div=calculation.c / calculation.a
    console.log("addition is a+b = "+add)
    console.log("subtraction is c-b = "+dif)
    console.log("multiplication is c*a = "+mul)
    console.log("division is c/a = "+div)
    console.log("------------------------------")
}
combine(student,calculation)