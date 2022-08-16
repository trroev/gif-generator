const fetchGiphy = (query) => {
  const url =
    "https://api.giphy.com/v1/gifs/translate?api_key=QmEZnA0ikkQ9kaMMYQWPOgt4xBDtdK5P&s=";
  const img = document.querySelector("img");

  fetch(url + query, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((error) => {
      console.error("There was an error with the fetch request", error);
    });
};

fetchGiphy("nic-cage-AND-nicolas-cage");

const handleButtons = (() => {
  const randomBtn = document.querySelector(".random");
  const searchBtn = document.querySelector(".search-button");
  const input = document.querySelector("input");

  randomBtn.addEventListener("click", () => {
    fetchGiphy("nic-cage-AND-nicolas-cage");
  });

  searchBtn.addEventListener("click", () => {
    const searchInput = document.querySelector("#gif-search").value.split(" ").join("+").toLowerCase();

    fetchGiphy(searchInput);
  })

  input.addEventListener("keypress", (e) => {
    if(e.keyCode == 13) {
      searchBtn.click();
    }
  })
})();