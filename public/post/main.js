//Button Hyperlink
document.getElementById('home').addEventListener('click', function() {
    window.location.href = '../backToHome.html'; 
  });
  
  document.getElementById('register-page').addEventListener('click', function() {
    window.location.href = '../projects/register.html'; 
  });
  
  document.getElementById('login-page').addEventListener('click', function() {
    window.location.href = '../projects/login/index.html'; 
  });
  
  document.getElementById('online-ordering-page').addEventListener('click', function() {
    window.location.href = '../projects/ordering-homepage.html';
  });
  
  document.getElementById('tictactoe').addEventListener('click', function() {
    window.location.href = '../games/tictactoe/tictactoe.html'; 
  });
  
  document.getElementById('rockPaperScissors').addEventListener('click', function() {
    window.location.href = '../games/rockPaperScissors/index.html'; 
  });
  
  document.getElementById('tower').addEventListener('click', function() {
    window.location.href = '../games/towerBlocks/index.html'; 
  });
  
  
  document.getElementById('about').addEventListener('click', function() {
    window.location.href = '../about/index.html'; 
  });
  
  document.getElementById('feedback').addEventListener('click', function() {
    var redirectWindow = window.open('https://docs.google.com/forms/d/e/1FAIpQLSdNS69oTTUbBuol9aEz7nttJ9MZeRUQ5pyRchDSsVDUV9YWIw/viewform', '_blank');
    redirectWindow.location;
  });
  
  document.getElementById('patch').addEventListener('click', function() {
    window.location.href = '../patchNotes/index.html'; 
  });
  
  document.getElementById('post').addEventListener('click', function() {
    window.location.href = './'; 
  });
  