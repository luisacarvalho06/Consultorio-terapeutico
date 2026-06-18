# 🌿 Consultório Terapêutico

Sistema web de gestão para consultórios terapêuticos, desenvolvido com React + Vite e Supabase. Permite gerenciar pacientes, atendimentos, prontuários, evoluções, agenda e comunicação via WhatsApp.

---

## ✨ Funcionalidades

- **Autenticação** — Login, cadastro e recuperação de senha com Supabase Auth
- **Dashboard** — Visão geral com métricas em tempo real e mini calendário
- **Pacientes** — Cadastro completo com CRUD
- **Atendimentos** — Agendamento com validação de conflitos de horário
- **Prontuários** — Histórico clínico com evoluções por atendimento
- **Agenda** — Calendário mensal integrado com Google Calendar
- **WhatsApp** — Envio automático de confirmações, lembretes e cancelamentos via Z-API
- **Configurações** — Dados da clínica, tema claro/escuro e preferências de notificação

---

## 🛠️ Tecnologias

| Camada | Tecnologia |
|---|---|
| Frontend | React 18 + Vite |
| Estilização | CSS Modules + Tailwind CSS |
| Banco de dados | Supabase (PostgreSQL) |
| Autenticação | Supabase Auth |
| Roteamento | React Router DOM v6 |
| Ícones | React Icons |
| API de Agenda | Google Calendar API (OAuth 2.0) |
| API de Mensagens | Z-API (WhatsApp) |

---

## 🗄️ Estrutura do Banco de Dados

```
pacientes
├── id (uuid, PK)
├── nome
├── cpf
├── telefone
├── email
├── observacoes
└── created_at

atendimentos
├── id (uuid, PK)
├── paciente
├── profissional
├── servico
├── data
├── horario
├── status
├── observacoes
└── created_at

prontuarios
├── id (uuid, PK)
├── paciente
├── data_criacao
├── queixa_principal
├── historico_clinico
├── avaliacao_fisica
├── plano_terapeutico
├── observacoes
└── created_at

evolucoes
├── id (uuid, PK)
├── prontuario_id (FK → prontuarios)
├── data
├── descricao
├── profissional
└── created_at
```

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- Conta no [Supabase](https://supabase.com)
- Conta na [Z-API](https://z-api.io) (opcional, para WhatsApp)
- Projeto no [Google Cloud Console](https://console.cloud.google.com) (opcional, para Google Calendar)

### 1. Clone o repositório

```bash
git clone https://github.com/luisacarvalho06/projeto.git
cd projeto
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Supabase
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua_chave_anonima

# Google Calendar (opcional)
VITE_GOOGLE_CLIENT_ID=seu_client_id.apps.googleusercontent.com

# Z-API WhatsApp (opcional)
VITE_ZAPI_INSTANCE=seu_instance_id
VITE_ZAPI_TOKEN=seu_token
```

### 4. Crie as tabelas no Supabase

Acesse o **SQL Editor** do Supabase e execute o arquivo `supabase_recriar_tabelas.sql` disponível na raiz do projeto.

### 5. Rode o projeto

```bash
npm run dev
```

Acesse em `http://localhost:5174`

---

## 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── Login/
│   ├── Register/
│   ├── ForgotPassword/
│   ├── Sidebar/
│   └── Topbar/
├── context/
│   └── ClinicaContext.jsx     # Estado global + integração Supabase
├── lib/
│   └── supabase.js            # Cliente Supabase
├── pages/
│   ├── Agenda/
│   ├── Atendimentos/
│   ├── Configuracoes/
│   ├── Dashboard/
│   ├── Pacientes/
│   ├── Profissionais/
│   ├── Prontuarios/
│   ├── Servicos/
│   └── Whatsapp/
└── services/
    └── whatsappService.js     # Integração Z-API
```

---

## 🔐 Variáveis de Ambiente

| Variável | Descrição | Obrigatória |
|---|---|---|
| `VITE_SUPABASE_URL` | URL do projeto Supabase | ✅ |
| `VITE_SUPABASE_ANON_KEY` | Chave anônima do Supabase | ✅ |
| `VITE_GOOGLE_CLIENT_ID` | Client ID do Google OAuth | ❌ |
| `VITE_ZAPI_INSTANCE` | ID da instância Z-API | ❌ |
| `VITE_ZAPI_TOKEN` | Token da instância Z-API | ❌ |

> ⚠️ Nunca suba o arquivo `.env` para o repositório. Ele já está no `.gitignore`.

---

## 👩‍💻 Desenvolvedora

| Nome | Matrícula |
|---|---|
| Luisa Carvalho | 22503475 |

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos no **UNICEUB**.
