# Automação de Testes E2E com Cypress + CI/CD via GitHub Actions


Projeto de testes automatizados de ponta a ponta com [Cypress](https://www.cypress.io/), integrado a um pipeline de **CI/CD com GitHub Actions**, para garantir qualidade contínua e feedback rápido.

---

## Destaques do Projeto

✅ **Testes E2E automatizados com Cypress**  
✅ **CI/CD configurado com GitHub Actions**  
✅ **Execução automática a cada 4 horas via agendamento**  
✅ **Execução em pushes e pull requests na branch `main`**  
✅ **Notificações de sucesso/falha via Webhook do Slack**  
✅ **Upload automático de artefatos (screenshots e vídeos)**

---

## CI/CD com GitHub Actions

A integração contínua foi projetada para garantir feedback rápido sempre que:

- Um push for feito na branch `main`
- Um pull request for aberto para `main`
- A cada **4 horas**, com agendamento recorrente.
- Quando um membro da equipe iniciar manualmente (via **workflow_dispatch**)

##  Passos do Workflow
- Clona o repositório
- Instala o Node.js
- Instala as dependências com npm ci
- Executa os testes Cypress em modo headless
- Envia notificações para o Slack com status da execução (Sucesso ou Falha)
- Salva vídeos e screenshots como artefatos para análise posterior

Webhook Slack é configurado via secrets.SLACK_WEBHOOK_URL no GitHub

## Benefícios da Automação
- Execução contínua: detecta falhas rapidamente
- Notificação imediata: avisa o time via Slack
- Evidência visual: vídeos e imagens para debug
- Confiabilidade: processo estável e rastreável
- Economia de tempo: menos testes manuais

### Autor
Matheus Gama -->
<a href="https://www.linkedin.com/in/matheusmsg30/" target="_blank">LinkedIn</a> - <a href="https://github.com/matheusgama30" target="_blank">Github</a>