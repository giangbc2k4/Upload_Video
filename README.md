# Upload_Video

Next.js video upload/viewing web app with Firebase authentication and Firestore integration.

## Features

- Login and signup pages.
- Video upload page.
- Admin page.
- Video detail page by `videoId`.
- Firebase Auth integration.
- Firestore helper module.
- Bootstrap-based UI components.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Bootstrap 5
- React Bootstrap
- Firebase Auth
- Firestore

## Project Structure

```text
src/app/Login/             Login page
src/app/Signup/            Signup page
src/app/Updata/            Upload page
src/app/admin/             Admin page
src/app/youtube/[videoId]  Video detail route
src/app/sv/                Firebase service modules
src/components/            Shared UI components
```

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local` and add your Firebase web app configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Roadmap

- Rename `Updata` route to `Upload`.
- Add screenshots and a demo video.
- Document where uploaded video files are stored.
- Add Firestore rules documentation.
