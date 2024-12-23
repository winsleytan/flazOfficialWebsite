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
  window.location.href = './index.html'; 
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

document.getElementById('contact').addEventListener('click', function() {
  window.location.href = './public/contact/index.html'; 
});
