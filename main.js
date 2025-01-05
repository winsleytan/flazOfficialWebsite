const subMenus = document.querySelectorAll(".sub-menu"),
  buttons = document.querySelectorAll(".sidebar ul button");

const onClick = (item) => {
  subMenus.forEach((menu) => (menu.style.height = "0px"));
  buttons.forEach((button) => button.classList.remove("active"));

  if (!item.nextElementSibling) {
    item.classList.add("active");
    return;
  }

  const subMenu = item.nextElementSibling,
    ul = subMenu.querySelector("ul");

  if (!subMenu.clientHeight) {
    subMenu.style.height = `${ul.clientHeight}px`;
    item.classList.add("active");
  } else {
    subMenu.style.height = "0px";
    item.classList.remove("active");
  }
};

//Button Hyperlink
document.getElementById('home').addEventListener('click', function() {
  window.location.href = './'; 
});

document.getElementById('gallary').addEventListener('click', function() {
  window.location.href = './public/gallary/index.html'; 
});

document.getElementById('register-page').addEventListener('click', function() {
  window.location.href = './public/projects/register.html'; 
});

document.getElementById('login-page').addEventListener('click', function() {
  window.location.href = './public/projects/login/index.html'; 
});

document.getElementById('online-ordering-page').addEventListener('click', function() {
  window.location.href = './public/projects/ordering-homepage.html';
});

document.getElementById('tictactoe').addEventListener('click', function() {
  window.location.href = './public/games/tictactoe/tictactoe.html'; 
});

document.getElementById('rockPaperScissors').addEventListener('click', function() {
  window.location.href = './public/games/rockPaperScissors/index.html'; 
});

document.getElementById('tower').addEventListener('click', function() {
  window.location.href = './public//games/towerBlocks/index.html'; 
});


document.getElementById('about').addEventListener('click', function() {
  window.location.href = './public/about/index.html'; 
});

document.getElementById('feedback').addEventListener('click', function() {
  window.location.href = './public/contact/index.html'; 
});

document.getElementById('github').addEventListener('click', function() {
  window.location.href = 'https://github.com/winsleytan/flazOfficialWebsite'; 
});

// glow
console.clear();

const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
  const overlayEl = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;

  overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
  const overlayCta = document.createElement("div");
  overlayCta.classList.add("cta");
  overlayCta.textContent = ctaEl.textContent;
  overlayCta.setAttribute("aria-hidden", true);
  overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const cardIndex = cards.indexOf(entry.target);
    let width = entry.borderBoxSize[0].inlineSize;
    let height = entry.borderBoxSize[0].blockSize;

    if (cardIndex >= 0) {
      overlay.children[cardIndex].style.width = `${width}px`;
      overlay.children[cardIndex].style.height = `${height}px`;
    }
  });
});

const initOverlayCard = (cardEl) => {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("card");
  createOverlayCta(overlayCard, cardEl.lastElementChild);
  overlay.append(overlayCard);
  observer.observe(cardEl);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask);

