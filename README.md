# 🎓 Sistema de Pedidos – Faculdade CECAPE

Bem-vindo ao **Sistema de Solicitação de Materiais** da Faculdade CECAPE! Uma solução simples, moderna e 100% baseada em **Google Sheets + GitHub Pages** para:

- Solicitação de materiais com produtos pré-cadastrados  
- Acompanhamento de status do pedido pelo usuário  
- Painel administrativo para gestão de pedidos

---

## 🏛 Sobre a CECAPE

Faculdade localizada em Juazeiro do Norte, Ceará, referência em cursos de graduação, técnicos e pós-graduação. Consulta mais sobre a CECAPE [aqui](https://faculdadececape.edu.br).  
A identidade visual trabalha com as cores institucionais:

- **Azul-royal**: `#1e90ff`  
- **Azul-escuro**: `#003366`  
- **Amarelo-ouro**: `#ffcc00`  

---

## 🖼 Logo & Paleta de Cores

As imagens da marca podem ser encontradas no site oficial ou nos arquivos internos de identidade visual da faculdade. Algumas sugestões:

- ![Logo 1](https://tse3.mm.bing.net/th?id=OIP.ipmb-BWM4TycJ3hYbOpMQwHaFj&r=0&pid=Api)
- ![Logo 2](https://tse3.mm.bing.net/th?id=OIP.KdgEA-mjIWEkSq-o7gcrQQHaHR&r=0&pid=Api)

---

## 🛠 Instalação e Deploy

1. **Clone ou importe** este repositório no GitHub
2. Faça o **upload de todos os arquivos** na raiz (HTML, CSS, JS)
3. Vá em **Settings → Pages**, selecione branch `main` / pasta `/` e salve
4. O GitHub fornecerá o link:  
   `https://seu-usuario.github.io/seu-repositorio/`

---

## 🧭 Como usar

### 💳 Usuário
1. Acesse `index.html`  
2. Digite seu e‑mail cadastrado  
3. Preencha o formulário com data e selecione produtos  
4. Acompanhe a etapa do seu pedido em `status.html`

### 🛠 Administrador
1. Faça login com e‑mail admin  
2. No painel `admin.html`, veja e controle todo o fluxo  
3. Atualize status conforme necessidade

---

## 🧬 Estrutura de arquivos

```
/
├── index.html       ← Login
├── user.html        ← Formulário de pedido
├── status.html      ← Página de acompanhamento
├── admin.html       ← Painel de administração
├── style.css        ← Estilos visuais
├── auth.js          ← Validação de login
└── admin.js         ← Lógica do painel admin
```

---

## 🔄 Integração com Google Sheets via Apps Script

A API (Apps Script implantada) deve ter essas ações:

- `login` – valida e‑mails
- `enviarPedido` – registra novo pedido
- `listarPedidos` – retorna todos pedidos
- `atualizarStatus` – muda status de um pedido
- `getProdutos` – retorna lista de produtos da aba `produtos`

➡️ Relembre o código completo do `doPost()` no histórico de mensagens anteriores.

---

## 🎨 Personalização

- Ajuste cores em `style.css` conforme a identidade da CECAPE  
- Troque os emojis de status ou produtos conforme desejar  
- Exportações, relatórios e filtros podem ser adicionados no painel admin

---

## 📞 Suporte

Para dúvidas, melhorias, relatórios ou feedback, entre em contato com:
 @Emerson.sbv
 Emerson.sbv@icloud.com

---

*Desenvolvido com 💙 para facilitar a comunicação e agilidade no atendimento interno.*
