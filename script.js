fetch('cds.json')
  .then(res => res.json())
  .then(cds => {
    const container = document.getElementById('cd-container');

    cds.forEach(cd => {
      const card = document.createElement('div');
      card.classList.add('cd-card');

      card.innerHTML = `
        <img src="${cd.capa}" alt="${cd.titulo}" class="cd-cover">
        <div class="cd-info">
          <h3 class="cd-title">${cd.titulo}</h3>
          <a href="${cd.arquivo}" class="download-button" download>
            <i data-lucide="download"></i>
            Baixar CD
          </a>
        </div>
      `;

      container.appendChild(card);
    });

    // Ativa os ícones Lucide
    lucide.createIcons();
  })
  .catch(error => {
    console.error("Erro ao carregar CDs:", error);
  });
