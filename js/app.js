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
        <a href="./detail.html?id=${el.id}"><img style="border-radius: 20px" width="400px" src="${el.thumbnail}" alt="" /></a>

        <div class="hero-div">  
          <div>
            <img src="${el.channelPhoto}" alt="" />
          </div>

          <div>
            <h4 class="hero-new-attack-h4">
              New attack targets U.S. base in Syria <br />
              following American airstrikes over
            </h4>
            <p class="cbs-news-p">CBS New <br />126K views • 2 hours ago</p>
          </div>
        </div>
      </li>
    `
    );
  });
}

youTube(videoData);
