/*//addition button
const btnAdd= document.querySelector('[data-addition]')
const lblOutput = document.querySelector('#output')

function Addition(){
    let numb1= document.getElementById('numb1').
    value
    let numb2= document.getElementById('numb2').
    value
   // let sum = +numb1 + +numb2
    let sum =eval(`${numb1}+ ${numb2}`)
    lblOutput.textContent = sum
    btnAdd.addEventListener('click', Addition)
} */

//let data =[7,3,'Abc',2,1,9,'abc',6,-1]
//console.log(data.slice(2, 4))
//data.splice(3,0,'joel')
//console.log(data);
//data.splice(4,2)
//console.log(data);

/*let sentence= "I am going to work"
console.log(sentence);
console.log(sentence[0]);
console.log(sentence.length);
console.log(sentence.at(-1));
let size=sentence.length
console.log(sentence[size-1]);//show last element
console.log(sentence.slice(0,-1));
console.log(sentence);
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.includes('work'));
console.log(sentence);
console.log(sentence.split(""))
console.log(sentence);*/

/*let person ={
    name:'Peter',
    surname:'Shawn',
    age: 30,
    subjects:['HTML','CSS3','JavaScrpit']
}
console.log(person);
console.table(person);

//make use of the dot operator 
console.log(person.name);
//make use of square bracket 
console.log(person['surname']);
//if the key wasn't defined 
console.log(person['surnames']);
//with the dot operator 
console.log(person.subjects.at(-1))
//array of keys
console.log(Object.keys(person));
// array of values
console.log(Object.values(person));
//object: it does represent a thing, person or place
//Array: collection of data

/*Operators
arithmetic:+,/,*,++,-,-- 
assignment
comparison
logical
type*/
 
//Operator precedence
//console.log(7+2*5);

// First(**),(*),(+)
//let salary= 7000
//let bonus= 2000
//let perfomance = false
//if(salary> 5000){
   // console.log(salary+bonus);  
//}else {
 //   console.log(salary);
//}

/*if(salary< 5000) {
    console.log("your salary is below R5000");
}else if( salary > 5000){
    console.log(salary + bonus);
}else{
    console.log(`Your salary is ${salary}`);
}*/

//outer if statement 
/*if (salary > 5000){
    //Inner if statement    
   if (perfomance) {
    console.log(salary + bonus);
}else {
    console.log(`You didn't perform well\nYour salary is R${salary}`);
    } 
}else {
    console.log("Your salary is R5000");
}*/

/*let marks = 100
switch (marks) {
    case 100:
        console.log("A+");
        break;

    case 90:
        console.log("A");
        break;
        default:
            console.log("Other");
        break;
}*/

/*let firstName = "Lerato"
switch (firstName) {
    case "Lerato":
        console.log(`Your name is ${firstName}`)
        break;
        case "Joel":
            console.log(`Your name is ${firstName}`);

    default:
        console.log(`Your name is ${firstName}`);
        break;
}*/


 
/*let numbers=[9,8,3]
console.log(numbers);
console.log(typeof numbers);*/
 /*let cnt =1
function repeat (limit) {
   
    if (cnt<=limit) {
        console.log(cnt);
        cnt++
        repeat(limit)
    }
}
repeat(10)*/

 //Dynamic nature of an object
//  let person ={
//     firstName: 'John',
//     lastName:'Bruce'

//  }
 //console.log(person)
// person.firstName='Peter'//access property of an object to change the firstName
// console.log(person);
// person.age= 20
// console.log(person);

//constructor property 
// function NewRecord(name){
//     this.name =name 
// }
//     let person1 = new NewRecord('John');
//     let person2 = {name : 'Henk'};

//Constructor property 
// console.log(person1.constructor ===NewRecord);//True
 //It the same as using instanceOf
// console.log(person1 instanceof NewRecord);//True
//console.log(person2.constructor ===NewRecord);

//Functions are objects 
// let person ={
//     firstName: 'John',
//     lastName: 'Bruce',
//     fullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(person);
// console.log(person.fullName());

let person ={
    firstName:'John',
    lastName: 'Bruce',
    hrs:120,
    rate:500,
    salary:function(){
        return this.hrs * this.rate
    }
}
//console.log(person.salary());
// person.salary() // using return key allows us to keep it and  display it later

//looping through an object
// let laptop ={
//     make: 'Dell',
//     cpu: '3Ghz',
//     ram: '16GB'
// }
// for( const key in laptop); //displaying key values , for in allows us to get index
//console.log(key, '',laptop[key]);
 //console.log(laptop[key]);
// console.log(Object.keys(laptop));
// console.log(Object.values(laptop));
// Object.keys(laptop).forEach( (key)=>{console.log(`${key} -> ${laptop[key]}`);
// })
// Object.values(laptop).forEach( (value)=>{
//     console.log(`${value}`);
// })
 
// let car1 = {
//     make: 'Toyota',
//     year: 2023
// }
// let car2 = car1
// console.log("==car1==");
// console.log(car1);
// console.log("==car2==");
// console.log(car2);
// console.log("Change the value of car2");
// car2.year = 2024
// console.log(car1, car2);
//spread operator, object.assign(), JSON.parse()
// spread-copy without copying the reference of car 1   
// let car2 ={...car1}
// console.log(car1, car2);
// console.log("Change the value of car2");
// car2.year = 2024
// console.log(car1, car2);
 // object.assign()
// let car3=Object.assign({}, car1)
// console.log("===car3===");
// console.log(car3);
// let car4=JSON.parse(JSON.stringify(car1))
// console.log("===car4===");
// console.log(car4);
