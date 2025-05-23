document.addEventListener('DOMContentLoaded', function() {
    // Menu hamburger para cada item
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const btn = item.querySelector('.hamburger-btn');
        const submenu = item.querySelector('.submenu');
        
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            item.classList.toggle('active');
            
            // Fecha outros menus abertos
            navItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Fecha menus ao clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item')) {
            navItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
    
    // Fecha menu mobile ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
});

// Adiciona funcionalidade aos botões do carrinho
const botoesCarrinho = document.querySelectorAll('.btn-carrinho');
botoesCarrinho.forEach(botao => {
    botao.addEventListener('click', function() {
        const produto = this.parentElement;
        const nomeProduto = produto.querySelector('h3').textContent;
        
        // Animação de adição ao carrinho
        this.textContent = 'Adicionado!';
        this.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            this.textContent = 'Adicionar ao carrinho';
            this.style.backgroundColor = '#ff6b00';
        }, 2000);
        
        console.log(`Produto "${nomeProduto}" adicionado ao carrinho`);
    });
});