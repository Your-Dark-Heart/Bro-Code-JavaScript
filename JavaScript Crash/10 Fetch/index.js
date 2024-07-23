// FETCH =>
//        returns a promise  
  


const url = "https://www.course-api.com/react-tours-project";


// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(JSON.stringify(data)));


async function getTours() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  catch(error) {
    console.error(`Error fetching data: ${error}`);
  }
}

// console.log(getTours());

getTours().then(value => console.log(value))