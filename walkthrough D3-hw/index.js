let imagesArr = [];

const loadImages = query => {
  // 563492ad6f9170000100000185deb760c4be4516ad5a6aaa973eef7c
  fetch("https://api.pexels.com/v1/search?query=" + query, {
    method: "GET",
    headers: { Authorization: "Bearer 563492ad6f9170000100000185deb760c4be4516ad5a6aaa973eef7c" },
  })
    .then(response => response.json())
    .then(dataObj => {
      // console.log(dataObj);
      // console.log(dataObj.photos);
      const pictures = dataObj.photos;

      imagesArr = [...pictures];

      const row = document.getElementById("myGrid");

      row.innerHTML = "";

      pictures.forEach(pic => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");

        col.innerHTML = `<div id=${pic.id} class="card mb-4 shadow-sm">
                                <img src=${pic.src.landscape} alt=${pic.alt}>
                            <div class="card-body">
                                <p class="card-text">
                                ${pic.alt}
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#exampleModal" onclick="handleModalView(event)">
                                            View
                                        </button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="handleHide(event)">
                                            Hide
                                        </button>
                                    </div>
                                    <a href="./details.html?picId=${pic.id}"><small class="text-muted">id: ${pic.id}</small></a>
                                </div>
                            </div>
                        </div>`;

        row.appendChild(col);
        // row.innerHTML += `<div class="col-md-4">
        //                     <div id=${pic.id} class="card mb-4 shadow-sm">
        //                         <img src=${pic.src.landscape} alt=${pic.alt}>
        //                         <div class="card-body">
        //                             <p class="card-text">
        //                             ${pic.alt}
        //                             </p>
        //                             <div class="d-flex justify-content-between align-items-center">
        //                                 <div class="btn-group">
        //                                     <button type="button" class="btn btn-sm btn-outline-secondary">
        //                                         View
        //                                     </button>
        //                                     <button type="button" class="btn btn-sm btn-outline-secondary" onclick="handleHide(event)">
        //                                         Hide
        //                                     </button>
        //                                 </div>
        //                                 <small class="text-muted">id: ${pic.id}</small>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>`;
      });
    });
};

window.onload = () => {
  loadImages("cats");

  console.log("LOADED IMGS", imagesArr);
};

// const handleHide = id => {
//   const card = document.getElementById(id);
//   card.parentElement.remove();
// };

const handleHide = event => {
  //   event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  event.target.closest(".col-md-4").remove();
};

const handleInput = event => {
  const searchQuery = event.target.value;

  const row = document.getElementById("myGrid");

  row.innerHTML = "";

  imagesArr
    .filter(pic => pic.alt.toLowerCase().includes(searchQuery.toLowerCase()))
    .forEach(pic => {
      const col = document.createElement("div");
      col.classList.add("col-md-4");

      col.innerHTML = `<div id=${pic.id} class="card mb-4 shadow-sm">
                                <img src=${pic.src.landscape} alt=${pic.alt}>
                            <div class="card-body">
                                <p class="card-text">
                                ${pic.alt}
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#exampleModal" onclick="handleModalView(event)">
                                            View
                                        </button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="handleHide(event)">
                                            Hide
                                        </button>
                                    </div>
                                    <a href="./details.html?picId=${pic.id}"><small class="text-muted">id: ${pic.id}</small></a>
                                </div>
                            </div>
                        </div>`;

      row.appendChild(col);
    });
};

const handleModalView = event => {
  const sourceImg = event.target.closest(".card").querySelector("img");

  const modal = document.getElementById("exampleModal");
  const modalBody = modal.querySelector(".modal-body");

  modalBody.innerHTML = "";

  const image = document.createElement("img");
  image.src = sourceImg.src;
  image.classList.add("img-fluid");

  modalBody.appendChild(image);
};
