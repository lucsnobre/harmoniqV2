
# 🎶 HarmoniQ - Protótipo de Streaming de Música 🎶

**Projeto do Curso de Desenvolvimento de Sistemas - SENAI Jandira**

Bem-vindo ao HarmoniQ! Este é um protótipo de uma plataforma de streaming de música, desenvolvido como parte do curso de Desenvolvimento de Sistemas do SENAI Jandira. O objetivo foi criar uma experiência de usuário agradável e funcional, explorando o vibrante cenário do trap brasileiro e outros gêneros nacionais, tudo isso com uma interface inspirada na estética nostálgica "dark aero".

## ✨ Visão Geral do Projeto

O HarmoniQ nasceu da ideia de aplicar os conhecimentos adquiridos em sala de aula em um projeto prático e envolvente. A plataforma permite aos usuários (simulados) navegar por músicas, álbuns e artistas, descobrir novos sons, favoritar suas faixas preferidas e desfrutar de uma interface com um toque retrô moderno.

### 📸 Algumas Telas do HarmoniQ (Conceitual)

<table>
  <tr>
    <td align="center">
      <img src="https://placehold.co/600x400.png" alt="Tela Inicial do HarmoniQ com músicas e álbuns em destaque" data-ai-hint="homepage screenshot" />
      <br />
      <em>Página Inicial do site</em>
    </td>
    <td align="center">
      <img src="https://placehold.co/600x400.png" alt="Página de um artista no HarmoniQ mostrando sua foto, biografia e músicas" data-ai-hint="artist page screenshot" />
      <br />
      <em>Página de Detalhes de um Artista</em>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://placehold.co/600x400.png" alt="Página de busca do HarmoniQ com resultados para 'trap'" data-ai-hint="search results screenshot" />
      <br />
      <em>Resultados da Busca</em>
    </td>
    <td align="center">
      <img src="https://placehold.co/600x400.png" alt="Página de Favoritos do HarmoniQ" data-ai-hint="favorites page screenshot" />
      <br />
      <em>Suas Músicas Favoritas</em>
    </td>
  </tr>
</table>

## 🚀 Recursos Implementados

O HarmoniQ foi construído pensando em funcionalidades essenciais para uma plataforma de música:

*   **Navegação Intuitiva:** Explore músicas e álbuns em destaque na página inicial.
*   **Busca Abrangente:** Encontre músicas, álbuns ou artistas específicos.
*   **Páginas Detalhadas:**
    *   **Músicas:** Veja a capa, informações, ouça um trecho (simulado) e adicione aos favoritos.
    *   **Álbuns:** Explore a lista de faixas, arte do álbum e data de lançamento.
    *   **Artistas:** Conheça mais sobre os artistas, veja seus álbuns e músicas.
    *   **Lista de Artistas:** Uma página dedicada para navegar por todos os artistas cadastrados.
*   **Favoritos Personalizados:** Marque suas músicas preferidas e acesse-as facilmente.
*   **Estética Dark Aero:** Uma interface com um design elegante e nostálgico, inspirado no Windows 7/Vista, com um tema escuro predominante.
*   **Conteúdo em Português (BR):** Toda a plataforma traduzida para o nosso idioma.
*   **Foco no Trap Brasileiro:** A biblioteca de música (simulada) destaca artistas renomados do trap nacional.

## 🛠️ Como Foi Feito: O Processo de Desenvolvimento

Este projeto foi desenvolvido de forma iterativa, com um foco grande na prototipagem rápida e na experiência do usuário. Uma parte significativa do desenvolvimento contou com a colaboração de uma **IA Assistente de Prototipagem (App Prototyper do Firebase Studio)**, que auxiliou nas seguintes etapas:

1.  **Configuração Inicial:** Estruturação do projeto com Next.js e TypeScript.
2.  **Identidade Visual e UX:**
    *   Definição do nome "HarmoniQ".
    *   Tradução completa para Português (BR).
    *   Implementação do tema "Dark Aero", ajustando cores e estilos em `src/app/globals.css` e componentes ShadCN.
