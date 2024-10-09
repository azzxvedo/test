# Alterações realizadas na versão final da `index.html`

## Ajustes principais:

1. **Navbar (barra de navegação)**:
   - A navbar foi mantida fixa no topo utilizando `fixed-top` e ajustada com uma cor de fundo usando a classe `bg-warning` do Bootstrap.
   - Adicionada a classe `shadow-sm` para aplicar uma leve sombra, melhorando o destaque visual da barra.
   - O botão de busca foi ajustado para utilizar a classe `btn-outline-light`, proporcionando um contraste claro na barra de navegação.

2. **Carousel**:
   - As imagens do carousel foram centralizadas e ajustadas para ocupar toda a largura (`w-100`), utilizando o sistema de classes do Bootstrap.
   - Foram mantidos os controles de navegação anteriores e próximos (`carousel-control-prev` e `carousel-control-next`), e ajustadas as descrições de acessibilidade (`alt`) das imagens.

3. **Cards de produtos**:
   - Os cartões de produtos foram organizados em uma estrutura de grid responsiva utilizando o sistema de colunas do Bootstrap (`col-md-6`).
   - Cada produto possui um botão "Saiba mais", que agora é gerenciado por um evento dinâmico utilizando JavaScript, eliminando a necessidade de modais duplicados no HTML.
   - As classes `text-center` e `h-100` foram adicionadas para centralizar o conteúdo dos cartões e garantir que todos tenham a mesma altura.

4. **Modal dinâmico**:
   - Apenas uma única modal foi mantida no HTML, com conteúdo sendo populado dinamicamente via JavaScript. Isso evita a repetição de código e facilita a manutenção futura.
   - Cada botão "Saiba mais" recebe um identificador único (`data-id`), permitindo que o modal seja preenchido com as informações corretas de cada produto.

5. **Conteúdo adicional**:
   - As seções "Cargas periféricas" e "Contatos" foram mantidas e ajustadas para utilizar classes de formatação como `text-center` e `text-warning` do Bootstrap, garantindo consistência visual.
   - Ícones de contato (`fa-envelope`) foram ajustados para serem exibidos em tamanho maior (`font-size: 2rem`), centralizados na página.

6. **Footer (rodapé)**:
   - O rodapé foi simplificado e estilizado com a classe `bg-info` para fornecer uma cor de fundo clara e texto centralizado.
   - A estrutura do rodapé foi mantida simples, com o texto de copyright alinhado ao centro.

7. **Inclusão de JavaScript**:
   - O arquivo `script.js` foi vinculado ao HTML para permitir a manipulação dinâmica da modal e facilitar a interação com os dados dos produtos.

Esses ajustes simplificam o código HTML, removendo redundâncias, aproveitando melhor as classes do Bootstrap e organizando o conteúdo de forma mais limpa e responsiva.

# Explicação do JavaScript (`script.js`)

O arquivo `script.js` foi criado para gerenciar dinamicamente as interações do usuário com os produtos exibidos na página, particularmente a funcionalidade dos botões "Saiba mais". O objetivo principal é eliminar a repetição de código HTML e utilizar um modal único que será preenchido conforme o produto selecionado.

## Principais funcionalidades do JavaScript:

1. **Estrutura de dados dos produtos**:
   - Dentro do `script.js`, foi criada uma lista (array) de objetos contendo as informações dos produtos, como `id`, `title`, `description` e `image`. Cada objeto representa um produto da loja.
   - Exemplo de um objeto:
     - `id`: identificador único do produto.
     - `title`: título do produto.
     - `description`: uma breve descrição do produto.
     - `image`: URL da imagem correspondente ao produto.

2. **Manipulação do Modal**:
   - O script utiliza o Bootstrap para abrir e manipular um único modal genérico. Quando o usuário clica no botão "Saiba mais" de um produto, o modal é exibido com as informações correspondentes ao produto.
   - A função `openProductModal(productId)` recebe o `id` do produto clicado e busca os dados desse produto na lista criada. Com base nos dados encontrados, o modal é preenchido com:
     - O **título** do produto (exibido no cabeçalho do modal).
     - A **imagem** do produto (inserida dinamicamente no corpo do modal).
     - A **descrição** do produto (exibida no corpo do modal).
   - Após preencher o modal, o Bootstrap abre a modal automaticamente para o usuário.

3. **Atribuição de eventos de clique**:
   - O JavaScript seleciona todos os botões "Saiba mais" através da classe `open-modal` e atribui um evento de clique a cada um deles.
   - Quando o botão é clicado, o evento chama a função `openProductModal(productId)`, passando o identificador único (`data-id`) do produto associado ao botão.
   - Isso permite que a modal seja preenchida de forma específica e personalizada para cada produto, sem a necessidade de múltiplos modais no HTML.

4. **Vantagens da abordagem dinâmica**:
   - **Eficiência no código**: A abordagem elimina a necessidade de replicar várias vezes o código do modal para cada produto, simplificando o HTML.
   - **Facilidade de manutenção**: Novos produtos podem ser facilmente adicionados ao array no `script.js`, sem precisar alterar o HTML da página. Isso torna a aplicação mais escalável.
   - **Desempenho**: Carregar um único modal que é preenchido dinamicamente reduz a sobrecarga de carregar várias modais estáticas e melhora o desempenho da página.

### Conclusão

O arquivo `script.js` torna o gerenciamento dos produtos e do modal mais dinâmico e eficiente, utilizando JavaScript para evitar repetição de código, melhorar a organização e garantir que as interações do usuário sejam intuitivas e rápidas. A inclusão desse script permite escalar a página de forma simples, apenas ajustando o array de produtos e reutilizando o modal conforme necessário.

