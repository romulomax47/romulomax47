'use strict';

document.getElementById('year').textContent = new Date().getFullYear();

async function loadProjects() {
  const status = document.getElementById('project-status');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch('https://api.github.com/users/romulomax47/repos?sort=updated&per_page=100', { signal: controller.signal });
    if (!response.ok) throw new Error(`GitHub: ${response.status}`);
    const repos = await response.json();
    const projects = repos.filter(repo => !repo.fork && !repo.archived && repo.name !== 'romulomax47').slice(0, 3);
    if (!projects.length) {
      status.textContent = 'Novos projetos vão ganhar espaço por aqui. Acompanhe meu perfil no GitHub.';
      return;
    }
    const list = document.getElementById('project-list');
    for (const repo of projects) {
      // Use textContent for API data so descriptions cannot inject markup.
      const card = document.createElement('article');
      card.className = 'project project-body repo-card';
      const label = document.createElement('p');
      label.className = 'eyebrow';
      label.textContent = 'REPOSITÓRIO PÚBLICO';
      const title = document.createElement('h3');
      title.textContent = repo.name;
      const description = document.createElement('p');
      description.textContent = repo.description || 'Código e detalhes disponíveis no repositório do projeto.';
      const bottom = document.createElement('div');
      bottom.className = 'project-bottom';
      const tags = document.createElement('div');
      tags.className = 'tags';
      const language = document.createElement('span');
      language.textContent = repo.language || 'GitHub';
      tags.append(language);
      const link = document.createElement('a');
      link.href = `https://github.com/romulomax47/${encodeURIComponent(repo.name)}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `Ver projeto ${repo.name} no GitHub`);
      link.textContent = '↗';
      bottom.append(tags, link);
      card.append(label, title, description, bottom);
      list.append(card);
    }
    status.textContent = 'Projetos públicos carregados diretamente do meu GitHub. Explore o código e acompanhe a evolução.';
  } catch {
    status.textContent = 'Você pode conferir meus projetos diretamente no GitHub pelo link abaixo.';
  } finally {
    clearTimeout(timeout);
  }
}

loadProjects();
