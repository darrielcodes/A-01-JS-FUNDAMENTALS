
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function sum(num1, num2) {
  return num1 + num2 + x
};

console.log('-----#1-----')
console.log(sum(1, 2))

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const sum2 = (num1, num2) => {
  return num1 + num2 + x
};

console.log('-----#2-----')
console.log(sum(2, 3))
// 3. Write a function that returns another function. (use arrow functions please)

const multiplyNum = (num1, num2, sum2) => {
  let total = sum2(num1, num2) * 2
  return total
};

console.log('-----#3-----')
console.log(multiplyNum(1, 2, sum2)) // (1 + 2 + 6) * 2 = 18

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log('-----#4-----')
console.log(getFunction()(2))

/*
4) Has access to y because the function insideFunc is being called inside of getFunction. Since the variable is not declared inside of insideFunc, it becomes useable.
*/
//------------------------------------------------------------
// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("Error was thrown");
  }
  
  return 'success'
};

const callbackFunc = () => {
  try {
    const result = couldThrowError();
    console.log(result)
  }
  catch (error) {
    console.log('Sorry, there was an error')
  }
}

console.log('-----#5-----')
callbackFunc()

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const newArr = userData.map((e) => {
  let newObj = {};
  // console.log(e.id, e.favorites.food)
  newObj = {
    id: e.id, 
    favoriteFoods: e.favorites.food
  }
  return newObj
});

console.log('-----#5 (map)-----')
console.log(newArr)
// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const reducedArr = newArr.reduce((e) => {
  let newArr = [];
  if(e.favoriteFoods === 'pizza') {
    console.log(e.id)
  }
  console.log(e)
  return newArr
})

console.log('-----#6--need help on this one---')
console.log(reducedArr)
// 7. Show an an example of a switch statement being used

const exampleSwitch = (x) => {

  switch (true){
    case x < 5:
      return 'x is less than 5';
    case x > 5:
      return 'x is greater than 5'
    default: 
      return x
  }
};
console.log('-----#7------')
console.log(exampleSwitch(6));
console.log(exampleSwitch(4));

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
  

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

let newUser = {
    ...userPersonalData,
    ...userGameData
  };

console.log('-----#8------')
console.log(newUser)


// 9. Make a copy of your new user object but override the birthday to december 31st

let updatedUser = {
  ...newUser,
  birthday: "December 31st"
}
console.log('-----#9------')
console.log(updatedUser)

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const onlyAccomplishments = []
onlyAccomplishments.push(...newUser.accomplishments);

console.log('-----#10------')
console.log(onlyAccomplishments)
//  11.Given the object below, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };

 const food = user.favoriteThings.food;
 console.log('-----#11------')
 console.log(food)
// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const first2Food = [];
first2Food.push(food[0], food[1])

console.log('-----#12------')
console.log(first2Food)
// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

// let userObj = {
//   name: data[0],
//   age: data[1],
//   food: ...data
// };

const userObj = (name, age, ...food) => {

  let name1 = name;
  let age1 = age;
  let foods = food;
  return name1, age1, foods
};

console.log('-----#13 need help on this one------')
console.log(userObj(data[0], data[1], data))

// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};

const userName = userInfo.name
const favoriteFood = userInfo.favorites.needs.food
const favoriteThing = userInfo.favorites.wants.things[0];
const secondfavoriteThing = userInfo.favorites.wants.things[1];
console.log('-----#14------')
console.log(userName);
console.log(favoriteFood);
console.log(favoriteThing);
console.log(secondfavoriteThing);

var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('-----#15------')
fetchData().then(res => console.log(res)).catch(error => console.log('There was an error'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const newFetch = async () => {
  try {
  const response = await fetchData();
  console.log(response)
  } catch (error) {
    console.log('There was an error')
  }
};

console.log('-----#16------')
newFetch();