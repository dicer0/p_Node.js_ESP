[![MasterHead](http://dicer0.com/wp-content/uploads/2023/09/Node.js-di_cer0-Bannerts.png)](https://dicer0.com/#skills)
# Codifin: Pokémon - Local Dev

## Objective

Create an application (frontend + backend) that consists of an API that retrieves all available Pokémon using the PokeAPI (https://pokeapi.co/), and displays all the results in a UI. Both FE and BE must run either locally or online, however you'd like, and be ready to demonstrate. In the follow-up interview, you will be asked to share your screen and make live modifications to your code.

## Requirements
### Backend
Use Node.js for your implementation, using either JavaScript or TypeScript. Please implement one endpoint that returns all pokemon in the following format:

#### Endpoint
GET .../pokemons

#### Response
```json
[
  {
    "name": "charizard",
    "types": ["fire", "flying"],
    "image": "<choose_one_of_the_sprites>"
  },
  {
    "name": "venusaur",
    "types": ["grass", "poison"],
    "image": "<choose_one_of_the_sprites>"
  }
]
```

Make sure that ALL Pokémon are returned in your response in a single API call (1302 total at the time of writing.)

### API refs:
https://pokeapi.co/api/v2/pokemon
https://pokeapi.co/api/v2/pokemon/{id or name}

### Frontend
Implement a UI that consumes your API and displays the results in a simple way (table, grid, etc.) — up to you to decide the layout — using only the data from the endpoint you created above. Use React and MUI for your implementation, using either JavaScript or TypeScript.

### Bonus Points (optional)
These are optional items for the assignment, not mandatory:
- Lint and tests.
- Using Docker as a local development setup.
- Using Next.js
- Using AWS, Terraform and Vercel for deployment and hosting.

## Submission
Please submit your code to a public GitHub repository, including instructions on how to run it locally.

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
