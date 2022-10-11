// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:


const displayDate = () => {
  const currentDate = new Date()


  document.getElementById("display-element").innerHTML = currentDate;
}

console.log(new Date)
 

// Write a JavaScript program to convert a number to a string.


const numToString = (n) => {
  console.log(`line 17 numToString: ${typeof(n)}`)
  const num = n.toString()
  console.log(`line 19 numToString: ${typeof(num)}`)

  document.getElementById('display-string').innerHTML = num; 
}

numToString(2);
  










// Write a JavaScript program to convert a string to the number.





const stringToNumber = (s) => {
  console.log(`line 26 stringToNumber: ${typeof(s)}`)

  const num = parseInt(s);
  
  console.log(`line 28 stringToNumber: ${num}`)
  
  console.log(`line 29 stringToNumber: ${typeof(num)}`)

  document.getElementById('display-number').innerHTML = num;
  
}

stringToNumber('ylime');


 



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  const dataTypes = (v) => {
    switch(typeof(v)) {
      case 'boolean':
        console.log(`${v} is a boolean!`)
        break;
      case null:
        console.log(`${v} is null!`)
        break;
      case undefined:
        console.log(`${v} is undefined!`)
        break;
      case 'number':
        console.log(`${v} is a number!`)
        break;
      case NaN:
        console.log(`${v} is not a number!`)
        break;
      case 'string':
        console.log(`${v} is a string!`)
        break;
      default:
        console.log(`I don't know what this is.`)
    }
  }
  
  dataTypes(NaN);
  
  

  
// Write a JavaScript program that adds 2 numbers together.

const addTwoNumbers = (num1, num2) => {

  const totalNum = num1 + num2; 

  return totalNum; 

  document.getElementById('additionNum').innerHTML = totalNum;
}

 var endValue = addTwoNumbers(44, 98);

console.log(endValue); 


// Write a JavaScript program that runs only when 2 things are true.

const twoThingsTrue = (boolean1, boolean2) => {

  if (boolean1 && boolean2 === true ){
 
    return true;
  } else {
    return undefined; 
  }
 }
 
  var endValue = twoThingsTrue(true, true);
 
 console.log(endValue); 

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneThingTrue= (boolean1, boolean2) => {

  if (boolean1 || boolean2 === true ){
 
    return true;
  } else {
    return undefined; 
  }
 }
 
  var endValue = oneThingTrue(true, false);
 
 console.log(endValue); 



// Write a JavaScript program that runs when both things are not true. 

const bothNotTrue = (boolean1, boolean2) => {

  if (boolean1 && boolean2 === false ){
 
    return true;
  } else {
    return undefined; 
  }
 }
 
  var endValue = bothNotTrue(false, false);
 
 console.log(endValue); 

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
