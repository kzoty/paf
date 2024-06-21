document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        const mailtoLink = `mailto:paesartesanaisfloripa@gmail.com?subject=Contato%20de%20${name}&body=${encodeURIComponent(message)}%0A%0ADe:%20${name}%0AEmail:%20${email}`;
        window.location.href = mailtoLink;
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
