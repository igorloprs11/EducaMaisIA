// ===== SISTEMA DE GERENCIAMENTO DE USUÁRIOS E PONTOS =====

// Classe para gerenciar usuários
class SistemaEducamais {
    constructor() {
        this.usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        this.usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado')) || null;
        this.pontosPorQuestao = 10;
        this.inicializar();
    }

    // Inicializar o sistema
    inicializar() {
        this.adicionarUsuariosDemo();
        this.atualizarUILogin();
    }

    // Adicionar usuários de exemplo se não existir nenhum
    adicionarUsuariosDemo() {
        if (this.usuarios.length === 0) {
            const usuariosDemo = [
                { id: 1, nome: 'João Silva', email: 'joao@email.com', senha: '123456', pontos: 80, dataCadastro: '2026-01-15', questoesResolvidas: 8 },
                { id: 2, nome: 'Maria Santos', email: 'maria@email.com', senha: '123456', pontos: 120, dataCadastro: '2026-02-20', questoesResolvidas: 12 },
                { id: 3, nome: 'Pedro Oliveira', email: 'pedro@email.com', senha: '123456', pontos: 60, dataCadastro: '2026-03-10', questoesResolvidas: 6 }
            ];
            this.usuarios = usuariosDemo;
            this.salvarUsuarios();
        }
    }

    // Salvar usuários no localStorage
    salvarUsuarios() {
        localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }

    // Cadastrar novo usuário
    cadastrar(nome, email, senha, confirmarSenha) {
        // Validações
        if (!nome || !email || !senha) {
            return { sucesso: false, mensagem: '❌ Preencha todos os campos!' };
        }

        if (senha !== confirmarSenha) {
            return { sucesso: false, mensagem: '❌ As senhas não conferem!' };
        }

        if (senha.length < 6) {
            return { sucesso: false, mensagem: '❌ Senha deve ter no mínimo 6 caracteres!' };
        }

        if (!this.validarEmail(email)) {
            return { sucesso: false, mensagem: '❌ Email inválido!' };
        }

        if (this.usuarios.find(u => u.email === email)) {
            return { sucesso: false, mensagem: '❌ Este email já está cadastrado!' };
        }

        // Criar novo usuário
        const novoUsuario = {
            id: this.usuarios.length + 1,
            nome: nome,
            email: email,
            senha: senha, // ⚠️ Em produção, usar hash!
            pontos: 0,
            dataCadastro: new Date().toLocaleDateString('pt-BR'),
            questoesResolvidas: 0
        };

        this.usuarios.push(novoUsuario);
        this.salvarUsuarios();

        return { sucesso: true, mensagem: '✅ Cadastro realizado com sucesso! Faça login para começar.' };
    }

    // Fazer login
    login(email, senha) {
        if (!email || !senha) {
            return { sucesso: false, mensagem: '❌ Preencha email e senha!' };
        }

        const usuario = this.usuarios.find(u => u.email === email && u.senha === senha);

        if (!usuario) {
            return { sucesso: false, mensagem: '❌ Email ou senha incorretos!' };
        }

        this.usuarioLogado = usuario;
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        this.atualizarUILogin();

        return { sucesso: true, mensagem: '✅ Login realizado com sucesso!' };
    }

    // Fazer logout
    logout() {
        this.usuarioLogado = null;
        sessionStorage.removeItem('usuarioLogado');
        this.atualizarUILogin();
        return { sucesso: true, mensagem: '✅ Logout realizado!' };
    }

    // Adicionar pontos ao usuário
    adicionarPontos(emailUsuario, pontos) {
        const usuario = this.usuarios.find(u => u.email === emailUsuario);
        if (usuario) {
            usuario.pontos += pontos;
            usuario.questoesResolvidas = (usuario.questoesResolvidas || 0) + 1;
            this.salvarUsuarios();

            // Atualizar usuário logado se for ele
            if (this.usuarioLogado && this.usuarioLogado.email === emailUsuario) {
                this.usuarioLogado = usuario;
                sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            }

            return true;
        }
        return false;
    }

