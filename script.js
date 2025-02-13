const loveButton = document.getElementById("loveButton");

loveButton.addEventListener("click", () => {
  alert("Люблю тебя:> ");
});

document.getElementById("title").innerText = "Аня, с Днем Святого Валентина!";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
