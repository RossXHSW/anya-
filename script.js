const loveButton = document.getElementById("loveButton");

loveButton.addEventListener("click", () => {
  alert("Люблю тебя:> ");
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
