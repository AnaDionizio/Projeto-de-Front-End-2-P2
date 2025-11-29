# Projeto-de-Front-End-2-P2

# 🌊 Luxo — Aluguel de Iates  
Sistema Web com Formulário de Contato + Área Administrativa para Gerenciamento de Mensagens

Este projeto consiste em um site fictício de aluguel de iates chamado **Luxo**, com páginas institucionais e um **sistema completo de mensagens**, desenvolvido como parte da disciplina de Programação Web.

---

## 📌 Funcionalidades do Projeto

### ✔️ 1. Página de Contato  
- Formulário com campos: **Nome**, **E-mail** e **Mensagem**  
- Envio de mensagem usando a função `inserirMensagem()`  
- Armazenamento automático das mensagens no navegador via **localStorage**  
- Validação básica dos campos e feedback ao usuário

---

### ✔️ 2. Página Admin (admin.html)  
Página exclusiva para administradores, com:

- Campo de **E-mail**  
- Campo de **Senha**  
- Autenticação usando a função `validarUsuario()`  
- Redirecionamento automático para `mensagens.html` quando as credenciais estiverem corretas  
- Exibição de mensagem de erro caso os dados sejam inválidos  

**Credenciais válidas:**  
