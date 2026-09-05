# Meds

Meds is a responsive medicine discovery web app designed to help users quickly search for medicines by brand name and explore essential product information in a clean, approachable interface.

## Why this project

Healthcare information needs to be easy to understand and easy to access. This project focuses on a simple user experience:

- users enter a medicine brand name
- the app queries the FDA Drug Label API
- matching medicines are displayed in a clear result list
- a user can click a result to view more detail

This makes the experience feel fast, practical, and user-friendly while still showing the power of real data integration.

## Features

- Search medicines by brand name
- Real API integration with the FDA Drug Label API
- Dynamic result rendering
- Clickable medicine cards to navigate to detail pages
- Loading state during API requests
- Mobile-friendly responsive design
- Modern UI built with Tailwind CSS

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router DOM
- FDA Open Data API

## Project Structure

```bash
meds/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   ├── MedicineDetail.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md
└── .gitignore
```

## User Flow

1. A user types a medicine brand such as Lipitor or Advil.
2. The app sends a request to the FDA API.
3. Matching medicine labels are fetched and displayed.
4. The user clicks a medicine card.
5. The app navigates to a dedicated detail page for that item.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## API Used

This project uses the FDA Drug Label API:

```text
https://api.fda.gov/drug/label.json
```

Example request:

```text
https://api.fda.gov/drug/label.json?search=openfda.brand_name:"Lipitor"&limit=20
```

## Deployment

This project is ready to deploy on Vercel.

Recommended Vercel configuration:

- Framework: Vite
- Build Command: npm run build
- Output Directory: dist
- Root Directory: meds

## What I learned

This project demonstrates:

- frontend state management with React
- API-driven UI development
- client-side routing with React Router
- responsive UI design with Tailwind CSS
- clean UX patterns such as loading states and clickable result cards

## License

This project is intended for learning and personal portfolio use.


