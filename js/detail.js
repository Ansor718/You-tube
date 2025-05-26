let params = new URLSearchParams(window.location.search);
let wrapper = document.querySelector(".video_left");
let id = params.get("id");
let videoHTML = document.getElementById("videoHTML");
let element = videoData.find((el) => el.id === Number(id));

console.log(element);
console.log(element.src);

videoHTML.innerHTML = `
        <iframe style="" width="914" height="514" src="${element.src}" title="Tirik kitob" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        

    `;

let rightVideo = document.querySelector(".hero-ul");

rightVideo.insertAdjacentHTML(
  "beforeend",
  `
    <li class="hero-li">
        <a href="./detail.html?id=${element.id}"><img class="hero__img" style="border-radius: 20px" width="400px" src="${element.thumbnail}" alt="" /></a>

        <div class="hero-div">  
          <div class="vd">
            <img class="imghero" class="hero__profile-img" src="${element.channelPhoto}" alt="" />
          </div>

          <div>
            <h4 class="hero-new-attack-h4" style="width: 281px;">
              ${element.title}<br />
            </h4>
            <p class="cbs-news-p">${element.channel} <br />${element.views}  ${element.uploaded}</p>
          </div>
        </div>
      </li>
  `
);

let like = document.querySelector(".like");

like.addEventListener("click", function () {
  like.classList.toggle("active");
});

let subcribe = document.querySelector(".subscribe-btn");

subcribe.addEventListener("click", function () {
  subcribe.classList.toggle("ansor");
});
