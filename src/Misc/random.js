const { useState } = require("react")

const [cart,setCart] = useState({})

const handleAdd = (item) => {
    if(!cart[item.id]){
    setCart((prevCart) => ({
        ...prevCart,
        [item.id] : {...item, 
        quantity: 1}
    }
    )
)
}
}


const quantityplus = (item) => {
    if(cart[item.id]){
        setCart((prevCart) => ({
            ...prevCart,
            [item.id] : {
                ...prevCart[item.id], 
                quantity: prevCart[item.id].quantity +1
            }
        }))
    }

}

const checkId = (item) => {
    if(cart[item.id]){
        return true;
    }
    else{
        return false;
    }
}

const removeId = (item) => {
    if(cart[item.id]){
        setCart((prevCart) => 
            {
            const newCart = {...prevCart};
            delete newCart[item.id];
            return newCart;
            }
        )
    }

}

const [quantityState, setQuantityState] = useState[0]

const addQuantity = (item) => {

    for( i=0; i<Object.keys(cart).length; i++){
        setQuantityState(i ) //cant use setState in a for loop for immutability
    }
}

const array = Object.keys(inventory)

const func = () => { 
    if(array.includes("laptop")){
        return true;
    }}

const shallowScores = Object.entries(scores);    
console.log(shallowScores);

const scores = { Alice: 85, Bob: 92, Charlie: 88 };

const arrayScore = Object.entries(scores);

const updatedScore = {};

arrayScore.forEach(([name,score],index) => {
    updatedScore[index+1] = {[name] : score}
});

function Count(obj){

    const shallowObj = obj.eys();

    return shallowObj.length;

}

function MaxVal(testScores) {

    tempScore = Object.values(testScores);

    let a = 0;

    for (i=0;i<tempScore.length;i++){
        if(a < tempScore[i]){
            a = tempScore[i]
        }
    }
    return a;

}






// Q7. Swap Keys and Values
// Write a function that takes an object and returns a new object with the keys and values swapped. Use Object.entries().

// Example:

// javascript
// Copy code
// const obj = { a: 1, b: 2, c: 3 };
// swapKeysAndValues(obj); 
// // Output: { 1: 'a', 2: 'b', 3: 'c' }

function swapKeysAndValues (obj) {

    tempObj = Object.entries(obj)

    let tempC = 0;

    UpdatedObj = {}

    for (i=0; i<tempObj.length; i++) {
        
        key = tempObj[i][1];
        value = tempObj[i][0];

        UpdatedObj[key] = value;
        }

    return UpdatedObj;

}


//for array
function swapKeysAndValues (obj) {

    tempObj = Object.entries(obj)

    let tempC = 0;


    for (i=0; i<tempObj.length; i++) {
        
        tempC = tempObj[i][0];
        tempObj[i][0] = tempObj[i][1];
        temp[i][1] = tempC;

    }

}

// Q8. Filter Keys by Condition
// Given the object:

// javascript
// Copy code
// const ages = {
//   Alice: 25,
//   Bob: 30,
//   Charlie: 18,
//   David: 15
// };

// Write a function that uses Object.entries() to return an array of names (keys) where the age (value) is greater than 18.

function CountKeys (obj) {

let shallowObj = Object.entries(obj);

 let updateArray = [];
    for ( i = 0; i< shallowObj.length; i++ ){

        if( shallowObj[i][1] > 18){
            updateArray.push(shallowObj[i])
        }

    }
    return updateArray;
}

// Q9. Group Values by Key Prefix
// Given the object:

// javascript
// Copy code
// const data = {
//   user_1: "Alice",
//   user_2: "Bob",
//   admin_1: "Charlie",
//   admin_2: "David"
// };
// Use Object.entries() to group the values into two arrays: one for users and one for admins.

function keyPrefix(data){
const shadllowData = Object.entries(data)
let shallowUser = [];
let shallowAdmin = [];

for ( i=0; i< shadllowData.length; i++){

    if(shadllowData[i][0].includes('user')){
        shallowUser.push(shadllowData[i][1])
    } 
    else{
        shallowAdmin.push(shadllowData[i][1])
    }
}
return { users: shallowUser, admins: shallowAdmin };
}

// Q10. Calculate Total Quantity
// Given the object:

// javascript
// Copy code
// const cart = {
//   apple: { quantity: 5, price: 10 },
//   orange: { quantity: 3, price: 20 },
//   banana: { quantity: 2, price: 5 }
// };
// Use Object.values() to calculate the total quantity of all items in the cart.

// [  apple: { quantity: 5, price: 10 },orange: { quantity: 3, price: 20 }, ]
function totalQuantity (cart){

    shallowCart = Object.values(cart)

    let total = 0;

    for (i =0 ; i<shallowCart.length; i++){

        total += shallowCart[i].quantity;

    }
    return total;
}