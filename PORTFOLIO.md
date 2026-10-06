# Portfólio do Rômulo

Site estático em português com HTML, CSS e JavaScript. Não exige instalação de dependências.

## Executar localmente

Na pasta do repositório:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abra a página servida na porta 8000 no seu navegador local. Interrompa o servidor com Ctrl+C.

## Personalizar

- `index.html`: apresentação, habilidades, contato e projeto de destaque.
- `styles.css`: cores, tipografia e estilos para desktop e celular.
- `script.js`: carrega até três repositórios públicos próprios, não arquivados, do GitHub; se a API estiver indisponível, mantém um link para o perfil.

As fontes usam Google Fonts, com fontes locais de reserva. O conteúdo principal funciona sem acesso à API do GitHub. O README original do perfil foi preservado. Informações sujeitas a mudanças, como idade e semestre, foram omitidas.

## Publicar

Este repositório pode hospedar o site via GitHub Pages. Depois de enviar os arquivos ao GitHub, configure **Settings → Pages → Deploy from a branch**, escolhendo a branch com o site e a pasta raiz. A publicação não foi realizada automaticamente.
