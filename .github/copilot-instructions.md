# Copilot Instructions for E-Commerce Admin UI

## Project Overview
This is a React-based e-commerce admin management portal built with **Create React App** (React 19.2, React Router 7.9). It provides a UI for managing users, customers, products, and orders. The app uses Reactstrap/Bootstrap for styling and is structured as a single-page application (SPA) with client-side routing.

## Architecture & Key Components

### Layout Structure (`src/App.js`)
- **Router-based layout**: Wraps app in `BrowserRouter` with responsive grid (`Col md={3}` + `Col md={9}`)
- **Header** (`Header.js`): Navigation bar using React Bootstrap Navbar
- **Sidebar Menu** (`Menues.js`): ListGroup navigation (Home, Customers, Products, Orders, Stocks, Account Setting)
- **Route-based views**: Three main routes via React Router:
  - `/` → `Home` component
  - `/user-register` → `UserRegistration` component
  - `/user-view` → `ViewUsers` component

### Data Flow Patterns
- **Props-based state**: Components receive data via props (e.g., `ViewUsers` accepts `users` prop)
- **Local state with hooks**: `AllUsers.js` uses `useState` to manage user arrays
- **No global state**: Currently no Redux/Context API; state is passed directly to child components

### Component Responsibilities
- **Home.js**: Landing page with toast notifications (uses react-toastify)
- **ViewUsers.js**: Table display for individual user (receives single `users` prop)
- **AllUsers.js**: Renders multiple users by mapping `ViewUsers` with each user
- **UserRegistration.js**: Form component for registering new users (uncontrolled form - no submit handler)
- **Header.js**: Top navigation with brand and menu links
- **Menues.js**: Sidebar navigation with ListGroup items
- **ToastContainerComponent.js**: Unused toast component (see notes section)

## Styling & UI Framework
- **Primary styling**: React Bootstrap (`react-bootstrap`) + Reactstrap
- **Global CSS**: Imported in `index.js`:
  - `bootstrap/dist/css/bootstrap.min.css` → Bootstrap 5.3.8
  - `react-toastify/dist/ReactToastify.css` → Toast notifications
- **App-specific styles**: `App.css` (check for component overrides)
- **Material-UI available**: MUI packages installed (`@mui/material`, `@mui/icons-material`) but not currently used

## Development Workflows

### Running the Application
```bash
npm start          # Dev server on http://localhost:3000
npm test           # Run tests in interactive watch mode
npm run build      # Production build to /build folder
```

### Build & Deployment
- **Build output**: Optimized production bundle in `/build` folder with hashed filenames
- **Testing framework**: Jest + React Testing Library (configured in `setupTests.js`)
- **Linting**: ESLint extends `react-app` config (see `package.json`)

## Code Patterns & Conventions

### Component Structure
- **Functional components** using React hooks (no class components)
- **Fragment wrapping**: Used in `UserRegistration.js` to group JSX without extra DOM nodes
- **Inline styles**: Some components use inline style props (e.g., `UserRegistration` width styling)

### HTML Attributes
- ⚠️ **Non-standard attributes**: Uses `class` instead of `className` in some places (`ViewUsers.js`, `UserRegistration.js`)
  - Should be replaced with `className` for React best practices
- **Form inputs**: Use Reactstrap `Input` component mixed with HTML (inconsistent)

### Routing Quirks
- Routes in `App.js` have typo: `exract` instead of `exact` (non-functional, but harmless with current setup)
- Navigation in `Menues.js` uses hardcoded `href` instead of React Router `Link` component (causes full page reloads)

### Toast Notifications
- Implemented in `Home.js` using `react-toastify`
- Pattern: `toast("message")` after importing `toast` from `react-toastify`
- Container rendered as `<ToastContainer />` in component

## Integration Points & External Dependencies

### API Communication
- **Axios** installed (^1.13.2) but not currently used in components
- Ready for HTTP requests to backend services
- **Common pattern when implemented**: Fetch user data in `useEffect` hooks

### External Services (Future Integration)
- No current backend integration visible
- Expected endpoints likely: users, products, orders, customers management

## Known Issues & Incomplete Patterns

1. **Uncontrolled form**: `UserRegistration.js` has no `onChange` handlers or `onSubmit` logic
   - Form fields need state management before use
   
2. **Navigation inconsistency**: 
   - `Header.js` has hardcoded `#` href links
   - `Menues.js` uses old `href` instead of React Router `Link`
   - Should migrate to `react-router-dom` `Link` component

3. **Unused components**: 
   - `AllUsers.js` imported but not used in routes
   - `ToastContainerComponent.js` defined but not referenced
   
4. **Prop validation**: No PropTypes or TypeScript (consider adding for type safety)

5. **CSS in `class` attribute**: Use `className` for React compliance in table (`ViewUsers.js`)

## When Adding New Features

1. **New pages**: Create component in `src/components/`, add route in `App.js` Router section
2. **Forms with state**: Use `useState` hook, ensure `onChange` handlers bind inputs to state
3. **Lists/tables**: Follow `AllUsers.js` pattern: map data in parent, pass individual items as props to display components
4. **API calls**: Use Axios with `useEffect`, place fetch logic in component where data is first needed
5. **Navigation**: Use React Router `Link` component instead of `<a>` tags for internal routes
6. **Styling**: Prefer React Bootstrap components + Bootstrap utilities over inline styles; use `className` prop