    // Obter ranking ordenado por pontos
    obterRanking() {
        return this.usuarios
            .sort((a, b) => b.pontos - a.pontos)
            .map((usuario, index) => ({
                posicao: index + 1,
                ...usuario
            }));
    }

    // Validar email
    validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Atualizar UI baseado no login
    atualizarUILogin() {
        const containerLoginCadastro = document.getElementById('container-login-cadastro');
        const containerUsuarioLogado = document.getElementById('container-usuario-logado');

        if (this.usuarioLogado) {
            // Usuário logado - mostrar dados do usuário
            if (containerLoginCadastro) containerLoginCadastro.style.display = 'none';
            if (containerUsuarioLogado) {
                containerUsuarioLogado.style.display = 'flex';
                containerUsuarioLogado.innerHTML = `
                    <div class="usuario-info">
                        <span class="nome-usuario">👤 ${this.usuarioLogado.nome}</span>
                        <span class="pontos-usuario">⭐ ${this.usuarioLogado.pontos} pts</span>
                    </div>
                    <button class="btn-logout" onclick="sistema.logout(); location.reload();">Sair</button>
                `;
            }
        } else {
            // Usuário não logado
            if (containerLoginCadastro) containerLoginCadastro.style.display = 'flex';
            if (containerUsuarioLogado) containerUsuarioLogado.style.display = 'none';
        }
    }
}

// Inicializar sistema globalmente
const sistema = new SistemaEducamais();

// ===== FUNÇÕES DE FORMULÁRIO =====

// Enviar formulário de cadastro
function enviarCadastr(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const senha = document.getElementById('senha')?.value || '';
    const confirmar = document.getElementById('confirmar')?.value || '';

    const resultado = sistema.cadastrar(nome, email, senha, confirmar);
    
    if (resultado.sucesso) {
        alert(resultado.mensagem);
        document.querySelector('form').reset();
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    } else {
        alert(resultado.mensagem);
    }
}

// Enviar formulário de login
function enviarLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email')?.value || '';
    const senha = document.getElementById('senha')?.value || '';

    const resultado = sistema.login(email, senha);
    
    if (resultado.sucesso) {
        alert(resultado.mensagem);
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        alert(resultado.mensagem);
    }
}

// Enviar formulário genérico
document.addEventListener('DOMContentLoaded', function() {
    const formularios = document.querySelectorAll('form');
    
    formularios.forEach(formulario => {
        formulario.addEventListener('submit', function(e) {
            // Não fazer nada se já tiver um handler específico
            if (this.id !== 'form-contato') {
                return;
            }
            
            e.preventDefault();
            alert('✅ Formulário enviado com sucesso!');
            this.reset();
        });
    });
});

// ===== SISTEMA DE EXERCÍCIOS COM PONTOS =====

function verificarResposta(numero, respostaCorreta) {
    if (!sistema.usuarioLogado) {
        alert('❌ Você precisa estar logado para responder exercícios!');
        window.location.href = 'login.html';
        return;
    }

    const selecionada = document.querySelector(`input[name="ex${numero}"]:checked`);
    const resultado = document.getElementById(`resultado${numero}`);
    
    if (!selecionada) {
        resultado.innerHTML = '❌ Selecione uma resposta!';
        resultado.style.color = '#ff6b6b';
        return;
    }
    
    if (selecionada.value === respostaCorreta) {
        // Resposta correta - adicionar pontos
        sistema.adicionarPontos(sistema.usuarioLogado.email, sistema.pontosPorQuestao);
        
        resultado.innerHTML = `✅ Resposta correta! +${sistema.pontosPorQuestao} pontos!`;
        resultado.style.color = '#51cf66';
        resultado.style.fontWeight = 'bold';
        
        // Desabilitar opções após acertar
        document.querySelectorAll(`input[name="ex${numero}"]`).forEach(input => {
            input.disabled = true;
        });
        
        // Atualizar exibição de pontos
        setTimeout(() => {
            sistema.atualizarUILogin();
        }, 500);
    } else {
        resultado.innerHTML = '❌ Resposta incorreta! Tente novamente.';
        resultado.style.color = '#ff6b6b';
    }
}

// ===== DARK MODE =====

function ativarDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Carregar preferência de dark mode
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ===== OUTROS =====

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
