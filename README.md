# MiniBank Frontend

Frontend for a small banking MVP built with React and Vite. The app connects to a backend API for authentication, account management, transfers, and transaction history.

## Features

- User registration and login
- JWT-based authentication
- Protected routes for authenticated users
- Account creation with currency selection
- Account list with pagination
- Money transfer between accounts
- Transaction history by account with pagination

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Axios
- ESLint

## Project Structure

```text
src/
  api/         API clients and Axios setup
  auth/        Auth context and route protection
  pages/       Application pages
  service/     Token storage helpers
  css/         Global, layout, UI, and page styles
  assets/      Static assets
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

By default, Vite will start the app locally and print the development URL in the terminal.

## Available Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Backend Configuration

The frontend is configured to call the backend at:

```text
http://localhost:8080/api
```

This is defined in [src/api/https.js](/Users/nurbolat/WebstormProjects/minibank-frontend/src/api/https.js).

If your backend runs on a different host or port, update the `baseURL` there.

## Authentication Flow

- JWT tokens are stored in `localStorage`
- Protected pages are wrapped with `RequireAuth`
- If the API returns `401 Unauthorized`, the token is removed and the user is redirected to `/login`

Related files:

- [src/auth/AuthContext.jsx](/Users/nurbolat/WebstormProjects/minibank-frontend/src/auth/AuthContext.jsx)
- [src/auth/RequireAuth.jsx](/Users/nurbolat/WebstormProjects/minibank-frontend/src/auth/RequireAuth.jsx)
- [src/service/tokenService.js](/Users/nurbolat/WebstormProjects/minibank-frontend/src/service/tokenService.js)

## Routes

Public routes:

- `/login`
- `/register`

Protected routes:

- `/` - dashboard
- `/accounts` - account list and account creation
- `/transfer` - transfer form
- `/transactions` - transaction history by account

Main routing is defined in [src/App.jsx](/Users/nurbolat/WebstormProjects/minibank-frontend/src/App.jsx).

## API Areas Used by the UI

- Auth: register, login, current user
- Accounts: create account, list accounts
- Transfers: create transfer
- Transactions: fetch account transaction history

API modules live in [src/api](/Users/nurbolat/WebstormProjects/minibank-frontend/src/api).

## Notes

- The current API base URL is hardcoded for local development.
- Tokens are persisted in browser storage, so logging out clears local auth state.
- Some UI text is in English and some is in Russian, which is expected in the current implementation.
