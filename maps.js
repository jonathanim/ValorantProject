
const mapsArray = [
    {
        name: "Ascent",
        imgLoading: "images/Loading_Screen_Ascent.png",
        imgMap: "images/Ascent_minimap.png",
        location: "Venice, Italy"
    },
    {
        name: "Bind",
        imgLoading: "images/Loading_Screen_Bind.png",
        imgMap: "images/Bind_mini-map.png",
        location: "Rabat, Morocco"
    },
    {
        name: "Breeze",
        imgLoading: "images/Valorant_Loading_breeze.png",
        imgMap: "images/TX_Map_Foxtrot_fogOfWar.png",
        location: "Atlantic Ocean"
    },
    {
        name: "Haven",
        imgLoading: "images/Loading_Screen_Haven.png",
        imgMap: "images/Haven_mini-map.png",
        location: "Thimphu, Bhutan"
    },
    {
        name: "Icebox",
        imgLoading: "images/Loading_Icebox.png",
        imgMap: "images/Icebox_minimap_v1.14.png",
        location: "Sakha, Russia"
    },
    {
        name: "Range",
        imgLoading: "images/Loading_Screen_Range.png",
        imgMap: "images/Range_mini-map.png",
        location: "Range, Somewhere in Venice, Italy"
    },
    {
        name: "Split",
        imgLoading: "images/Loading_Screen_Split.png",
        imgMap: "images/Split_minimap_v0.50.png",
        location: "Shibuya,Tokio, Japan"
    }
]


const sectionMap = document.getElementById("mapSection");



window.addEventListener("DOMContentLoaded", function () {
    createMap(mapsArray)

})


function createMap(mapsArr) {

    let displayMap = mapsArr.map(function (singleMap) {
        return `<div class="col d-flex flex-wrap align-item-center text-center">
        <div class="card myCardMap">
        <div class="card-body">
        <h5 class="card-title fs-1">${singleMap.name}</h5>
        <p class="card-text fs-2">
        ${singleMap.location}
        </p>
        </div>
            <img src="${singleMap.imgLoading}" class="card-img-top img-fluid img-thumbnail" alt="${singleMap.name}">
         
            
            <img src="${singleMap.imgMap}" class="card-img-bottom img-fluid img-thumbnail" alt="${singleMap.name}">
         
        </div>
    </div>
        `}).join("");

    sectionMap.innerHTML = displayMap
}


