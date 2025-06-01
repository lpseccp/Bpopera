// Passivo.js

export function render(container) {
  container.innerHTML = `
    <h2>Passivo</h2>
    <form id="form-passivo">
      <label>Passivo Circulante: <input type="number" id="passivoCirculante" /></label><br/><br/>
      <label>Passivo Não Circulante: <input type="number" id="passivoNaoCirculante" /></label><br/><br/>
      <button type="submit">Calcular Total</button>
    </form>
    <div id="resultado-passivo"></div>
  `;

  document.getElementById('form-passivo').addEventListener('submit', (e) => {
    e.preventDefault();
    const circulante = parseFloat(document.getElementById('passivoCirculante').value) || 0;
    const naoCirculante = parseFloat(document.getElementById('passivoNaoCirculante').value) || 0;
    const total = circulante + naoCirculante;

    document.getElementById('resultado-passivo').innerHTML = `
      <p><strong>Total do Passivo:</strong> R$ ${total.toFixed(2)}</p>
    `;
  });
}
