// js/contato.js
$(function () {
    $("#btnEnviar").on("click", function (e) {
        e.preventDefault();

        const nome = $("#nome").val().trim();
        const email = $("#email").val().trim();
        const mensagemTexto = $("#mensagem").val().trim();

        if (!nome || !email || !mensagemTexto) {
            alert("Por favor preencha todos os campos.");
            return;
        }

        const mensagem = {
            nome: nome,
            email: email,
            mensagem: mensagemTexto
        };

        const ok = inserirMensagem(mensagem);
        if (ok) {
            alert("Mensagem enviada com sucesso!");
            // limpa campos
            $("#nome").val("");
            $("#email").val("");
            $("#mensagem").val("");
        } else {
            alert("Erro ao enviar mensagem. Verifique o console.");
        }
    });
});
