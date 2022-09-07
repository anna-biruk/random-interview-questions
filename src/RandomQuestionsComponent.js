import {useState} from "react";

const questions = [
    "1. What is JavaScript?",
    "2. What is hoisting in JavaScript?",
    "3. What does the isNan() function do?",
    "4. What is negative infinity in JavaScript?",
    "5. What is an undeclared variable? How about an undefined variable?",
    "6. What types of popup boxes are there in JavaScript",
    "7. What is the difference between == and ===?",
    "8. What does implicit type coercion do? Give an example.",
    "9. Is JavaScript statically or dynamically typed language? What does this mean?",
    "10. What is NaN in JavaScript?",
    "11. What is the spread operator in JavaScript?",
    "12. What is a closure in JavaScript?",
    "13. How to handle exceptions in JavaScript?",
    "14. What Is web storage?",
    "15. Why do you need web storage?",
    "16. What are modules?",
    "17. What is meant by “scope” in JavaScript?",
    "18. What are higher-order functions in JavaScript?",
    "19. What is the “this” keyword in JavaScript?",
    "20. What does the .call() method do?",
    "21. What is the apply() method?",
    "22. What is the bind() method?",
    "23. What is currying?",
    "24. What is a promise in JavaScript?",
    "25. Why use promises?",
    "26. What is a callback function in JavaScript?",
    "27. Why use callbacks in JavaScript?",
    "28. What is a strict mode in JavaScript?",
    "29. What is an Immediately Invoked Function?",
    "30. What is a cookie?",
    "31. Why use strict mode in JavaScript?",
    "32. What does double exclamation do?",
    "33. How can you delete a property and its value?",
    "34. How can you check the type of a variable in JavaScript?",
    "35. What is null in JavaScript?",
    "36. Null vs undefined?",
    "37. Can you access history in JavaScript?",
    "38. What is a global variable?",
    "39. Does JavaScript relate to Java?",
    "40. What are JavaScript events?",
    "41. What does the preventDefault() method do?",
    "42. What is the setTimeout() method?",
    "43. What is the setInterval() method?",
    "44. What is ECMAScript?",
    "45. What is JSON?",
    "46. Where is JSON used?",
    "47. Why use JSON stringify?",
    "48. How can you convert JSON string to a JSON object?",
    "49. How can you assign a default value to a variable?",
    "50. Can you define properties for a function?",
    "51. What is the meaning of a race method in promises?",
    "52. What does promise.all() method do?",
    "53. What is the eval() function?",
    "54. What is event bubbling?",
    "55. What is the Temporal Dead Zone?",
    "56. What is URI?",
    "57. What is the DOM?",
    "58. Document load vs DOMContentLoaded?",
    "59. HTML Attribute vs DOM Property?",
    "60. What is the same-origin policy?",
    "61. Is JavaScript a compiled or interpreted language?",
    "62. Is JavaScript a case-sensitive language?",
    "63. How many threads are there in JavaScript?",
    "64. What does the “break” statement do?",
    "65. What does the “continue” statement do?",
    "66. What is a regular expression?",
    "67. What is the purpose of a breakpoint when debugging code?",
    "68. What is a conditional operator?",
    "69. Can you chain conditional operators?",
    "70. What does the freeze() method do?",
    "71. How can you get the list of keys of an object?",
    "72. What are JavaScript’s primitive data types?",
    "73. What ways are there to access properties of an object?",
    "74. How to execute JavaScript code after the page has loaded?",
    "75. What is an error object?",
    "76. What does the NoScript tag do?",
    "77. What is an entry controlled loop?",
    "78. What is an exit controlled loop?",
    "79. What is an anonymous function?",
    "80. What is an iterator?",
    "81. What is an iterable?",
    "82. What is a generator?",
    "83. What is a for of loop?",
    "84. What is nodejs?",
    "85. What is an event loop?",
    "86. What is a Unary Operator?",
    "87. How to sort elements of an array?",
    "88. What is TypeScript?",
    "89. What is a constructor in JavaScript?",
    "90. What is ES6?",
    "91. What are template literals?",
    "92. How can you swap two variables without a third?",
    "93. What is an ArrayBuffer?",
    "94. What is a prototype?",
    "95. What are arrow functions?",
    "96. What is the use of dir() method?",
    "97. How do you disable right-click on the web page?",
    "98. What is a unary function?",
    "99. What is a pure function?",
    "100. What is object destructuring?",
    "101. What Is an API?",
    "102. What Is a Lexical Environment?",
    "103. What Is the Epoch Time?",
]

const RandomQuestionsComponent = () => {
    const [randomQuestion, setRandomQuestion] = useState(Math.floor(Math.random() * questions.length))

    function getRandomItem() {
        const randomNumber = Math.floor(Math.random() * questions.length);
        setRandomQuestion(randomNumber)
    }

    return (
        <div style={{
            margin: "auto",
            padding: "10px"
        }}>
            <div style={{fontSize: "40px"}}>{questions[randomQuestion]}</div>
            <button
                style={{width: "200px", height: "40px", borderRadius: "20px", border: "1px solid gray", marginTop: 20}}
                onClick={getRandomItem}>Get next question
            </button>
        </div>
    )
}

export default RandomQuestionsComponent