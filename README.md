# Animais Fantásticos

Projeto desenvolvido quase que inteiramente com **JavaScript puro**, com foco em **responsividade para mobile**, **acessibilidade** e inclusão de um **slide interativo** para uma melhor experiência do usuário.

---
## Funcionalidades

O projeto conta com várias interações e efeitos desenvolvidos em **JavaScript puro**, visando **melhor experiência de navegação**, **interatividade** e **acessibilidade**.

### ✅ Navegação e Menus

- **Dropdown Menu**: Exibe um submenu ao passar o mouse sobre a seção "Sobre" no menu inicial.
- **Menu Mobile**: Transforma o menu em um ícone de **menu hambúrguer** na versão mobile.
- **Tab Navigation**: Estrutura o menu principal da página usando abas (Tabs).
- **Outside Click**: Fecha menus abertos quando o usuário clica fora deles (ex: Dropdown).

### ✅ Interatividade e Feedback Visual

- **Scroll Anima**: Aplica a classe `ativo` nas seções visíveis conforme o usuário faz scroll pela página, criando um efeito de animação de entrada.
- **Scroll Suave**: Cria um efeito de **rolagem suave** (smooth scroll) ao clicar nos links de navegação interna da página.

### ✅ Conteúdo Dinâmico

- **Anima Números**: Anima os números de forma crescente e com valores randômicos até o valor final, criando um efeito de contagem.
- **Fetch Animais**: Faz uma requisição a uma **API de animais** e exibe os dados, usando o **Anima Números** para os valores.
- **Slide e SlideNav**: Criação de um **slide interativo** com navegação personalizada entre os itens.

### ✅ Acessibilidade e Experiência do Usuário

- **Funcionamento**: Exibe os **dias e horários de funcionamento**. Mostra um indicador visual:  
  - 🔴 Fechado  
  - 🟢 Aberto  

- **Tooltip**: Ao passar o mouse sobre o mapa, exibe um texto explicativo (ex: "Endereço próximo ao estacionamento").

### ✅ Modal e Interações com o Usuário

- **Modal**: Exibe respostas de perguntas frequentes (**FAQ**) em formato de janela modal.

### ✅ Performance

- **Debounce**: Evita múltiplas execuções desnecessárias de funções em eventos como o scroll, melhorando a performance.

---
## Como rodar o projeto localmente 

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. **Acesse a pasta do projeto:**

```bash
cd nome-da-pasta-do-projeto
```

3. **Abra o arquivo index.html no navegador:**

- Você pode abrir manualmente (clicando duas vezes no arquivo index.html dentro da pasta).
- Ou, se estiver usando o VS Code, pode utilizar a extensão Live Server para facilitar o desenvolvimento e ver as alterações em tempo real.

---
## Tecnologias utilizadas 🛠️

- **HTML5:** Estruturação do conteúdo.
- **CSS3:** Estilização e responsividade para diferentes tamanhos de tela (mobile e desktop).
- **JavaScript (ES6+):** Interatividade, manipulação de DOM, requisição de API e animações.
- **Acessibilidade (a11y):** Foco em navegação acessível, respeitando boas práticas de usabilidade.
- **Responsividade:** Layout adaptável a diferentes dispositivos (desktop, tablet e mobile).
- **API externa:** Consumo de dados de animais para exibição dinâmica de conteúdo.
- **Boas práticas de UX/UI:** Priorização da experiência do usuário com interfaces intuitivas, navegação fácil e elementos visuais claros.

---
## Autor

Desenvolvido por George Graciosa

---
## Licença 📄

Este projeto está licenciado sob a licença MIT.  
Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
