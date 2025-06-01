// PatrimonioLiquido.js

export function render(container) {
  container.innerHTML = `
    <h2>Patrimônio Líquido</h2>
    <form id="form-pl">
      <label>Capital Social: <input type="number" id="capitalSocial" /></label><br/><br/>
      <label>Reservas: <input type="number" id="reservas" /></label><br/><br/>
      <label>Lucros/Prejuízos Acumulados: <input type="number" id="lucrosAcumulados" /></label><br/><br/>
      <button type="submit">Calcular Total</button>
    </form>
    <div id="resultado-pl"></div>
  `;

  document.getElementById('form-pl').addEventListener('submit', (e) => {
    e.preventDefault();
    const capital = parseFloat(document.getElementById('capitalSocial').value) || 0;
    const reservas = parseFloat(document.getElementById('reservas').value) || 0;
    const lucros = parseFloat(document.getElementById('lucrosAcumulados').value) || 0;
    const total = capital + reservas + lucros;

    document.getElementById('resultado-pl').innerHTML = `
      <p><strong>Total do Patrimônio Líquido:</strong> R$ ${total.toFixed(2)}</p>
    `;
  });
}
