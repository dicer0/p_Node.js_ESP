# Codifin: Pokémon - Local Dev

## Requisitos
- Node 18+
- Docker

## Backend (local)
```sh
cd backend
npm install
npm install cors
npm run start
```
open: http://localhost:3001/pokemons
![Pokemons Response](img/localhost_3001_pokemons.png)

## Frontend (Next.js) (local)
```sh
cd frontend
npm install
npm run dev
```
open: http://localhost:3000
![Pokemons Response](img/localhost_3000_pokemons.png)

## Docker (dev)
```sh
docker-compose up --build
```
- **Backend** -> http://localhost:3001
- **Frontend** -> http://localhost:3000

## Lint
```sh
cd backend
npm run lint
```
![Lint](img/npm_run_lint.png)

## Tests
```sh
cd backend
npm run test
```
![Tests](img/npm_test.png)