let darkTheme =
  localStorage.getItem("darkTheme") === null
    ? true
    : convertStringToBoolean(localStorage.getItem("darkTheme"));

const body = document.body;
// const nav = document.querySelector(".navTab");
const nav = document.getElementsByTagName("nav")[0];
const toggleTheme = document.querySelectorAll(".themeButton");
const toggleBall = document.querySelectorAll(".toggle");
const emailIcom = document.querySelector(".icon");
const footer = document.getElementsByTagName("footer")[0];
// const header = document.getElementsByTagName("header")[0];
const projectHeader = document.querySelector(".projectsHeader");
const dateContainer = document.querySelector(".dateContainer");
const dateButton = document.querySelectorAll(".dateButton");
const mobileMenu = document.querySelector(".mobileNavMenu");
const mobileNavButton = document.querySelectorAll(".mobileNavIcon");

const webNav = document.querySelector(".navTabContainer");
const mobileNav = document.querySelector(".mobileNavContainer");

loadNav();

window.addEventListener("resize", handleWindowResize);

function handleWindowResize() {
  loadNav();
}

function loadNav() {
  if (window.innerWidth <= 700) {
    webNav.style.display = "none";
    mobileNav.style.display = "flex";
  } else {
    webNav.style.display = "flex";
    mobileNav.style.display = "none";
  }
}

toggleTheme.forEach(toggle => {
  toggle.addEventListener("click", changeTheme);
})

dateButton.forEach(button => {
  button.addEventListener("click", showDate);
})

mobileNavButton.forEach(button => {
  button.addEventListener("touchend", toggleMenu);
});

function toggleMenu() {
  const navMenu = document.querySelector(".mobileNavTab");

  if (navMenu.classList.contains("mobileNavOpen")) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  navMenu.classList.toggle("mobileNavOpen");
}

function showDate() {
  let dateRadio;
  if (window.innerWidth <= 700) {
    dateRadio = document.getElementById("date-mobile");
  } else {
    dateRadio = document.getElementById("date");
  }

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
  let dateElement = document.querySelectorAll(".dateText");
  const dateContainer = document.querySelectorAll(".dateContainer");

  console.log(dateElement);
  console.log(display);

  if (dateElement.length <= 0) {
    dateElement = document.createElement("p");
    dateElement.classList.add("dateText");
    dateElement.innerText = display;
    dateContainer.forEach(container => {
      container.prepend(dateElement);
    })
  } else {
    dateElement.forEach(element => {
      element.innerText = display;
    })
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
  toggleBall.forEach(ball => {
    ball.classList.toggle("toggleLight");
  })
  // header.classList.toggle("headerLight");
  dateButton.forEach(button => {
    button.classList.toggle("dateButtonLight");
  });
  toggleTheme.forEach(toggle => {
    toggle.classList.toggle("themeButtonLight");
  });
  mobileMenu.classList.toggle("mobileNavMenuLight");

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
  const projectNav = document.querySelector(".pnav");

  if (projectHeader !== null) {
    projectHeader.classList.toggle("projectsHeaderLight");
    projectFooter.classList.toggle("projectsFooterLight");
    projectContainer.classList.toggle("projectsSectionLight");
    projectItemContainer.forEach((item) => {
      item.classList.toggle("projectItemContainerLight");
    });
    projectNav.classList.toggle("projectsNav");
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
  const body = document.querySelector(".noDisplay");
  body.classList.remove("noDisplay");
}

function convertStringToBoolean(string) {
  return string.trim().toLowerCase() === "true";
}

loadTheme();
