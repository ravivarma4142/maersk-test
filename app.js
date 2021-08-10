
// numbers object with color
let numbertiles = [
    {
        number: 1,
        color: "#6f98a8"
    },
    {
        number: 2,
        color: "#2b8ead"
    },
    {
        number: 3,
        color: "#2f454e"
    },
    {
        number: 4,
        color: "#2b8ead"
    },
    {
        number: 5,
        color: "#2f454e"
    },
    {
        number: 6,
        color: "#bfbfbf"
    },
    {
        number: 7,
        color: "#bfbfbf"
    },
    {
        number: 8,
        color: "#6f98a8"
    },
    {
        number: 9,
        color: "#2f454e"
    }
];

const shufflebtn = document.getElementById('shuffle');
const sortBtn = document.getElementById('sort');


//Shuffle button click 
shufflebtn.addEventListener("click", () => {
    let i = 0,
        j = 0,
        temp = null;
    for (i = numbertiles.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1)) //getting the random number between 0 and i-1 and swaping the object
        temp = numbertiles[i]
        numbertiles[i] = numbertiles[j]
        numbertiles[j] = temp
    };
    renderTiles(); //after swapping the object rending the tiles.
})

//Sort button click
sortBtn.addEventListener("click", () => {
    numbertiles.sort((a, b) => a.number - b.number);//sorting the number tiles
    renderTiles();//rendering the tiles after the sort
});

document.addEventListener("DOMContentLoaded", function () {
    renderTiles();
});

renderTiles = () => {
    var tilesContainer = document.getElementsByClassName("tiles-container");

    let tilesHtml = ''; //Creating the tiles html and based on the numberTiles and pushing into tiles container.
    numbertiles.forEach(eachTile => {
        tilesHtml += `<div class="col-md-31 col-xs-100 tile" style="background-color:${eachTile.color};border-left:5px solid ${eachTile.color}"> 
                        ${eachTile.number}
                        </div>`
    });
    tilesContainer[0].innerHTML = tilesHtml;
}