<div align="center">
  # 🚀 Simulado do Piauí para o Mundo
  
  Uma plataforma inovadora alimentada por IA para simular e preparar talentos do Piauí para o mercado global.
  
  [![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
  [![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
  [![Status](https://img.shields.io/badge/Status-Ativo-brightgreen)](https://github.com/FranciscoDias87/simulado_Do_Piaui_Para_Mundo)
</div>

---

## 📋 Sobre o Projeto

Este projeto oferece uma aplicação completa construída com **AI Studio** e tecnologias modernas, permitindo que usuarios possam acessar simulados e ferramentas de preparação impulsionadas por inteligência artificial.

**Acesse a aplicação:** [AI Studio App](https://ai.studio/apps/54cc7cf9-add2-4db8-8d45-6cdadf9ef0a8)

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v18 ou superior)
- **npm** ou **yarn**
- Uma chave API válida do **Gemini API**

---

## 🚀 Começando Localmente

### 1️⃣ Instalar Dependências

```bash
npm install
# ou
yarn install
```

### 2️⃣ Configurar Variáveis de Ambiente

Abra o arquivo `.env.local` na raiz do projeto e adicione sua chave Gemini API:

```env
GEMINI_API_KEY=sua_chave_api_aqui
```

**Como obter sua chave Gemini API:**
- Visite [Google AI Studio](https://ai.google.dev/tutorials/setup)
- Crie uma nova chave API
- Copie e cole em `.env.local`

### 3️⃣ Executar a Aplicação

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

---

## 📁 Estrutura do Projeto

```
simulado_Do_Piaui_Para_Mundo/
├── .env.local                 # Variáveis de ambiente (NÃO commitar)
├── .gitignore
├── README.md                  # Este arquivo
├── package.json
├── package-lock.json
└── src/
    ├── components/            # Componentes React
    ├── pages/                 # Páginas da aplicação
    ├── utils/                 # Funções utilitárias
    └── styles/                # Estilos globais
```

---

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Constrói a aplicação para produção |
| `npm start` | Inicia a aplicação em produção |
| `npm test` | Executa os testes |

---

## 🔐 Segurança

⚠️ **IMPORTANTE:** Nunca compartilhe sua chave API ou commita o arquivo `.env.local` no repositório.

- Adicione `.env.local` ao `.gitignore`
- Use variáveis de ambiente para dados sensíveis
- Revise regularmente as permissões da sua API

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um **fork** do repositório
2. Crie uma **branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

---

## 📝 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 📞 Suporte

- 📧 Email: franciscocpddias@hotmail.com
- 🐛 Issues: [Reportar um problema](https://github.com/FranciscoDias87/simulado_Do_Piaui_Para_Mundo/issues)
- 💬 Discussões: [Participar das discussões](https://github.com/FranciscoDias87/simulado_Do_Piaui_Para_Mundo/discussions)

---

## 🙏 Agradecimentos

Obrigado por usar **Simulado do Piauí para o Mundo**! 

<div align="center">
  <p>⭐ Se este projeto foi útil, considere dar uma estrela! ⭐</p>
</div>
