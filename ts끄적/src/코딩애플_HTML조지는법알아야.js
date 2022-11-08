"use strict";
//document.getElementById()
//h4 글자바꾸기
let 제목 = document.querySelector("#title"); //왼쪽에 있는 요소가 element타입으로 사기치기
if (제목 != null) {
    제목.innerHTML = "반가워요";
}
// if (제목 instanceof Element) {
//   제목.innerHTML = "반가워요";
// }
// if (제목 != null) {
//   제목.innerHTML = "반가워요";
// }
// if (제목?.innerHTML != undefined) {
//   제목.innerHTML = "반가워요";
// }
//a태그의 속성 내용을 바꾸기
let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
//HeadingElement , ButtonElement, AnchorElement... 등 정확한 타입 구분🥸
let 버튼 = document.querySelector("#button");
