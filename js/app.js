let elMenyu = document.querySelector(".menyu");
let sideBar = document.querySelector(".sidebar");
let heroUl = document.querySelector(".hero-ul");
let login = document.querySelector(".login");
let modal = document.querySelector(".modal");
let elClose = document.querySelector(".close");
let modalContent = document.querySelector(".modal_content");

elMenyu.addEventListener("click", function () {
  sideBar.classList.toggle("svag");
  heroUl.classList.toggle("goss");
});

function youTube(arr) {
  arr.forEach((el) => {
    heroUl.insertAdjacentHTML(
      "beforeend",
      `
      <li class="hero-li">
        <a href="./detail.html?id=${el.id}"><img class="hero__img" style="border-radius: 20px" width="400px" src="${el.thumbnail}" alt="" /></a>

        <div class="hero-div">  
          <div class="vd">
            <img class="imghero" class="hero__profile-img" src="${el.channelPhoto}" alt="" />
          </div>

          <div>
            <h4 class="hero-new-attack-h4" style="width: 281px;">
              ${el.title}<br />
            </h4>
            <p class="cbs-news-p">${el.channel} <br />${el.views}  ${el.uploaded}</p>
          </div>
        </div>
      </li>
    `
    );
  });

  const searchInput = document.querySelector(".search_input");

  searchInput.addEventListener("input", function () {
    const searchText = this.value.toLowerCase();
    const heroLI = document.querySelectorAll(".hero-li");

    heroLI.forEach((film) => {
      const videoTitle = film
        .querySelector(".hero-new-attack-h4")
        .textContent.toLowerCase();
      if (videoTitle.includes(searchText)) {
        film.style.display = "block";
      } else {
        film.style.display = "none";
      }
    });
  });
}

youTube(videoData);


let 


function filteredVideo() {
  let radioValues = [...allRadios]
    .filter((radio) => radio.checked)
    .map((el) => el.value);

  let checkboxvalues = [...allCheckboxes]
    .filter((checkbox) => checkbox.checked)
    .map((el) => el.value);

  let filteredByProduct = products.filter(function (product) {
    return (
      product.color === radioValues[0] ||
      checkboxvalues.some((mat) => product.materials.includes(mat))
    );
  });

  displayProduct(filteredVideo);
}
