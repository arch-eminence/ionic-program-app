# Ionic Program App

A mobile app built with Ionic Framework and Angular that allows users to search and view university programs.

## Screens
- **Program Search Page** — Browse programs with sort and filter
- **Program Detail Page** — Full program info with apply button

## Tech Stack
- Ionic Framework 7
- Angular 17
- TypeScript
- SCSS

## How to Run
```bash
npm install -g @ionic/angular
ionic start ionic-program-app blank --type=angular
ionic serve
```

## Features
- Program search with filter modal
- Sort by relevance, price, views
- Favorite and share programs
- Full detail page with fees, requirements, structure
- Angular routing between pages
- Mock data with TypeScript interfaces
## Known Limitations & Areas for Improvement
Current Limitations

No real API — All data is hardcoded mock data. A real app would use Angular HttpClient with a REST API.
No persistent favorites — Favorites reset on page refresh. Would need localStorage or a backend to persist.
No search debounce — The search input triggers immediately. A debounceTime RxJS operator should be added for performance.
Images are external URLs — Program images are loaded from Unsplash. In production, images would be served from a CDN or the app's own storage.
No loading states — There are no skeleton screens or loading spinners for when data loads. In a real app with API calls, these would be essential.
No error handling — There is no UI feedback for failed data fetches or navigation errors.

## Areas for Improvement

Add a service layer — Create a ProgramService to handle all data fetching, separating concerns from the components.
Add unit tests — Component specs with Jasmine/Karma and e2e tests with Cypress.
Infinite scroll — Replace the static list with ion-infinite-scroll for large datasets.
Search with debounce — Use RxJS Subject + debounceTime for real-time search.
Animations — Add page transition animations and card entrance animations.
Accessibility — Add proper aria-label attributes and keyboard navigation support.
PWA support — Add a service worker for offline capability using @angular/pwa.

