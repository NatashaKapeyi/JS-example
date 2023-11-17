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
let salary= 7000
let bonus= 2000
let perfomance = false
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
 let cnt =1
function repeat (limit) {
   
    if (cnt<=limit) {
        console.log(cnt);
        cnt    ++
        repeat(limit)
    }
}
repeat(10)