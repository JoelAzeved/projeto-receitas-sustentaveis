# Projeto Receitas Sustentáveis

Este é um projeto desenvolvido em React com TypeScript que permite buscar receitas utilizando frutas que você já possui, promovendo a sustentabilidade e a redução de desperdícios. O projeto utiliza a API da Cohere para gerar as receitas e inclui um carrossel de imagens com temas de sustentabilidade e aproveitamento de alimentos.

## Funcionalidades

- **Busca de Receitas**: O usuário pode inserir frutas que possui em casa e obter uma receita personalizada utilizando essas frutas.
- **Carrossel de Imagens**: Um carrossel com imagens relacionadas à sustentabilidade e dicas de como evitar o desperdício de alimentos.
- **Vídeo Educativo**: O carrossel também inclui um vídeo sobre sustentabilidade e meio ambiente.
- **Interface Responsiva**: A interface se ajusta bem a diferentes tamanhos de tela, incluindo dispositivos móveis.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Sass (SCSS)**: Utilizado para estilização de componentes de forma mais modular e organizada.
- **Cohere API**: API de inteligência artificial utilizada para gerar receitas com base nos ingredientes fornecidos.
- **Vite**: Ferramenta de build ultrarrápida para desenvolvimento de projetos com React.
- **Vitest e React Testing Library**: Para testes unitários dos componentes React.

## Instalação e Configuração

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passo a Passo

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/projeto-receitas-sustentaveis.git

```

2. Acesse o diretório do projeto:
   Entre na pasta do projeto recém-clonado:

```bash
cd projeto-receitas-sustentaveis
```

3. Instale as dependências:

```npm install ```

4. Crie um arquivo .env na raiz do projeto e adicione sua chave da API da Cohere. Isso permitirá que a aplicação utilize a API de receitas:

```VITE_COHERE_API_KEY=sua_chave_aqui```

5. Agora, execute o projeto localmente com o comando abaixo. O Vite compilará e servirá a aplicação em um servidor de desenvolvimento:
``` npm run dev```
