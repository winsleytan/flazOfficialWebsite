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

document.getElementById('post').addEventListener('click', function() {
  window.location.href = './public/post/index.html'; 
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
  var redirectWindow = window.open('https://docs.google.com/forms/d/e/1FAIpQLSdNS69oTTUbBuol9aEz7nttJ9MZeRUQ5pyRchDSsVDUV9YWIw/viewform', '_blank');
  redirectWindow.location;
});

document.getElementById('patch').addEventListener('click', function() {
  window.location.href = './public/patchNotes/index.html'; 
});


function toggleSidebar() {
  // Get the sidebar element
  const sidebar = document.querySelector('.sidebar');
  const burgerButton = document.querySelector('.sidebar-burger');
  
  sidebar.classList.toggle('close');
  burgerButton.classList.toggle('close');
}
const modal = document.querySelector("#modal-container");

// Function to handle modal display
const handleClick = (buttonId) => {
  modal.classList = [];
  modal.classList.add(buttonId);
  document.body.classList.add("modal-active");
};

// Event listener to close modal on background click
modal.addEventListener("click", () => {
  modal.classList.add("out");
  document.body.classList.remove("modal-active");
});


// Select the checkbox input
const themeSwitcher = document.querySelector('.ui-switch input');

// Function to toggle theme
function toggleTheme() {
  if (themeSwitcher.checked) {
    // If checked, set dark theme
    document.body.style.backgroundColor = '#000A22'; // Dark background
    document.body.style.color = '#fff'; // Light text
  } else {
    // If not checked, set light theme
    document.body.style.backgroundColor = 'rgb(10, 38, 149)'; // Light background
    document.body.style.color = '#000'; // Dark text
  }
}

// Add event listener to the checkbox
themeSwitcher.addEventListener('change', toggleTheme);

// Initialize theme on page load
toggleTheme();


