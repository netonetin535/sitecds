fetch('cds.json')
  .then(res => res.json())
  .then(cds => {
    const container = document.getElementById('cd-container');
    cds.forEach(cd => {
      const card = document.createElement('div');
      card.className = 'cd-card';
      card.innerHTML = `
        <img class="cd-cover" src="${cd.capa}" alt="${cd.titulo}">
        <div class="cd-info">
          <div class="cd-title">${cd.titulo}</div>
          <a class="download-button" href="${cd.arquivo}" download>
            <i data-lucide="download"></i> Baixar CD
          </a>
        </div>
      `;
      container.appendChild(card);
    });
  });
