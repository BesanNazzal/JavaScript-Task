console.log("questione 1 ---------------------------");
let output1=""
for(i=1 ; i<=10 ; i++){
    output1+=i
}
console.log(" The numbers from 1 to 10 : " ,output1);

console.log("questione 2 ---------------------------");
let array =[ 1,2,3,4,5]
array.forEach(element => {
    console.log(element);
    
});
console.log("questione 3 ---------------------------");
for(i=0 ; i<=10  ; i++){
    if(i%2==0)
        console.log(i);
        
}
console.log("questione 4 ---------------------------");
let sum=0
for(i=1; i<=10  ; i++){
   sum+=i
      
}
console.log(" the summation of numbers from 1 to 10 = " ,sum);
console.log("questione 5 ---------------------------");

const array1= [1,2,3,4,5]
let largest =array1[0]
for(i=0;i<array1.length;i++){
    if (array1[i]>largest) {
        largest=array1[i]
        
    }
}
console.log("the largest number in array1 : " ,largest);
console.log("questione 6 ---------------------------");
let summation = 0
for(i=0;i<array1.length;i++){
    summation+=array1[i]
}
console.log(" the average of array = " , summation/array1.length);

console.log("questione 7 ---------------------------");
let num =5
let fact = 1 
for(i=1;i<=num;i++){
fact*=i
}
console.log(" the factorial of 5 = " ,fact);
console.log("questione 8 ---------------------------");
let x = 0
let y = 1
for (let i=0 ;i<10; i++){
 console.log(x);
 let fib = x  + y
 x = y
 y = fib
}
console.log("questione 9 ---------------------------");
for (let i=1 ;i<=20 ; i++){
    let count = 0
    for(let j=1 ;j<=i ; j++){
        if (i%j==0){
            count++
        }
        }
         if(count==2){
            console.log(i);
    }
}
console.log("questione 10 ---------------------------");
let twoDimArray = [[1,2,3],[4,5,6],[7,8,9]]
for ( i=0 ; i<twoDimArray.length ;i++){
    let str =" "
    for(let j=0 ; j < twoDimArray[i].length ; j++){
       str+=twoDimArray[i][j]+" "
    }
    console.log(str);
}
console.log("questione 11 ---------------------------");

let reverseArray = [1,2,3,4,5]
let revArr =""
for (let i = reverseArray.length-1 ; i>=0 ; i--){
    revArr+=reverseArray[i]+" "
}
console.log("array in reverse order : " , revArr);
console.log("questione 12 ---------------------------");

let stepArray = [1,2,3,4,5]
let step=2
let printStep =" "
for(let i = 0 ; i<stepArray.length ;i+=step){
printStep += stepArray[i] +" "
}
console.log(printStep);

console.log("questione 13 ---------------------------");

let frequencyArray = [1,2,1,3,2,1]
let freqNum = 1
let freq = 0 
for(let i=0 ; i< frequencyArray.length ; i++){
if(frequencyArray[i]==freqNum){
    freq++
}
}
console.log("the number  ", freqNum ," appear in array " , freq , " times ");

console.log("questione 14 ---------------------------");
const heros = [
    {name : 'Iron Man' , power : 'tech'} ,
    {name : 'Spider Man' , power : 'Spider Abilities '} ,
    {name : 'Thor' , power : 'Goldy powers '} ,
    {name : 'Hulk' , power : 'Super strength'} 
]
let z = 0 
for (key of  heros){
     key.hero = key.name
     delete key.name
     key.id=z
     z++
}
console.log("the new Heros : " , heros);
console.log("questione 15 ---------------------------");

function array7Char(array){
    return array.filter( e => e.length > 7)
}
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"]; 
console.log(array7Char(inputWords));
console.log("questione 16 ---------------------------");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let fiveDivArray = [ ]
for(let i in numbers){
    if (numbers[i]%5==0){
        fiveDivArray.push(numbers[i]*numbers[i])
    }
}

console.log("The sum of square the numbers divisible by 5  = " ,fiveDivArray.reduce((sum,e)=>sum+e,0));

