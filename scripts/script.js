const body = document.body;
const nav = document.querySelector(".navTab");
const toggleTheme = document.querySelector(".themeButton");
const toggleBall = document.querySelector(".toggle");
const emailIcom = document.querySelector(".icon");
const footer = document.getElementsByTagName("footer")[0];

toggleTheme.addEventListener("click", changeTheme);

function changeTheme() {
    toggleBall.classList.toggle("toggleLight");
    body.classList.toggle("bodyLight");
    nav.classList.toggle("navTabLight");
    emailIcom.classList.toggle("iconLight");
    footer.classList.toggle("footerLight");
    this.classList.toggle("themeButtonLight")
}