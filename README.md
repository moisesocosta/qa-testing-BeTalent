# qa-testing-BeTalent

# 📋 Desafio Técnico QA - BeTalent (Sauce Demo & Restful-Booker)

Este repositório contém a solução do desafio prático de QA, com testes automatizados de Interface de Usuário (UI) com **Playwright** e testes automatizados de API com **Postman**.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **Testes de UI:** JavaScript, Playwright, Page Object Model (POM).
- **Testes de API:** Postman (Collections & Environments), JavaScript (Post-response scripts).
- **Ambiente de Desenvolvimento:** Visual Studio Code, Git e GitHub.

---

## 📂 Estrutura do Projeto

```text
├── .github/workflows/       # Configuração de CI/CD (GitHub Actions)
├── documentation/           # Artefato de planejamento e relatório
│   ├── bugs/                # Relatório detalhado de falha encontrada
│   └── evidence/            # Captura de tela e registro de execução
├── postman/                 # Arquivos JSON da Collection e Environment
├── tests/
│   └── e2e/                 # Testes de UI (Playwright)
│       └── pages/           # Classes do Page Object Model (POM)
└── README.md                # Instruções gerais do projeto