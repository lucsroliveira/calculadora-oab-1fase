document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCaptura");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const alunoData = {
      nome: document.getElementById("nome").value.trim(),
      email: document.getElementById("email").value.trim(),
      oab: document.getElementById("oab").value,
      prova: document.getElementById("prova").value
    };

    localStorage.setItem("alunoData", JSON.stringify(alunoData));

    window.location.href = "gabarito.html";
  });
});
