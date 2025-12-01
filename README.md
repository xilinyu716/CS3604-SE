# 12306 Railway Booking Demo (CS3604-SE)

A simplified, full‑stack demo of a railway ticketing system inspired by 12306. It includes a static frontend (HTML/CSS/vanilla JS) and a Node.js/Express backend with SQLite for persistence. The project demonstrates ticket search, user authentication, order creation and management, and frequent passenger management.

## Overview
- Frontend: Static pages served by a lightweight Node HTTP server
- Backend: Express REST API with JWT authentication and SQLite database
- Key Flows: Search tickets, register/login, place orders, pay/cancel, manage frequent passengers, info queries

## Features
- User auth: signup, signin, password reset via verification code
- Ticket search: by from/to/date, seat mapping and pagination
- Orders: create, list, detail, pay, cancel
- Frequent passengers: list, add, edit, delete
- Info queries: on‑time status, sale time, schedule, agency, station board
- Frontend integrations: all pages connected to backend without altering UI styling

## Tech Stack
- Frontend: HTML, CSS, vanilla JS
- Backend: Node.js, Express, JWT, express‑validator, helmet, cors, express‑rate‑limit
- Database: SQLite (`sqlite3`), in‑memory for tests
- Testing: Jest + Supertest

## Repository Structure
```
CS3604-SE/
  backend/
    src/
      app.js
      routes/
      controllers/
      services/
      config/database.js
      middleware/auth.js
      utils/
    test/
    package.json
  frontend/
    my_railway/
      index.html, tickets.html, login.html, register.html, info.html, help.html
      assets/scripts/*.js
      assets/styles/*.css
      server.js (static preview @ 5523)
    package.json
  requirement.md
  technical.md
  README.md
```

## Getting Started
### Prerequisites
- Node.js 18+ recommended

### Install & Run (Backend)
```
cd backend
npm install
npm start            # default port 5000
# if 5000 is busy on Windows PowerShell:
$env:PORT=5001; npm start
```
Health check: visit `http://localhost:<PORT>/health`.

### Run (Frontend)
```
cd frontend/my_railway
npm run dev          # serves static site at http://localhost:5523/
```
By default the frontend calls `http://localhost:5000`. If you changed backend port, set in browser console:
```
window.API_BASE = 'http://localhost:5001'
```

## Configuration
- `.env` (backend): optional `PORT`, `JWT_SECRET` (defaults provided for local dev)
- Database file: `backend/data/railway.db` (auto‑created on first run)

## API Quick Reference
- Auth
  - `POST /auth/signup` — register
  - `POST /auth/signin` — login
  - `POST /auth/send-code` — send verification code (`register`, `reset`, `reset_password`)
  - `POST /auth/reset-password` — reset password
- Trains
  - `GET /api/trains/search?from&to&date[&trainType][&page][&pageSize]`
  - `GET /api/trains/:trainId`
- Orders (JWT required)
  - `POST /api/orders` — create
  - `GET /api/orders` — list
  - `GET /api/orders/:orderId` — detail
  - `POST /api/orders/:orderId/pay` — pay (`alipay|wechat|bank_card`)
  - `POST /api/orders/:orderId/cancel` — cancel
- Passengers (JWT required)
  - `GET/POST/PUT/DELETE /api/passengers`
- Users (JWT required)
  - `GET/PUT /api/users/profile`

## Frontend Usage
- Login or Signup from `login.html` / `register.html`
- Search tickets on `index.html` or `tickets.html`
- Click "预订" to place an order; you will be prompted for ID number (18 chars)
- After login, the nav shows "欢迎，<phone>"; click it to open the lightweight account center to view orders, pay/cancel, and manage passengers
- Info queries are available on `info.html` (on‑time, sale time, schedule, agency, station board)

## Testing (Backend)
```
cd backend
npm test             # Jest + Supertest
npm run test:coverage
# filter by file or test name
npm test -- --testPathPattern=test/routes/auth.test.js
npm test -- -t "should register a new user"
```
Tests run against an in‑memory SQLite and do not require the server to listen on a port.

## Development Tips
- Keep frontend styling unchanged; add interactions via JS only
- Use JWT in `Authorization: Bearer <token>` for protected endpoints
- If port 5000/5523 is busy, free the port or use an alternate (`$env:PORT=5001` for backend)
- Error handling: the frontend shows toasts for network/errors; backend uses consistent JSON responses

## License
MIT
just test