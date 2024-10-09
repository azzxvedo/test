document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            id: 1,
            title: "Air Max Plus Drift 'All Day'",
            description: "O Tênis Nike Air Max Plus Drift 'All Day' é uma interpretação moderna e arrojada de um clássico da Nike.",
            image: "img/SANGUE.webp"
        },
        {
            id: 2,
            title: "Air Max Plus Drift 'Cacao'",
            description: "O Tênis Nike Air Max Plus Drift 'Cacao' é uma escolha arrojada e moderna.",
            image: "img/CACAU.webp"
        },
        {
            id: 3,
            title: "Nike Air Max DN 'White Metallic Silver'",
            description: "O legado do Nike Air Max se expande com o Nike Air Max DN e sua cor 'White/Metallic Silver'.",
            image: "img/DN.webp"
        },
        {
            id: 4,
            title: "Nike Air Max DN 'Triple Black'",
            description: "O legado do Nike Air Max se expande com o Nike Air Max DN 'Triple Black'.",
            image: "img/DN BLACK.webp"
        }
        // Adicionar mais produtos conforme necessário
    ];

    // Função para abrir o modal com o conteúdo dinâmico
    function openProductModal(productId) {
        const product = products.find(p => p.id === parseInt(productId));

        if (product) {
            document.getElementById('productModalLabel').textContent = product.title;
            document.getElementById('productModalBody').innerHTML = `
          <img src="${product.image}" class="img-fluid mb-3" alt="${product.title}">
          <p>${product.description}</p>
        `;
            const modal = new bootstrap.Modal(document.getElementById('productModal'));
            modal.show();
        }
    }

    // Atribuir o evento de clique aos botões de produto
    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            openProductModal(productId);
        });
    });
});
