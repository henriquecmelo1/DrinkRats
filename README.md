# 🐀 DrinkRats

<p align="center">
  <img src="frontend/public/logo.webp" alt="DrinkRats Logo" width="200"/>
</p>

**DrinkRats** é um web app para jogos de bebida com amigos! Adicione jogadores, bebidas com suas pontuações e registre quem bebeu o quê. O sistema calcula automaticamente as pontuações e traz uma camada divertida de competição e desafio ao seu rolê.

<br>

## 🧠 Motivação

Criado para unir tecnologia e diversão, o DrinkRats surgiu da vontade de tornar jogos de bebida mais organizados, competitivos e engraçados. Em vez de anotar tudo em papel ou discutir quem bebeu mais, deixe o sistema fazer isso por você.

<br>

## 🚀 Tecnologias Utilizadas

### Backend
- **[FastAPI](https://fastapi.tiangolo.com/)** — Framework web moderno e rápido para APIs Python.
- **[PostgreSQL](https://www.postgresql.org/)** — Banco de dados relacional robusto e confiável.
- **[SQLAlchemy](https://www.sqlalchemy.org/)** — ORM para facilitar a comunicação entre FastAPI e PostgreSQL.

### Frontend
- **[React](https://reactjs.org/)** — Biblioteca JavaScript para construção de interfaces interativas.
- **[Vite](https://vite.dev/)** — Ferramenta de build rápida e moderna para aplicações React.

### Deploy/Containerização
- **[Docker](https://www.docker.com/)** — Conteinerização de aplicações.
- **[Docker Compose](https://docs.docker.com/compose/)** — Orquestração dos containers.

<br>


## 🔍 Funcionalidades

- ✅ Cadastro de jogadores  
- ✅ Cadastro de bebidas e suas pontuações  
- ✅ Registro de quem bebeu o quê  
- ✅ Cálculo automático de pontuação por jogador  
- ✅ Interface intuitiva e responsiva  
- ✅ Exibição de ranking atualizado em tempo real

<br>

## 💻 Como Rodar Localmente

### Pré-requisitos
- **[Docker](https://www.docker.com/)** instalado na sua máquina
- **[Docker Compose](https://docs.docker.com/compose/)** (geralmente já vem incluso no Docker Desktop)


### 🚀 Passos para rodar

1. Clone o repositório:
```bash
git clone https://github.com/henriquecmelo1/DrinkRats.git
cd DrinkRats
```

2. Crie o arquivo `.env` a partir do `.env.example` e ajuste as variáveis conforme sua preferência:  
```bash
cp .env.example .env
```
Depois, abra o arquivo `.env` no editor de texto e configure os valores (usuário, senha, nome do banco etc).

3. Suba os containers com Docker Compose:
```bash
docker-compose up
```

4. Acesse o app no navegador:
```
http://localhost:5173
```

O backend estará rodando na porta `8000` e o banco PostgreSQL na porta `5432` (caso queira acessar diretamente via algum cliente de banco de dados).

<br>

## 🐳 Imagens Docker

As imagens estão publicadas no Docker Hub:

- Backend: [`henriquecmelo/drinkrats-backend`](https://hub.docker.com/r/henriquecmelo/drinkrats-backend)
- Frontend: [`henriquecmelo/drinkrats-frontend`](https://hub.docker.com/r/henriquecmelo/drinkrats-frontend)
- Banco de dados: utiliza a imagem oficial do **Postgres**

<br>


## 📂 Estrutura do Projeto
```bash
DrinkRats/
├── backend/
│   ├── db/
│   ├── models/
│   ├── routers/
│   ├── schemas/
│   ├── services/
│   ├── api.py
│   └── Dockerfile
├── frontend/
│   ├── public/
│   │   └── logo.webp
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.tsx
│   │   └── main.tsx
│   └──  Dockerfile
├── screenshots/
├── docker-compose.yml
├── README.md
└── .env
```
<br>

## 📸 Capturas de Tela

### Tela de Registros
<p align="center">
  <img src="screenshots/loggings.png" alt="Loggings" width="600"/>
</p>

### Tela de Ranking
<p align="center">
  <img src="screenshots/ranking.png" alt="Ranking" width="600"/>
</p>

### Tela de Jogadores
<p align="center">
  <img src="screenshots/players.png" alt="Players" width="600"/>
</p>

### Tela de Bebidas
<p align="center">
  <img src="screenshots/drinks.png" alt="Drinks" width="600"/>
</p>

---