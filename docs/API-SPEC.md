# API v1 planejada

## Onboarding / canais
GET /api/channels/gate
POST /api/channels
POST /api/channels/:id/connect
POST /api/channels/:id/disconnect
GET /api/channels/:id/status
POST /api/webhooks/meta
POST /api/webhooks/evolution

## Conversas
GET /api/conversations?status=INBOX
GET /api/conversations/:id
POST /api/conversations/:id/assign
POST /api/conversations/:id/transfer
POST /api/conversations/:id/close

## Mensagens
GET /api/conversations/:id/messages
POST /api/conversations/:id/messages
POST /api/messages/:id/read

## Contatos/CRM
GET /api/contacts
POST /api/contacts
PATCH /api/contacts/:id
POST /api/contacts/import
GET /api/pipelines
POST /api/pipelines
POST /api/pipeline-cards/:id/move

## Chatbots
GET /api/chatbots
POST /api/chatbots
POST /api/chatbots/:id/versions
POST /api/chatbots/:id/publish
POST /api/chatbots/:id/test

## IA
GET /api/ai-agents
POST /api/ai-agents
POST /api/ai-agents/:id/knowledge
POST /api/ai-agents/:id/test

## Campanhas
GET /api/campaigns
POST /api/campaigns
POST /api/campaigns/:id/schedule
POST /api/campaigns/:id/pause

## Relatórios
GET /api/reports/overview
GET /api/reports/agents
GET /api/reports/departments
