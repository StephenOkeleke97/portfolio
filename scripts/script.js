let darkTheme =
  localStorage.getItem("darkTheme") === null
    ? true
    : convertStringToBoolean(localStorage.getItem("darkTheme"));

const body = document.body;
const nav = document.querySelector(".navTab");
const toggleTheme = document.querySelector(".themeButton");
const toggleBall = document.querySelector(".toggle");
const emailIcom = document.querySelector(".icon");
const footer = document.getElementsByTagName("footer")[0];
const header = document.getElementsByTagName("header")[0];
const projectHeader = document.querySelector(".projectsHeader");

toggleTheme.addEventListener("click", changeTheme);

function changeTheme() {
  toggleBall.classList.toggle("toggleLight");
  header.classList.toggle("headerLight");
  this.classList.toggle("themeButtonLight");
  
  if (projectHeader === null) {
    body.classList.toggle("bodyLight");
    emailIcom.classList.toggle("iconLight");
    nav.classList.toggle("navTabLight");
    footer.classList.toggle("footerLight");
  }

  changeEducationTheme(!darkTheme);
  changeProjectsTheme();
  changeExperienceTheme();

  localStorage.setItem("darkTheme", !darkTheme);
  darkTheme = !darkTheme;
}

function changeEducationTheme(darkTheme) {
  const educationPaneContainer = document.querySelector(".paneContainer");
  const educationPanes = document.querySelectorAll(".panes");
  const schoolLogo = document.querySelector(".schoolImage");

  if (educationPaneContainer !== null) {
    educationPaneContainer.classList.toggle("paneBlackContainer");
    educationPanes.forEach((item) => {
      item.classList.toggle("paneBlack");
    });

    if (darkTheme) {
      schoolLogo.src = "./images/northeasternLogo.png";
    } else {
      schoolLogo.src = "./images/northeasternLogoBlack.png";
    }
  }
}

function changeProjectsTheme() {
  const projectFooter = document.querySelector(".yellowFooter");
  const projectContainer = document.querySelector(".projectsContainer");
  const projectItemContainer = document.querySelectorAll(".projectItemContainer");

  if (projectHeader !== null) {
    projectHeader.classList.toggle("projectsHeaderLight");
    projectFooter.classList.toggle("yellowFooterLight");
    projectContainer.classList.toggle("projectsContainerLight");
    projectItemContainer.forEach(item => {
        item.classList.toggle("projectItemContainerLight");
    });
  }
}

function changeExperienceTheme() {
    const skillItems = document.querySelectorAll(".skillItemIcons");
    const experiencePaneContainer = document.querySelector(".experiencePaneContainer");
    const experiencePanes = document.querySelectorAll(".experiencePanes");
    if (experiencePaneContainer !== null) {
        skillItems.forEach(item => {
            item.classList.toggle(".skillItemIconsLight");
        });
        experiencePaneContainer.classList.toggle("experiencePaneContainerBlack");
        experiencePanes.forEach((item) => {
          item.classList.toggle("paneBlack");
        });
    }
}

function loadTheme() {
  if (!darkTheme) {
    toggleBall.classList.add("toggleLight");
    header.classList.add("headerLight");
    toggleTheme.classList.add("themeButtonLight");

    if (projectHeader === null) {
        body.classList.add("bodyLight");
        nav.classList.add("navTabLight");
        emailIcom.classList.add("iconLight");
        footer.classList.add("footerLight");
    }

    changeEducationTheme(darkTheme);
    changeProjectsTheme();
    changeExperienceTheme();
  }
}

function convertStringToBoolean(string) {
  return string.trim().toLowerCase() === "true";
}

loadTheme();
