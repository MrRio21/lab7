// class Person
// {
//     #ID;
//     #Name;
//     #Age;
//     static #count;

//     constructor(a,b,c){
//         if(this.constructor==Person)
//         {
//             throw 'error this is abstract class'
//         }


//         Person.#count++;
//         this.#ID=a;
//         this.#Name=b;
//         this.#Age=c;
//     }
//     setId(id)
//     {
//         this.#ID=id;
//     }
//     getId(){
//         return this.#ID;
//     }
//     getName(){
//         return this.#Name;
//     }
//     setName(name){
//         this.#Name=pName;
//     }
//     setAge(age){
//         this.#Age=age;
//     }
//     getAge(){
//         return this.#Age;
//     }
//     static getCount()
//     {
//         return Person.#count;
//     }

//     display()
//     {
//         console.log(this.#ID,this.#Name,this.#Age)
//     }

// }

// class Emp extends Person
// {
//     #Salary;
//     #counts
//     constructor(a,b,c){
//         super(a,b,c)
//         Emp.#count++;
//     }
    
//     setSalary(salary){
//         this.#Salary= salary;
//     }
//     getSalary(){
//         return this.#Salary
//     }
//     showSalary(){
//         console.log(this.#Salary)
//     }
//     increaseSalary(salary){
//         this.#Salary+=salary;
//     }
//     static displayHTRules(){
//         console.log("ITI rules : Dnot copy labs in Javascript only :)")
//     }
//     static getCounts()
//     {
//         return Emp.#counts;
//     }


// }
// class Student extends Person
// {
//     #Grade;
//     constructor(a,b,c){
//         super(a,b,c)
//     }
//     setGrade(grade){
//         this.#Grade=grade;
//     }
//     getGrade(){
//         return this.#Grade
//     }

// }
////////////////////////////////////////

// var obj = { 
//     firstName: "Rio",      
//     location: "aswan",     
//     address: 50              
// };
// console.log(obj)
//////////////////////////////////


// let obj = {
//     firstName: "Rio",
//     location: "aswan", 
//     address: {
//         city: "aswan",
//         zipCode: "605994"
//     },
//     getAddress: function () { return this.address.city + ' ' + this.address.zipCode }
// };

// console.log(obj.getAddress())




/////////////////////////////////////////////////////////////////////////

// What’s the difference between static method and member method?

// A static method is a method that belongs to a class,
// but it does not belong to an instance of that class 
// and this method can be called without the instance or object of that class. 
// Every method in java defaults to a non-static method without static keyword preceding it.
//  Non-static methods can access any static method and static variable, 
//  without creating an instance of the object. Let us clarify the differen
// ces Below are the various important differences among

////////////////////////////////////////////////////////////////////////////

// var array = [6, 4, 8, 9, 12];

// var maxArr = Math.max(...array);

// console.log(...array);

// console.log("The maximum :");
// console.log(maxArr);

//////////////////////////////////////////////////////////////////////////

var fruits = ["apple", "strawberry", "banana", "orange", "mango"] 

fruits.forEach(function (x) {

if(isNaN(x)){
    console.log("done")
}else{  console.log("no a string")}

    });


    fruits.forEach(function (x) {

        if(x.indexOf("a",0)==0)
        {
            console.log("done :",x , "starts with a")
        }
        else {  console.log(x , " donot starts with a")}

        }
    )

var filtered=[];

    fruits.forEach(function (x) {
        if(x.indexOf("b",0)==0 || x.indexOf("s",0)==0 )
{
    filtered.push(x)
}

    })
    console.log(filtered)
var i=0;

    fruits.forEach(function (x) {

    for(i=0;i<filtered.length;i++)
    {
        if(filtered[i]==x){
            console.log (x)
        }
    }

}    )

////////////////////////////////////////////