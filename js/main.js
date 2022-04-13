// section1 메인화면

// 배너 슬라이드 번호를 누르면 보이는 화면 제어
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
