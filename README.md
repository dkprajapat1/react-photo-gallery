# React Photo Gallery

A client-side photo gallery built with React 19, Vite, and Tailwind CSS 4. The application retrieves photo metadata from the Picsum Photos API, renders it in a responsive grid, supports author-based filtering, and persists favourite photo IDs in browser storage.

## Features

- Fetches 30 photos from the Picsum Photos API
- Responsive gallery layout using Tailwind CSS
- Real-time filtering by photo author
- Favourite management using React `useReducer`
- Favourite persistence through `localStorage`
- Loading state while API data is retrieved
- Empty-state message when no photos match the search
- ESLint configuration for JavaScript and React code

## Technical Architecture

```text
main.jsx
  └── App.jsx
      ├── Navbar.jsx
      │   └── Manages search input events
      └── Gallery.jsx
          ├── usePhotos()
          │   └── Fetches data from Picsum Photos
          ├── useMemo()
          │   └── Filters photos by author
          ├── useReducer()
          │   └── Toggles favourite photo IDs
          └── localStorage
              └── Persists favourites between sessions
