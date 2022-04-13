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
const dateContainer = document.querySelector(".dateContainer");
const dateButton = document.querySelector(".dateButton");

toggleTheme.addEventListener("click", changeTheme);

dateButton.addEventListener("click", showDate);

function showDate() {
  const dateRadio = document.getElementById("date");

  const date = new Date();
  if (dateRadio.checked) {
    const display = date.toDateString();
    appendDate(display);
  } else {
    const display = date.toLocaleTimeString();
    appendDate(display);
  }
}

function appendDate(display) {
  const dateElement = document.querySelector(".dateText");
  const dateContainer = document.querySelector(".dateContainer");

  if (dateElement === null) {
    const dateElement = document.createElement("p");
    dateElement.classList.add("dateText");
    dateElement.innerText = display;
    dateContainer.prepend(dateElement);
  } else {
    dateElement.innerText = display;
  }
}

function changeTheme(event) {
  changeGeneralTheme();
  changeProjectsTheme();
  changeExperienceTheme();
  changeHomeTheme();

  if (event) {
    localStorage.setItem("darkTheme", !darkTheme);
    darkTheme = !darkTheme;
  }

  changeEducationTheme(darkTheme);
}

function changeGeneralTheme() {
  toggleBall.classList.toggle("toggleLight");
  header.classList.toggle("headerLight");
  dateButton.classList.toggle("dateButtonLight");
  toggleTheme.classList.toggle("themeButtonLight");

  if (projectHeader === null) {
    body.classList.toggle("bodyLight");
    emailIcom.classList.toggle("iconLight");
    nav.classList.toggle("navTabLight");
    footer.classList.toggle("footerLight");
    dateContainer.classList.toggle("dateContainerLight");
  }
}

function changeHomeTheme() {
  const connectButton = document.querySelector(".connectButton");

  if (connectButton !== null) {
    connectButton.classList.toggle("connectButtonLight");
  }
}

function changeEducationTheme(darkTheme) {
  const educationPaneContainer = document.querySelector(".paneContainer");
  const educationPanes = document.querySelectorAll(".panes");
  const educationItem = document.querySelectorAll(".educationItem");
  const courseworkContainer = document.querySelectorAll(".courseworkContainer");
  const schoolLogo = document.querySelector(".schoolImage");

  if (educationPaneContainer !== null) {
    educationPaneContainer.classList.toggle("paneBlackContainer");

    educationPanes.forEach((item) => {
      item.classList.toggle("paneBlack");
    });

    educationItem.forEach((item) => {
      item.classList.toggle("educationItemLight");
    });

    courseworkContainer.forEach((item) => {
      item.classList.toggle("courseworkContainerLight");
    });

    if (darkTheme) {
      schoolLogo.src = "./images/northeasternLogo.png";
    } else {
      schoolLogo.src = "./images/northeasternLogoBlack.png";
    }
  }
}

function changeProjectsTheme() {
  const projectFooter = document.querySelector(".projectsFooter");
  const projectContainer = document.querySelector(".projectsSection");
  const projectItemContainer = document.querySelectorAll(
    ".projectItemContainer"
  );

  if (projectHeader !== null) {
    projectHeader.classList.toggle("projectsHeaderLight");
    projectFooter.classList.toggle("projectsFooterLight");
    projectContainer.classList.toggle("projectsSectionLight");
    projectItemContainer.forEach((item) => {
      item.classList.toggle("projectItemContainerLight");
    });
  }
}

function changeExperienceTheme() {
  const skillItems = document.querySelectorAll(".skillItemIcons");
  const experiencePaneContainer = document.querySelector(
    ".experiencePaneContainer"
  );
  const experiencePanes = document.querySelectorAll(".experiencePanes");
  if (experiencePaneContainer !== null) {
    skillItems.forEach((item) => {
      item.classList.toggle("skillItemIconsLight");
    });
    experiencePaneContainer.classList.toggle("experiencePaneContainerBlack");
    experiencePanes.forEach((item) => {
      item.classList.toggle("paneBlack");
    });
  }
}

function loadTheme() {
  if (!darkTheme) {
    changeTheme();
  }
}

function convertStringToBoolean(string) {
  return string.trim().toLowerCase() === "true";
}

loadTheme();
