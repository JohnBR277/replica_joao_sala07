// Script simples para interação futura
document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".card button");

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Produto adicionado ao carrinho!");
    });
  });
});
