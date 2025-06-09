#  HarmoniQ - API de músicas

O **HarmoniQ**, um projeto desenvolvido como parte do curso técnico em Desenvolvimento de Sistemas no **SENAI Jandira**. O objetivo principal foi aplicar, na prática, os conhecimentos adquiridos em sala de aula, desenvolvendo uma plataforma web moderna, funcional e com uma proposta visual única.

---

##  Sobre o Projeto

O HarmoniQ é um protótipo de plataforma de streaming de música, inspirado em grandes serviços do mercado, porém com uma identidade visual própria e foco em música nacional, especialmente no **Trap Brasileiro**. Durante o desenvolvimento, busquei aliar a experiência do usuário com uma estética diferenciada — baseada no estilo **Dark Aero**, inspirado no visual do Windows 7/Vista — proporcionando uma navegação agradável, organizada e com forte apelo visual.

Todas as funcionalidades foram projetadas com atenção à usabilidade e ao design responsivo, garantindo que o site funcione bem em diferentes tamanhos de tela e dispositivos.

---

##  Funcionalidades Implementadas

O site conta com diversas páginas e componentes desenvolvidos com foco em modularidade e clareza de código. Entre os recursos principais, estão:

- **Página Inicial:** Com destaques de músicas e álbuns.
- **Busca Dinâmica:** Permite pesquisar músicas, artistas e álbuns.
- **Sistema de Favoritos:** Músicas podem ser marcadas como favoritas (armazenadas no `localStorage`).
- **Páginas Detalhadas:**
  - **Músicas:** Exibe detalhes da faixa, capa, e botão de favorito.
  - **Álbuns:** Mostra faixas e informações do álbum.
  - **Artistas:** Apresenta discografia e dados do artista.
  - **Catálogo Completo:** Uma lista com todos os artistas disponíveis.
- **Design Temático:** Interface escura com elementos translúcidos, fontes suaves e cores que remetem à estética Aero Glass.

---

## Processo de Desenvolvimento

Para o desenvolvimento do HarmoniQ, utilizei o framework **Next.js** com **React** e **TypeScript**, além de ferramentas modernas de estilização, como **Tailwind CSS** e **ShadCN UI**. Todo o conteúdo musical foi simulado com dados mockados, organizados manualmente e estruturados para representar com fidelidade um catálogo real.

As etapas do projeto incluíram:

1. **Criação da Identidade Visual:** Nome, logotipo, esquema de cores e estilo dos componentes.
2. **Modelagem de Dados:** Organização de músicas, álbuns e artistas com associação coerente.
3. **Desenvolvimento de Páginas:** Implementação das rotas e estruturação dos componentes.
4. **Interação e Estado:** Lógica de favoritos com `localStorage` e busca por palavra-chave.
5. **Refinamento e Testes:** Ajustes visuais, responsividade e correções de pequenos bugs.

---

## Tecnologias Utilizadas

- **Next.js (v15+)**
- **React (v18+)**
- **TypeScript**
- **Tailwind CSS**
- **LocalStorage (favoritos)**
- **Dados Mockados via API local**
