// app.js

const routes = {
  ativo: '/src/components/pages/Ativo.js',
  passivo: '/src/components/pages/Passivo.js',
  pl: '/src/components/pages/PatrimonioLiquido.js',
  resultado: '/src/components/pages/Resultado.js',
  indicadores: '/src/components/pages/Indicadores.js'
};

async function navigate(route) {
  const content = document.getElementById('content');
  content.innerHTML = '<p>Carregando...</p>';

  try {
    const module = await import(routes[route]);
    content.innerHTML = '';
    module.render(content);
  } catch (error) {
    content.innerHTML = '<p>Erro ao carregar a página.</p>';
    console.error(error);
  }
}

// Carregar rota inicial
navigate('ativo');
