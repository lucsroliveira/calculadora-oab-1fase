document.addEventListener("DOMContentLoaded", async () => {
  const alunoData = JSON.parse(localStorage.getItem("alunoData"));
  if (!alunoData) {
    alert("Você precisa preencher o cadastro primeiro.");
    window.location.href = "index.html";
    return;
  }

  document.getElementById("tituloProva").innerText = 
    `Prova ${alunoData.prova.toUpperCase()} - Responda as Questões`;

  const resp = await fetch("gabarito.json");
  const gabarito = await resp.json();
  const questoes = gabarito[alunoData.prova];

  const form = document.getElementById("calcForm");

  Object.entries(questoes).forEach(([num]) => {
    const div = document.createElement("div");
    div.classList.add("questao");
    div.innerHTML = `
      <p>Questão ${num}:</p>
      ${["A","B","C","D","E"].map(letra =>
        `<label><input type="radio" name="q${num}" value="${letra}" required> ${letra}</label>`
      ).join(" ")}
    `;
    form.appendChild(div);
  });

  document.getElementById("finalizar").addEventListener("click", e => {
    e.preventDefault();
    let acertos = 0;
    let anuladas = 0;

    Object.entries(questoes).forEach(([num, resposta]) => {
      const sel = document.querySelector(`input[name="q${num}"]:checked`);
      const valor = sel ? sel.value : null;
      if (resposta === "X") {
        anuladas++;
      } else if (valor === resposta) {
        acertos++;
      }
    });

    document.getElementById("resultado").innerHTML = `
      <p><strong>${alunoData.nome}</strong> (${alunoData.email})</p>
      <p>Acertos: <strong>${acertos}</strong></p>
      <p>Anuladas: <strong>${anuladas}</strong></p>
      <p>Total: ${Object.keys(questoes).length}</p>
      <p>Percentual: <strong>${((acertos / Object.keys(questoes).length) * 100).toFixed(2)}%</strong></p>
      <p>Aluno OAB de Bolso: <strong>${alunoData.oab}</strong></p>
    `;
  });
});
