//Your API key: Mm6x0RWuhHQ0gihVTJp0JXtNCviWh0PPoJXwfnnZQq80Ythr3DC1ueqO



// fetch("https://api.pexels.com/v1/search?query=dogs", {
//     headers: { Authorization: 'Mm6x0RWuhHQ0gihVTJp0JXtNCviWh0PPoJXwfnnZQq80Ythr3DC1ueqO' }
// })
//     .then((response) => response.json())
//     .then((json) => createBlocks(json))
//     .catch((err) => console.log('RequestFailed', err));

// function showResult(json) {
//     console.log(json);
//     let cards = Array.from(document.querySelectorAll(".card-img-top"));
//     let photograherName = Array.from(document.querySelectorAll(".card-body span"));

//     if (json.photos && json.photos.length > 0) {
//         cards.forEach((card, index) => {
//             card.src = json.photos[index].src.small;
//         });
//         photograherName.forEach((photograher, index) => {
//             photograher.innerHTML = json.photos[index].photographer;
//         });

//     } else {
//         console.log("Nessuna immagine trovata");
//     }
// }





document.getElementById("search-btn").addEventListener("click", () => {
    let search = document.getElementById("search").value;
    console.log(search)
    fetch("https://api.pexels.com/v1/search?query=" + search, {
        headers: { Authorization: 'Mm6x0RWuhHQ0gihVTJp0JXtNCviWh0PPoJXwfnnZQq80Ythr3DC1ueqO' }
    })
        .then((response) => response.json())
        .then((json) => createBlocks(json))
        .catch((err) => console.log('RequestFailed', err));
})


let photoContainer = document.getElementById("photo-container");
function createBlocks(json) {
    // delete old photos:
    document.querySelectorAll(".card").forEach(card => card.remove())
    // add new photos:
    if (json.photos && json.photos.length > 0) {
        json.photos.forEach((foto, index) => {
            let newBlock = document.createElement("div");
            newBlock.classList.add("card");
            newBlock.innerHTML =
                `<img src="${foto.src.tiny}" class="card-img-top object-fit-contain" alt="..." >
            <div class="card-body">
                 <p class="card-text">Photographer: <span class="">${json.photos[index].photographer}</span></p>
            </div>
        `;
            photoContainer.appendChild(newBlock);
        })
    } else {
        let newBlock = document.createElement("p");
        newBlock.classList.add("card");
        newBlock.innerText = "No result founded";
        photoContainer.appendChild(newBlock);
    }
}













// function showResult(json) {
//     console.log(json);
//     let cards = Array.from(document.querySelectorAll(".card-img-top"));
//     let photograherName = Array.from(document.querySelectorAll(".card-body span"));

//     if (json.photos && json.photos.length > 0) {
//         cards.forEach((card, index) => {
//             card.src = json.photos[index].src.small;
//         });
//         photograherName.forEach((photograher, index) => {
//             photograher.innerHTML = json.photos[index].photographer;
//         });

//     } else {
//         console.log("Nessuna immagine trovata");
//     }
// }