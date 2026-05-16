# Plano de Testes - BeTalent Challenge

## 1. Introdução
Este documento descreve a estratégia de teste e o planejamento de cenários para a plataforma Sauce Demo (Interface) e para o Restful-Booker (API).

## 2. Escopo de Testes
- **UI (Sauce Demo):** Fluxos de Autenticação (Login/Logout), Inventário (Filtros), Carrinho de Compras e Fluxo Completo de Checkout.
- **API (Restful-Booker):** Geração de Token de Acesso, CRUD Completo de Reservas (Criação, Leitura, Atualização, Exclusão) e tratamento de payloads inválidos.

## 3. Ferramentas e Tecnologias
- **Automação de UI:** Playwright (Page Object Model).
- **Automação de API:** Postman (Collection e Environment).
- **Relatórios e Evidências:** Playwright Reporter e capturas de tela em falhas.

## 4. Matriz de Cenários de Teste

### Interface de Usuário (UI - Sauce Demo)
| ID | Funcionalidade | Cenário | Tipo |
|----|----------------|---------|------|
| CT01 | Autenticação | Login com credenciais válidas (`standard_user`) | Positivo |
| CT02 | Autenticação | Validação de restrição para usuário bloqueado | Negativo |
| CT03 | Autenticação | Execução de encerramento de sessão (Logout) | Positivo |
| CT04 | Vitrine / Carrinho | Ordenação de produtos por preço ("Low to High") | Positivo |
| CT05 | Vitrine / Carrinho | Inclusão e posterior remoção de itens do carrinho | Positivo |
| CT06 | Checkout | Fluxo ponta a ponta de compra até tela de sucesso | Positivo |
| CT07 | Análise Crítica | Identificação e isolamento de falha de assets com `problem_user` | Bug Conhecido |

### Interface de Programação (API - Restful-Booker)
| ID | Endpoint | Cenário | Tipo |
|----|----------|---------|------|
| CT08 | POST `/auth` | Geração de token com credenciais administrativas válidas | Positivo |
| CT09 | POST `/booking` | Criação de reserva com payload íntegro e válido | Positivo |
| CT10 | GET `/booking/:id`| Consulta de detalhes de uma reserva utilizando ID dinâmico | Positivo |
| CT11 | PUT `/booking/:id`| Atualização completa de dados de reserva (Requer Token) | Positivo |
| CT12 | DELETE `/booking/:id`| Exclusão permanente de registro de reserva (Requer Token) | Positivo |
| CT13 | POST `/booking` | Tentativa de criação omitindo campo obrigatório (`lastname`) | Negativo / Erro |

## 5. Sugestões de Melhorias (Visão Analítica)
- **UI:** Implementar máscaras e validações em tempo real no formulário de Checkout (como validação de tamanho de CEP e bloqueio de caracteres especiais em nome).
- **API:** Melhorar as mensagens de retorno em cenários de erro do servidor (atualmente retorna códigos genéricos ou Bad Request sem detalhar qual propriedade falhou).

## 6. Análise de Riscos
- **Dependência de Terceiros:** A API Restful-Booker está hospedada em um ambiente público gratuito (Heroku); instabilidades de infraestrutura externa podem gerar falsos-negativos (timeouts/erros de socket).
- **Manutenção de Seletores:** Eventuais atualizações de front-end nos atributos `data-test` do Sauce Demo invalidam os localizadores do Playwright.