3.  **Construção do Catálogo Musical (Mock Data):**
    *   Criação de uma biblioteca de músicas, álbuns e artistas em `src/lib/api.ts`, com foco inicial no Trap Brasileiro (MC Cabelinho, Matuê, Alee, Teto, Veigh, Derek, MC Kevin, MC Paiva ZS, TZ da Coronel).
    *   Refinamento dos dados para garantir maior precisão nas informações (associação correta entre músicas e álbuns, etc.).
    *   Padronização do uso de imagens placeholder (`https://placehold.co/WIDTHxHEIGHT.png`) com atributos `data-ai-hint` para contexto.
4.  **Desenvolvimento das Páginas e Componentes:**
    *   Criação das rotas e páginas principais usando o App Router do Next.js (Home, Artistas, Álbuns, Músicas, Busca, Favoritos).
    *   Desenvolvimento de componentes reutilizáveis (`SongCard`, `AlbumCard`, `ArtistCard`, `Header`, `Footer`, `SearchBar`, `FavoriteButton`).
5.  **Funcionalidades Essenciais:**
    *   Implementação da lógica de busca e exibição de resultados.
    *   Criação do sistema de favoritos utilizando `localStorage` através do hook `useFavorites`.

A colaboração com a IA permitiu agilizar a escrita de código, a refatoração e a implementação de novas funcionalidades de forma conversacional e intuitiva.

## 💻 Tecnologias Utilizadas

O HarmoniQ é construído com um conjunto de tecnologias modernas e eficientes, amplamente utilizadas no mercado:

*   **Next.js (v15+):** Framework React para desenvolvimento web moderno, com foco em performance e experiência do desenvolvedor (utilizando o App Router).
*   **React (v18+):** Biblioteca JavaScript para construir interfaces de usuário dinâmicas e componentizadas.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática, aumentando a robustez e a manutenibilidade do código.
*   **Tailwind CSS:** Framework CSS utility-first para estilização rápida e customizável.
*   **ShadCN UI:** Coleção de componentes de UI reutilizáveis, acessíveis e estilizados com Tailwind CSS, que serviram de base para a interface.
*   **Genkit (Google AI):** Toolkit para desenvolvimento de funcionalidades com IA generativa. A configuração inicial (`src/ai/genkit.ts`) está pronta para futuras integrações, como recomendações personalizadas.
*   **Lucide Icons:** Biblioteca de ícones vetoriais leves e consistentes.
*   **LocalStorage:** Para persistência dos dados de favoritos no navegador do usuário.

## 🚀 Como Executar o Projeto Localmente

Para rodar o HarmoniQ na sua máquina:

1.  **Clone o repositório:**
    ```bash
    # Substitua pela URL correta se estiver em outro local
    git clone https://github.com/lucsnobre/FrontAPIMusica.git
    cd FrontAPIMusica
    ```

2.  **Instale as dependências:**
    Certifique-se de ter o Node.js e o npm (ou Yarn) instalados.
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Configure a API (Opcional):**
    O HarmoniQ usa dados mockados por padrão (`src/lib/api.ts`). Se você tiver uma API real, configure a variável de ambiente `NEXT_PUBLIC_MUSIC_API_URL`. Veja as instruções em `CONFIG.md`.

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
    Abra [http://localhost:9002](http://localhost:9002) (ou a porta indicada no seu terminal) no seu navegador para ver o resultado.

## 🧠 Aprendizados e Desafios

Durante o desenvolvimento do HarmoniQ, alguns aprendizados e desafios se destacaram:

*   **Gerenciamento de Estado no Cliente:** A implementação dos favoritos com `localStorage` e a sincronização do estado entre componentes.
*   **Estruturação de Dados:** Organizar e simular uma API de música de forma coesa.
*   **Estilização Consistente:** Manter a estética "Dark Aero" em todos os componentes e páginas.
*   **Colaboração com IA:** Explorar as capacidades de uma IA assistente para acelerar o desenvolvimento e aprender novas abordagens.

## 🙏 Agradecimentos

Este projeto é um reflexo do aprendizado e dedicação durante o curso de Desenvolvimento de Sistemas no **SENAI Jandira**. Um agradecimento especial aos instrutores e colegas pelo apoio e conhecimento compartilhado.

---

*Este README foi elaborado para documentar o projeto HarmoniQ, desenvolvido para fins educacionais.*
