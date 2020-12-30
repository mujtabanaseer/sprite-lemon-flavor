//--------------student object as function parameter------------------------------------------------
student = {id: 9, name: 'mujtaba', age: 30, course: 'JavaScript', message: 'This is student information :'}
displayStudentInformation(student)
function displayStudentInformation(student) {
    console.log(student.message)
    console.log("id : " + student.id)
    console.log("name : " + student.name)
    console.log("age : " + student.age)
    console.log("course : " + student.course)
}
