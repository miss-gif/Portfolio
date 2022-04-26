// 헤더 영역
// 헤더 영역
// 헤더 영역

const language = document.querySelector(".language"); // 언어 버튼
const panel = document.querySelector(".panel"); // 언어 설정 버튼

language.addEventListener("click", function () {
  panel.classList.toggle("hidden");
});

// common
// common
// common

window.addEventListener("scroll", () => {
  //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
  console.log(window.scrollX, window.scrollY);
});

// 사이드 퀵 메뉴 제어
window.addEventListener("scroll", 스크롤함수);
const sideSlide = document.querySelectorAll("ul.slide_number>li"); // 사이드 퀵 슬라이드 버튼

function 스크롤함수() {
  const sectionNum = document.querySelectorAll("section"); // 섹션 영역
  const scrollDown = document.querySelector(".scrollDown"); // 스크롤 다운 btn
  if (window.scrollY === sectionNum[0].offsetTop) {
    sideSlide[0].classList.add("onClick");
    sideSlide[1].classList.remove("onClick");
    sideSlide[2].classList.remove("onClick");
    sideSlide[3].classList.remove("onClick");
    sideSlide[4].classList.remove("onClick");
    scrollDown.addEventListener("click", scrollDownOnClick);
    function scrollDownOnClick() {
      window.scrollTo({ top: 1000 });
    }
  }
  if (window.scrollY === sectionNum[1].offsetTop) {
    sideSlide[0].classList.remove("onClick");
    sideSlide[1].classList.add("onClick");
    sideSlide[2].classList.remove("onClick");
    sideSlide[3].classList.remove("onClick");
    sideSlide[4].classList.remove("onClick");
    scrollDown.addEventListener("click", scrollDownOnClick);
    function scrollDownOnClick() {
      window.scrollTo({ top: 2000 });
    }
  }
  if (window.scrollY === sectionNum[2].offsetTop) {
    sideSlide[0].classList.remove("onClick");
    sideSlide[1].classList.remove("onClick");
    sideSlide[2].classList.add("onClick");
    sideSlide[3].classList.remove("onClick");
    sideSlide[4].classList.remove("onClick");
    scrollDown.addEventListener("click", scrollDownOnClick);
    function scrollDownOnClick() {
      window.scrollTo({ top: 3000 });
    }
  }
  if (window.scrollY === sectionNum[3].offsetTop) {
    sideSlide[0].classList.remove("onClick");
    sideSlide[1].classList.remove("onClick");
    sideSlide[2].classList.remove("onClick");
    sideSlide[3].classList.add("onClick");
    sideSlide[4].classList.remove("onClick");
    scrollDown.addEventListener("click", scrollDownOnClick);
    function scrollDownOnClick() {
      window.scrollTo({ top: 4000 });
    }
  }
  if (window.scrollY === sectionNum[4].offsetTop) {
    sideSlide[0].classList.remove("onClick");
    sideSlide[1].classList.remove("onClick");
    sideSlide[2].classList.remove("onClick");
    sideSlide[3].classList.remove("onClick");
    sideSlide[4].classList.add("onClick");
    scrollDown.addEventListener("click", scrollDownOnClick);
    function scrollDownOnClick() {
      window.scrollTo({ top: 0 });
    }
  }
}

// 스크롤 다운 버튼 제어

// section1 메인화면
// section1 메인화면
// section1 메인화면

// 하단 배너 슬라이드 번호를 누르면 보이는 화면 제어
const bannerNumber = document.querySelectorAll(".banner_number>li"); // 버튼 부분
const articleNumber = document.querySelectorAll(".main_view>article"); // 이미지 부분

bannerNumber[0].addEventListener("click", () => {
  bannerNumber[0].style.opacity = "1";
  bannerNumber[1].style.opacity = "0.3";
  bannerNumber[2].style.opacity = "0.3";
  bannerNumber[3].style.opacity = "0.3";
  articleNumber[0].style.visibility = "visible";
  articleNumber[1].style.visibility = "hidden";
  articleNumber[2].style.visibility = "hidden";
  articleNumber[3].style.visibility = "hidden";
});

bannerNumber[1].addEventListener("click", () => {
  bannerNumber[0].style.opacity = "0.3";
  bannerNumber[1].style.opacity = "1";
  bannerNumber[2].style.opacity = "0.3";
  bannerNumber[3].style.opacity = "0.3";
  articleNumber[0].style.visibility = "hidden";
  articleNumber[1].style.visibility = "visible";
  articleNumber[2].style.visibility = "hidden";
  articleNumber[3].style.visibility = "hidden";
});

bannerNumber[2].addEventListener("click", () => {
  bannerNumber[0].style.opacity = "0.3";
  bannerNumber[1].style.opacity = "0.3";
  bannerNumber[2].style.opacity = "1";
  bannerNumber[3].style.opacity = "0.3";
  articleNumber[0].style.visibility = "hidden";
  articleNumber[1].style.visibility = "hidden";
  articleNumber[2].style.visibility = "visible";
  articleNumber[3].style.visibility = "hidden";
});

bannerNumber[3].addEventListener("click", () => {
  bannerNumber[0].style.opacity = "0.3";
  bannerNumber[1].style.opacity = "0.3";
  bannerNumber[2].style.opacity = "0.3";
  bannerNumber[3].style.opacity = "1";
  articleNumber[0].style.visibility = "hidden";
  articleNumber[1].style.visibility = "hidden";
  articleNumber[2].style.visibility = "hidden";
  articleNumber[3].style.visibility = "visible";
});

// 3초마다 배너 이미지 변경
setInterval(() => {
  setTimeout(() => {
    bannerNumber[1].click();
  }, 0);
  setTimeout(() => {
    bannerNumber[2].click();
  }, 3000);
  setTimeout(() => {
    bannerNumber[3].click();
  }, 6000);
  setTimeout(() => {
    bannerNumber[0].click();
  }, 9000);
}, 2000);

// section4 프로젝트

// 검색창 구현 (타이틀)
function searchFunction() {
  const searchInput = document.getElementById("searchInput"); // 입력창
  const filter = searchInput.value.toUpperCase(); // 입력값, 문자열을 대문자로 변환한 값을 반환
  const ul = document.getElementById("search_result_ul"); // ul
  const li = ul.getElementsByTagName("li"); // li
  for (let i = 0; i < li.length; i++) {
    const searchWord = li[i].getElementsByTagName("h6")[0]; // li 안에 h6 태그 기준으로 검색 가능
    const wordValue = searchWord.textContent || searchWord.innerText; // textContent 공백을 포함한, innerText 공백을 제외한
    if (wordValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
