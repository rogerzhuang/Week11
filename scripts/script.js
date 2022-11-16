function greet(user, time="day") {
    // console.log("Hello " + user);
    console.log(`Good ${time} ${user}`);
}

// const greet = function (user) {
//     // console.log("Hello " + user);
//     console.log(`Hello ${user}`);
// }

// const greet = (user) => {
//     // console.log("Hello " + user);
//     console.log(`Hello ${user}`);
// }

greet("Roger", "night");
greet("Ian");

function circleArea(radius) {
    let area = Math.PI*radius**2;
    return area;
}

// let r = prompt("Please input a number");
// let area = circleArea(r).toFixed(2);
// //alert(`The area of a circle with radius ${r} is ${area}`);

// let radiusPara = document.querySelector("#radius");
// radiusPara.textContent += `: ${r}`;
// let areaPara = document.querySelector("#result");
// areaPara.textContent += `: ${area}`;

let shoppingItems = ["cheese", "bread", "green pepper"];
const shoppingListElement = document.querySelector(".shopping");
function populateList (arr) {
    for (let item of arr) {
        let listItem = document.createElement("li");
        listItem.textContent = item;
        shoppingListElement.appendChild(listItem);
    }
}
populateList(shoppingItems);