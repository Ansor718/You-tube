let elMenyu = document.querySelector(".menyu");
let sideBar = document.querySelector(".sidebar");
let heroUl = document.querySelector(".hero-ul");
let login = document.querySelector(".login");
let modal = document.querySelector(".modal");
let elClose = document.querySelector(".close");
let modalContent = document.querySelector(".modal_content");
let allCategory = document.querySelectorAll('.hero__right-list')

allCategory.forEach(el => {
  el.addEventListener('click', () => {

    if (el.textContent === 'All') {
      youTube(videoData)
      
    }else{
 console.log(el.textContent);


    let filterByCategory = videoData.filter(video => {

      return video.category === el.textContent
    }) 

     youTube(filterByCategory);
    }
   


   

  })
})



elMenyu.addEventListener("click", function () {
  sideBar.classList.toggle("svag");
  heroUl.classList.toggle("goss");
});

function youTube(arr) {
  heroUl.innerHTML = "";
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


// function filterVideos(category) {
//   const allVideos = document.querySelectorAll(".hero-li");

//   allVideos.forEach((video) => {
//     const title = video.querySelector("h4.hero-new-attack-h4").textContent.toLowerCase();

//     const foundData = video.dataset.category; // videoga category ni saqlaymiz
//     if (category === "All" || foundData === category) {
//       video.style.display = "block";
//     } else {
//       video.style.display = "none";
//     }
//   });
// }