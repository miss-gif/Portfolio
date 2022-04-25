// 헤더 영역
const language = document.querySelector(".language"); // 언어 버튼
const panel = document.querySelector(".panel"); // 언어 설정 버튼

language.addEventListener("click", function () {
  panel.classList.toggle("hidden");
});

// 사이드 퀵 메뉴 제어
const sideSlide = document.querySelectorAll("ul.slide_number>li"); // 사이드 퀵 슬라이드 버튼

sideSlide[0].addEventListener("click", function () {
  sideSlide[0].classList.add("onClick");
  sideSlide[1].classList.remove("onClick");
  sideSlide[2].classList.remove("onClick");
  sideSlide[3].classList.remove("onClick");
  sideSlide[4].classList.remove("onClick");
});

sideSlide[1].addEventListener("click", function () {
  sideSlide[0].classList.remove("onClick");
  sideSlide[1].classList.add("onClick");
  sideSlide[2].classList.remove("onClick");
  sideSlide[3].classList.remove("onClick");
  sideSlide[4].classList.remove("onClick");
});

sideSlide[2].addEventListener("click", function () {
  sideSlide[0].classList.remove("onClick");
  sideSlide[1].classList.remove("onClick");
  sideSlide[2].classList.add("onClick");
  sideSlide[3].classList.remove("onClick");
  sideSlide[4].classList.remove("onClick");
});

sideSlide[3].addEventListener("click", function () {
  sideSlide[0].classList.remove("onClick");
  sideSlide[1].classList.remove("onClick");
  sideSlide[2].classList.remove("onClick");
  sideSlide[3].classList.add("onClick");
  sideSlide[4].classList.remove("onClick");
});

sideSlide[4].addEventListener("click", function () {
  sideSlide[0].classList.remove("onClick");
  sideSlide[1].classList.remove("onClick");
  sideSlide[2].classList.remove("onClick");
  sideSlide[3].classList.remove("onClick");
  sideSlide[4].classList.add("onClick");
});

// 스크롤 다운 버튼 제어
// 스크롤 다운 버튼 제어
// 스크롤 다운 버튼 제어
// 스크롤 다운 버튼 제어
// 스크롤 다운 버튼 제어

const scrollDown = document.querySelector(".scrollDown"); // 스크롤 다운 btn

scrollDown.addEventListener("click", scrollDownOnClick);

function scrollDownOnClick() {
  let OnClickCount = 0;
  OnClickCount += 1000;
  // alert(OnClickCount);
  window.scrollTo({
    top: 1000,
  });
}

// 스크롤 다운 버튼 제어
// 스크롤 다운 버튼 제어
// 스크롤 다운 버튼 제어
// 스크롤 다운 버튼 제어
// 스크롤 다운 버튼 제어

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     scrollDown.style.display = "none";
//   } else {
//     scrollDown.style.display = "block";
//   }
// }

// 스크롤 위치 감지
// 스크롤 위치 감지
// 스크롤 위치 감지
// 스크롤 위치 감지
// 스크롤 위치 감지
// 스크롤 위치 감지
// 스크롤 위치 감지
// 스크롤 위치 감지

function detectBottom() {
  var scrollTop = $(window).scrollTop();
  var innerHeight = $(window).innerHeight();
  var scrollHeight = $("body").prop("scrollHeight");
  if (scrollTop + innerHeight >= scrollHeight) {
    return true;
    alert("맨 밑");
  } else {
    return false;
  }
}

function detectTop() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop == 0) {
    return true;
  } else {
    return false;
  }
}

// https: window.addEventListener("scroll", () => {
//   //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
//   console.log(window.scrollX, window.scrollY);
//   if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 20) {
//     // language.style.display = "none";
//   } else {
//     // language.style.display = "block";
//   }
// });

// 스크롤 위치 감지
// 스크롤 위치 감지
// 스크롤 위치 감지
// 스크롤 위치 감지
// 스크롤 위치 감지
// 스크롤 위치 감지

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
}, 12000);

// section4 프로젝트
