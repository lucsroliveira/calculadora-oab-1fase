
document.addEventListener("DOMContentLoaded", () => {
  const alunoData = JSON.parse(localStorage.getItem("alunoData"));
  const resultadoData = JSON.parse(localStorage.getItem("resultadoData"));

  if (!alunoData || !resultadoData) {
    alert("Dados não encontrados. Volte para o início.");
    window.location.href = "index.html";
    return;
  }

  let primeiroNome = alunoData.nome.split(" ")[0];

  primeiroNome = primeiroNome.charAt(0).toUpperCase() + primeiroNome.slice(1).toLowerCase();

  if (resultadoData.percentual > 2) {
        document.getElementById("resultado").innerHTML = `
        <p> Parabéns, <strong>${primeiroNome}</strong>!</p>  
        <hr>
        <p>Você acertos: <strong>${resultadoData.acertos} de ${resultadoData.total}</strong> questões!</p>
        <p>Seu percentual foi de: <strong>${resultadoData.percentual}%</strong></p>
        <p>Anuladas até agora: <strong>${resultadoData.anuladas}</strong></p>
    `;
  } else {
        document.getElementById("resultado").innerHTML = `
        <p>Olá, <strong>${primeiroNome}!</strong>
        <hr>
        <p>Você acertos: <strong>${resultadoData.acertos} de ${resultadoData.total}</strong> questões!</p>
        <p>Seu percentual foi de: <strong>${resultadoData.percentual}%</strong></p>
        <p>Anuladas até agora: <strong>${resultadoData.anuladas}</strong></p>
    `;
  }
  

});
