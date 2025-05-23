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

rightVideo.innerHTML = `
  <li class="hero-li">
                  <img src="./assets/Frame (5).svg" alt="" />

                  <div class="hero-div">
                    <div>
                      <img src="./assets/Image.svg" alt="" />
                    </div>

                    <div>
                      <h4 class="hero-new-attack-h4">
                        New attack targets U.S. base in Syria <br />
                        following American airstrikes over
                      </h4>
                      <p class="cbs-news-p">
                        CBS New <br />126K views • 2 hours ago
                      </p>
                    </div>
                  </div>
                </li>
`;

let like = document.querySelector(".like");

like.addEventListener("click", function () {
  like.classList.toggle("active");
});
