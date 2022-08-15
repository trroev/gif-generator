const img = document.querySelector("img");
const randomBtn = document.querySelector(".random");
const searchBtn = document.querySelector(".search-button");

const fetchCats = () => {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=QmEZnA0ikkQ9kaMMYQWPOgt4xBDtdK5P&s=nic-cage-AND-nicolas-cage",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((err) => {
      console.log("There was an error with the fetch request");
    });
};

fetchCats();

randomBtn.addEventListener("click", (e) => {
  fetchCats();
});