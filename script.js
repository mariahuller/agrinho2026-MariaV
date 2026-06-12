document.addEventListener("DOMContentLoaded", function() {
    
    // Interação do botão "Descubra o Impacto"
    const botaoImpacto = document.getElementById("btn-alerta");
    
    botaoImpacto.addEventListener("click", function() {
        alert("💡 Sabia disso? O Brasil é pioneiro no uso de fixação biológica de nitrogênio, o que evita o uso de milhões de toneladas de fertilizantes químicos todos os anos!");
    });

    // Envio do Formulário de Contato
    const formulario = document.getElementById("contact-form");
    
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede a página de recarregar
        
        // Pega os dados digitados (pode ser usado para enviar para um banco de dados no futuro)
        const nome = formulario.querySelector('input[type="text"]').value;
        
        // Mostra mensagem de sucesso limpa e estilizada
        alert(`Obrigado pelo contato, ${nome}! Juntos construímos um futuro mais sustentável. 🌱`);
        
        // Limpa o formulário após o envio
        formulario.reset();
    });
});