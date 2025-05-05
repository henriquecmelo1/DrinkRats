# 🐀 DrinkRats

<p align="center">
  <img src="frontend/public/logo.webp" alt="DrinkRats Logo" width="200"/>
</p>

**DrinkRats** é um web app para jogos de bebida com amigos! Adicione jogadores, bebidas com suas pontuações e registre quem bebeu o quê. O sistema calcula automaticamente as pontuações e traz uma camada divertida de competição e desafio ao seu rolê.<br><br>



## 🧠 Motivação

Criado para unir tecnologia e diversão, o DrinkRats surgiu da vontade de tornar jogos de bebida mais organizados, competitivos e engraçados. Em vez de anotar tudo em papel ou discutir quem bebeu mais, deixe o sistema fazer isso por você.



## 🚀 Tecnologias Utilizadas

### Backend
- **[FastAPI](https://fastapi.tiangolo.com/)** — Framework web moderno e rápido para APIs Python.
- **[PostgreSQL](https://www.postgresql.org/)** — Banco de dados relacional robusto e confiável.
- **[SQLAlchemy](https://www.sqlalchemy.org/)** — ORM para facilitar a comunicação entre FastAPI e PostgreSQL.

### Frontend
- **[React](https://reactjs.org/)** — Biblioteca JavaScript para construção de interfaces interativas.
- **[Vite](https://vite.dev/)** — Ferramenta de build rápida e moderna para aplicações React.

---

## 🔍 Funcionalidades

- ✅ Cadastro de jogadores  
- ✅ Cadastro de bebidas e suas pontuações  
- ✅ Registro de quem bebeu o quê  
- ✅ Cálculo automático de pontuação por jogador  
- ✅ Interface intuitiva e responsiva  
- ✅ Exibição de ranking atualizado em tempo real

---

## 💻 Como Rodar Localmente

### Pré-requisitos
- Python 3.9+
- Node.js 18+
- PostgreSQL

### 1. Clone o repositório
```bash
git clone https://github.com/henriquecmelo1/DrinkRats.git
cd DrinkRats
```

### 2. Configure o banco de dados
Crie um banco PostgreSQL e defina as variáveis no arquivo `.env`
```bash
DATABASE_URL=postgresql://usuario:senha@localhost:5432/DrinkRats
```

### 3. Rode o Back-End
```bash
cd backend
pip install -r requirements.txt
uvicorn api:app --reload
```

### 4. Rode o Front-End
```bash
cd frontend
npm install
npm run dev
```

###  Acesse o app em http://localhost:5173/

---


## 📂 Estrutura do Projeto
```bash
DrinkRats/
├── backend/
│   ├── app/
│   │   ├── db/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── api.py
├── frontend/
│   ├── public/
│   │   └── logo.webp
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.tsx
│   │   └── main.tsx
├── screenshots/    
├── README.md
└── .env
```

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