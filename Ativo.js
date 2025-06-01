// Ativo.js

export function render(container) {
  container.innerHTML = `
    <h2>Ativo</h2>
    <form id="form-ativo">
      <label>Ativo Circulante: <input type="number" id="circulante" /></label><br/><br/>
      <label>Ativo Não Circulante: <input type="number" id="naoCirculante" /></label><br/><br/>
      <button type="submit">Calcular Total</button>
    </form>
    <div id="resultado"></div>
  `;

  document.getElementById('form-ativo').addEventListener('submit', (e) => {
    e.preventDefault();
    const circulante = parseFloat(document.getElementById('circulante').value) || 0;
    const naoCirculante = parseFloat(document.getElementById('naoCirculante').value) || 0;
    const total = circulante + naoCirculante;

    document.getElementById('resultado').innerHTML = `
      <p><strong>Total do Ativo:</strong> R$ ${total.toFixed(2)}</p>
    `;
  });
}
