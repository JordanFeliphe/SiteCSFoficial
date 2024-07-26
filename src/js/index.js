function sendMail() {
    // Obtém a referência do botão e altera o texto para "Enviando..."
    var button = document.getElementById('sendButton');

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        return; // Interrompe a execução da função se algum campo estiver vazio
    }

    button.innerText = 'Enviando...';
    button.disabled = true; // Desativa o botão para evitar múltiplos cliques

    var params = {
        name: name,
        email: email,
        message: message,
    };

    const serviceID = "service_v5hqxhg";
    const templateID = "template_zzh69qm";

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        // Limpar os campos do formulário
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        // Altera o texto do botão para "Enviado"
        button.innerText = 'Enviado';

        // Redirecionar para a página de agradecimento
        window.location.href = "https://csfdigital.com.br/Beta/thanksemail.html";
    })
    .catch(err => {
        console.error(err);
        alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");

        // Reverte o texto do botão para "Enviar"
        button.innerText = 'Enviar';
        button.disabled = false; // Reativa o botão
    });
}
