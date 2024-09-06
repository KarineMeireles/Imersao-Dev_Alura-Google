function pesquisar() {
    const inputPesquisa = document.getElementById('inputPesquisa');
    const termoPesquisa = inputPesquisa.value.toLowerCase();
  
    const resultadosFiltrados = dados.filter(dado => {
      const nome = dado.nome.toLowerCase();
      const descricao = dado.descricao.toLowerCase();
      const ferramentas = dado.ferramentas.join(' ').toLowerCase();
      const linguagens = dado.linguagens.join(' ').toLowerCase();
  
      return nome.includes(termoPesquisa) ||
             descricao.includes(termoPesquisa) ||
             ferramentas.includes(termoPesquisa) ||
             linguagens.includes(termoPesquisa);
    });
  
    let resultados = "";
    resultadosFiltrados.forEach(dado => {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.nome.replace(new RegExp(termoPesquisa, 'gi'), match => `<b>${match}</b>`)}</a>
          </h2>
          <p>Segmento: ${dado.segmento}</p>
          <p>Descrição: ${dado.descricao}</p>
          <p>Ferramentas: ${dado.ferramentas.join(', ')}</p>
          <p>Linguagens: ${dado.linguagens.join(', ')}</p>
          <p>Responsável: ${dado.responsavel}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    });
  
    const sectionResultados = document.getElementById('resultados-pesquisa');
    sectionResultados.innerHTML = resultados;
  }
    
    