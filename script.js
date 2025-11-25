// --- BOTÃO DO WHATSAPP ---
function abrirWhatsapp() {
    const telefone = "5511962757970"; // coloque seu número aqui: 55 + DDD + número
    const mensagem = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
    const url = `https://wa.me/${telefone}?text=${mensagem}`;
    
    window.open(url, "_blank"); // abre em nova aba
}



// --- BOTÃO "SOLICITAR ORÇAMENTO" ---
// Este botão também pode abrir o WhatsApp (opcional)
function solicitarOrcamento() {
    alert("Obrigado pelo interesse! Clique no botão do WhatsApp para falar conosco.");
}



// --- EFEITO DE CLIQUE EM TODOS OS BOTÕES ---
document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll("button, .central-btn");

    botoes.forEach(btn => {
        btn.addEventListener("mousedown", () => {
            btn.style.transform = "scale(0.95)";
        });
        btn.addEventListener("mouseup", () => {
            btn.style.transform = "scale(1)";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });
    });
});
