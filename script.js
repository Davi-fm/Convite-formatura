document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efeito Parallax para a seção Hero
    window.addEventListener('scroll', () => {
        const hero = document.getElementById('hero');
        if (hero) {
            const scrollPosition = window.pageYOffset;
            // Ajuste o valor de 0.5 para controlar a velocidade do parallax
            hero.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
        }

        // Adiciona/Remove classe 'scrolled' na navbar
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (scrollPosition > 50) { // Se o scroll for maior que 50px
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Animação de fade-in-up ao rolar
        const elements = document.querySelectorAll('.fade-in-up');
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            // Se o elemento estiver 15% visível na tela
            if (elementTop < viewportHeight * 0.85) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible'); // Opcional: remover ao rolar para cima
            }
        });
    });

    // Lida com o formulário de confirmação de presença
    const rsvpForm = document.getElementById('rsvp-form');
    const formMessage = document.getElementById('form-message');

    if (rsvpForm) {
    rsvpForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(rsvpForm);
        formMessage.textContent = 'Enviando...';
        formMessage.style.color = 'inherit';

        try {
            const resp = await fetch(rsvpForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (resp.ok) {
                formMessage.textContent = 'Obrigado! Sua confirmação foi enviada com sucesso.';
                formMessage.style.color = 'var(--primary-color)';
                rsvpForm.reset();
            } else {
                formMessage.textContent = 'Erro ao enviar. Por favor, tente novamente.';
                formMessage.style.color = 'red';
            }
        } catch (error) {
            formMessage.textContent = 'Erro de conexão. Por favor, verifique sua internet.';
            formMessage.style.color = 'red';
        }
    });
}





    // Controle do menu hamburguer
const navToggle = document.querySelector('.nav-toggle')
const navUl = document.querySelector('#navbar ul')

navToggle.addEventListener('click', () => {
    navUl.classList.toggle('open')
})

});