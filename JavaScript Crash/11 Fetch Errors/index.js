const url = "https://www.course-api.com/react-tours-projects";


async function getTours() {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`There was an error: ${resp.status}`);
    }

    const tours = await resp.json();
    console.log(tours);
  }
  catch(error) {
    console.log(error);
  }
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", getTours);