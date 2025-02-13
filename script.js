const loveButton = document.getElementById("loveButton");

loveButton.addEventListener("click", () => {
  alert("Спасибо, Анечка! Я очень рад!");
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}