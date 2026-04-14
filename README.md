# UDESC Maker — Plataforma de Projetos

Plataforma colaborativa para compartilhar projetos maker na UDESC e comunidade. Qualquer pessoa pode contribuir com um projeto enviando um Pull Request com um arquivo Markdown.

---

## 🚀 Como contribuir com um projeto

1. Faça um **fork** deste repositório
2. Dentro de `src/content/projects/`, crie uma pasta com o slug do seu projeto:
   ```
   src/content/projects/meu-projeto/
   ```
3. Copie o arquivo `layout-base.md` como ponto de partida e renomeie para `meu-projeto.md`
4. Preencha os campos do cabeçalho YAML e escreva o conteúdo do projeto
5. Coloque a imagem de capa em `public/thumbnails/` e os arquivos do projeto em `public/projetos/meu-projeto/`
6. Abra um **Pull Request** — após revisão e aprovação, o site é atualizado automaticamente

---

## 📁 Estrutura do projeto

```
/
├── public/
│   ├── images/              # Imagens globais do site (logo, hero, etc.)
│   ├── thumbnails/          # Imagens de capa dos projetos
│   └── projetos/
│       └── nome-do-projeto/ # Arquivos do projeto (imagens, PDFs, etc.)
│
├── src/
│   ├── components/
│   │   ├── CardProjeto.astro
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── content/
│   │   └── projects/
│   │       ├── layout-base.md   # Modelo para novos projetos
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── projetos.astro
│       ├── sobre.astro
│       ├── diretrizes.astro
│       ├── faq.astro
│       └── projects/
│           └── [id].astro
│
├── .github/
│   └── workflows/
│       ├── deploy.yml       # Build e deploy automático via GitHub Actions
└── content.config.ts
```

---

## 🛠️ Rodando localmente

```sh
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## 🧰 Stack

- [Astro](https://astro.build/) — gerador de site estático
- GitHub Pages — hospedagem
- GitHub Actions — build e deploy automático
- Markdown + YAML — formato dos projetos

---

## 📄 Campos disponíveis no projeto (.md)

| Campo | Obrigatório | Descrição |
|---|---|---|
| `visivel` | ✅ | `false` por padrão — mude para `true` ao publicar |
| `titulo` | ✅ | Nome do projeto |
| `autor` | ✅ | Nome do autor ou equipe |
| `resumo` | ✅ | Descrição curta (máx. 150 caracteres) |
| `idade_minima` | ✅ | Número (ex: `10`) |
| `duracao` | ✅ | Texto livre (ex: `"2 horas"`) |
| `dificuldade` | ✅ | `iniciante`, `intermediario` ou `avancado` |
| `categoria` | ✅ | Lista (ex: `["Eletrônica", "Arduino"]`) |
| `thumbnail` | ❌ | Caminho da imagem de capa |
| `tags` | ✅ | Lista de palavras-chave |
| `recursos` | ❌ | Lista de arquivos ou links externos |

---
