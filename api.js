// js/api.js
// API simulada em localStorage - versão completa para o trabalho

const CHAVE_MSG = "mensagensAPI_v1";

// Gera um id único simples (timestamp + aleatório)
function gerarId() {
    return Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36);
}

// 1) inserirMensagem(mensagem) - mensagem: {nome, email, mensagem}
function inserirMensagem(mensagem) {
    if (!mensagem || !mensagem.nome || !mensagem.email || !mensagem.mensagem) {
        console.warn("Mensagem inválida:", mensagem);
        return false;
    }

    let lista = JSON.parse(localStorage.getItem(CHAVE_MSG));
    if (!Array.isArray(lista)) lista = [];

    const novo = {
        id: gerarId(),
        nome: mensagem.nome,
        email: mensagem.email,
        mensagem: mensagem.mensagem,
        visualizada: false,
        data: new Date().toISOString()
    };

    lista.push(novo);
    localStorage.setItem(CHAVE_MSG, JSON.stringify(lista));
    // evento custom para atualização entre abas/páginas
    try {
        window.dispatchEvent(new CustomEvent('mensagemAtualizada', {detail: {action: 'inserir', mensagem: novo}}));
    } catch(e){}

    return true;
}

// 2) validarUsuario(objLoginSenha) -> boolean
function validarUsuario(objLoginSenha) {
    if (!objLoginSenha) return false;
    const emailValido = "admin@admin.com";
    const senhaValida = "1234";
    return objLoginSenha.email === emailValido && objLoginSenha.senha === senhaValida;
}

// 3) obterMensagens() -> retorna array de objetos (cópia)
function obterMensagens() {
    let lista = JSON.parse(localStorage.getItem(CHAVE_MSG));
    if (!Array.isArray(lista)) lista = [];
    return JSON.parse(JSON.stringify(lista));
}

// 4) excluirMensagem(id) -> true/false
function excluirMensagem(id) {
    if (!id) return false;
    let lista = JSON.parse(localStorage.getItem(CHAVE_MSG));
    if (!Array.isArray(lista)) lista = [];
    const idx = lista.findIndex(m => m.id === id);
    if (idx === -1) return false;
    lista.splice(idx, 1);
    localStorage.setItem(CHAVE_MSG, JSON.stringify(lista));
    try {
        window.dispatchEvent(new CustomEvent('mensagemAtualizada', {detail: {action: 'excluir', id: id}}));
    } catch(e){}
    return true;
}

// 5) marcarMensagemVisualizada(id) -> true/false
function marcarMensagemVisualizada(id) {
    if (!id) return false;
    let lista = JSON.parse(localStorage.getItem(CHAVE_MSG));
    if (!Array.isArray(lista)) lista = [];
    const idx = lista.findIndex(m => m.id === id);
    if (idx === -1) return false;
    lista[idx].visualizada = true;
    localStorage.setItem(CHAVE_MSG, JSON.stringify(lista));
    try {
        window.dispatchEvent(new CustomEvent('mensagemAtualizada', {detail: {action: 'visualizada', id: id}}));
    } catch(e){}
    return true;
}

// util: limparMensagens (apenas para teste)
function limparMensagens() {
    localStorage.removeItem(CHAVE_MSG);
    try {
        window.dispatchEvent(new CustomEvent('mensagemAtualizada', {detail: {action: 'limpar'}}));
    } catch(e){}
}
