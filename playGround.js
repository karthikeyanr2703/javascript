// console.log('hello world');
// console.log('my name is john 372 he is the don');
// name= 'siva ilama sakthi ila da'



// food=Number(prompt('how much is the food?'))
// tipPercent=0.2;
// tip=tipPercent*food;
// console.log(tip)
// alert(tip)
// total=tip+food;
// console.log(total)
// let weather=prompt('How is the weather?');
// if(weather=='rainy'){
//     console.log('Take your umbrella!')
// }
// else{
//     console.log('Take your sunglasses.')
// }


//functions

// function sayMyName(){
//     console.log("karthikeyan!");
// }
// sayMyName();
// function callMyName2(name){
//     console.log(name);
// }
// callMyName2("ram")

// function greet(name){
//     console.log(`hi ${name} ,how are you?`);
// }
// greet('don')


// function sum(a,b){
//     c=a+b;
//     return c;
// }
// let result=sum(1,3);
// console.log(result)
// alert(`result is ${result}`)

// function amount(food,tip){
//     let foodAmount=food;
//     let tipPercent=tip/100;
//     tipAmt=tipPercent*food;
//     let total=foodAmount+tipAmt;

//     return total;

// }
// console.log(amount(100,30));
// const arrowSum=(a,b)=> a+b
// console.log(arrowSum(1,5))

// const difference=(b,a)=>{
//     return(b-a);
// }
// console.log(difference(13,1))
// const vegetables=['cabbage','carrot','raddish'];
// console.log(vegetables)
// console.log(vegetables[2])
// vegetables.push('tomato')
// console.log(vegetables)
const groceries = ['🍌', '🍎', '🍊', '🍐']
// console.log(groceries)

// // grab the 2nd index
// console.log(groceries[2])

// // Array methods
// groceries.push('🍪')
// console.log(groceries)

// groceries.push('🫐')
// console.log(groceries)

// // Array Slice
// // start from 0 INCLUSIVE and UP to 6 [0, 1, 2, 3, 4, 5]
// console.log(groceries.slice(0, 6))
// console.log(groceries.slice(1,5))
// console.log(groceries.length)
// console.log(groceries.indexOf('🍪'))
// const person={
//     name:'John',
//     shirt:'white'
// }
// console.log(person.name)
// console.log(person.shirt)
// console.log(person['name'])
// console.log(person['shirt'])
// console.log(person)
// person.age=13;
// console.log(person)
// const person2={
//     name:'Quazi',
//     shirt:'black',
//     age:22
// }
// console.log(person2)

// const introducer=(name1,shirt1)=>
// {
//    const person={
//     name:name1,
//     shirt:shirt1,
//     money:43,
//     amt:456,
//     netWorth:function(){
//       return(this.amt-this.money)
//     }
//    }
//    const sentence=`hello my name is ${person.name} and color of my shirt is ${person.shirt}and ${person.netWorth()}`
//    return sentence
// }
// console.log(introducer('karthi','black'));
// for(let i=0;i<groceries.length;i++){
//    console.log(i,groceries[i])
// }
// const num=[1,2,4,5];
// // for(const number of num){
// //    console.log(2*number)
// // }
// let d=[]
// for(let i=0;i<num.length;i++){
//    d.push(2*num[i])

// }
// console.log(d)
// var d=[]
// var double=(num)=>{

// for(var i=0;i<num.length;i++){
//    d.push(2*num[i])
// }

// return d
// }
// var r=double([1,3,5,6])
// console.log(r)
// console.log('hi')
// const countHowManyLetters=()=>{
//    var phrase=`how is my skill.`
//    for( var letter of phrase){
//       console.log(letter)
//    }

// }
// countHowManyLetters();
// const countLetters=(phrase)=>{
//    var result=phrase.length
//    return{result}
// var index=0;
// // }
// // var phrase=prompt('enter the phrase:')
// // console.log(countLetters(phrase))
// const countLetters=(phrase)=>{

//    for(var i=0;i<phrase.length;i++){
//       index=index+1;
//       console.log(i+1)
//    }
//    return{result:index}

// }
// var phrase=prompt('enter the phrase:')
// console.log(countLetters(phrase))

// var arr=[12,3,53,2,21];
// const max=(arr)=>{
//    var result=arr[0]
//  for(var number of arr){
//    if(number>result){
//       result=number
//    }

//  }
//  return {result}
// }
// var ans=max(arr)
// console.log(ans)
// const countLetter=(phrase)=>{
//   console.log(phrase)
//   var frequency={}
//   for(const letter of phrase){
//     if( letter in frequency){
//       frequency[letter]++
//     }
//     else{
//       frequency[letter]=1
//     }
//   }

//   return frequency;
// }
// console.log(countLetter("haha"))
// const filter = (numbers, greaterThan) => {
//   var arr = []
//   for (num of numbers) {

//     if (num > greaterThan) {
//       arr.push(num)
//     }
//   }
//   return arr;

// }
// var result = filter([1, 2, 3], 1)
// console.log(result)
console.log([2,4,6,8].map(number=>number+1))