// ASYNC / AWAIT -> 

//                 error handling - try/catch block




/*
// async function always returns a promise
const example = async () => {
  return "Hello There!";
};

console.log(example());

// await waits until the promise is settled
async function someFunc() {
  const result = await example();
  console.log(result);
  console.log("Hello, World!")
}

someFunc();
*/






const users = [
  {id: 1, name: "John"},
  {id: 2, name: "Susan"},
  {id: 3, name: "Anna"}
];


const articles = [
  {userId: 1, articles: ["one", "two", "three"]},
  {userId: 2, articles: ["four", "five"]},
  {userId: 3, articles: ["six", "seven", "eight", "nine"]}
];


// getUser("John")
//   .then(user => getArticles(user.id))
//   .then(articles => console.log(articles))
//   .catch(error => console.log(error));




getArticlesOf("Susan");





async function getArticlesOf(userName) {
  try {
    const user = await getUser(userName);
    const articles = await getArticles(user.id);
    console.log(articles);
  } 
  catch(error) {
    console.log(error);
  }


}

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);

    if (user) {
      resolve(user);
    } else {
      reject(`No such user with name: ${name}`);
    }
  });
}


function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const user = articles.find((user) => user.userId === userId);

    if (user) {
      return resolve(user.articles);
    } else {
      reject("Wrong ID")
    }
  })
}