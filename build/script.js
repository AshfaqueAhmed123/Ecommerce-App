const cards = document.querySelectorAll(".card");

cards.forEach((card, num) => {
  card.addEventListener("click", (e) => {
    window.location.href = "./pages/item.html";
  });
});
