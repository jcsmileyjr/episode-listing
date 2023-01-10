/**
 * When the page loads, display the todo items
 * 1. Go get array of objects
 * 2. Use JS to display an input and label
 * 3. Use JS to display those inputs and label using data from the array
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");
    
    fetchData();
});

function fetchData() {
    fetch('../react-episode-listing/src/development-data/data.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let output = '<h2 class="mb-4">Countries</h2>'
        data.forEach(function (item) {
        output += `
        <ul class="list-group mb-3">
          <li class="list-group-item">Country: ${item.Country}</li>
          <li class="list-group-item">CODE: ${item.ISO2}</li>
        </ul>
      `
    })})
}