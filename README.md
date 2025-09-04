# Book Finder

**Book Finder** is a responsive and user-friendly web application that lets users search for books by title.  
It uses the [Open Library API](https://openlibrary.org/developers/api) and displays results in a clean, engaging card-based layout.

---

# Features

-  Search books by title with real-time results
-  Card-based layout with book cover, title, author(s), and first published year
-  Pagination for easy navigation
-  Custom animated loader (book-style)
-  Responsive design (works on desktop, tablet, and mobile)
-  Clickable cards → open book details on Open Library

---

# Tech Stack

- Framework: React (Vite)
- Styling: Tailwind CSS
- Language: JavaScript (ES6+)
- API:Open Library API
- Package Manager: npm

---

# Project Structure
book-finder/
├── public/ # Static assets / screenshots
├── src/
│ ├── components/ # UI components (SearchBar, ResultsGrid, BookCard, etc.)
│ ├── hooks/ # Custom hooks (useDebounce)
│ ├── utils/ # API helpers (searchBooks, coverUrl)
│ ├── App.jsx # Main application
│ ├── main.jsx # Entry point
│ └── index.css # Tailwind + global styles
├── package.json
├── tailwind.config.cjs
└── postcss.config.cjs


# Installation & Setup (Local)

> Make sure you have [Node.js](https://nodejs.org/) (v16+) and npm installed.

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/book-finder.git
   cd book-finder
2. Install dependencies: npm install
3. Run development server: npm run dev
    Open: http://localhost:5173
4. Build for production: npm run build
5. Preview production build (optional): npm run preview -- --port 3000


# How It Works--

User types a title → useDebounce hook avoids extra API calls
searchBooks() (in src/utils/api.js) calls: https://openlibrary.org/search.json?title={query}&page={page}
Results are mapped into BookCard components
Clicking a card opens the Open Library page (https://openlibrary.org{doc.key}) for more details


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Future Enhancements

- Favorites / bookmarks (using localStorage)
- More detailed book view (subjects, descriptions, editions)
- Explore by author, genre, or year filters
- Dark mode support
- Infinite scroll for smoother UX

# User Persona

Name: Alex
Occupation: College Student
Need: A simple and engaging tool to quickly search and explore books by title.

# Contributing

Contributions are welcome!
- Fork the repo
- Create a branch (git checkout -b feat/your-feature)
- Commit changes (git commit -m "feat: add new feature")
- Push to your branch (git push origin feat/your-feature)
- Open a Pull Request

# License

This project is licensed under the MIT License.

# Author

Name: Om Vaidya
GitHub: omvaidya2003
Email: omvaidya411@gmail.com
