# Arquitetura TalkFlow

## Objetivo
SaaS multi-tenant de atendimento WhatsApp/omnichannel, CRM, automação visual, campanhas e agentes de IA.

## Regra de entrada obrigatória
Nenhum módulo operacional deve funcionar sem `Channel.status = ACTIVE` para a organização. Esta regra deve existir em dois níveis:
1. Guard de navegação no frontend.
2. Guard/middleware de autorização no backend (`ACTIVE_CHANNEL_REQUIRED`).

## Bounded contexts
- Identity/Auth
- Organizations / RBAC
- Channels / Messaging Providers
- Contacts / CRM
- Conversations / Messages
- Departments / Routing
- Chatbot Runtime / Flow Builder
- AI Agents / RAG
- Campaigns
- Reporting
- Billing
- Audit / Webhooks

## Adapters de mensageria
Definir `MessagingProvider` com: connect, disconnect, health, sendText, sendMedia, markRead, syncProfile, parseWebhook.
Implementações: Meta Cloud API (prioritária), Evolution API (opcional), Z-API (opcional).

## Realtime
API recebe webhook -> persiste evento/mensagem -> publica evento Redis -> gateway WebSocket -> UI.

## Filas
BullMQ/Redis para envio, mídia, sincronização, campanhas, IA e retries idempotentes.

## Segurança
- Multi-tenant sempre filtrado por `organizationId`.
- Segredos criptografados em repouso.
- RBAC e trilha de auditoria.
- Rate limiting por organização/canal.
- Idempotency keys em webhooks e envios.
