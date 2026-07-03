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

## Current flow and known setup issue

Login/Signup use Firebase Auth helpers; `Updata` collects upload data; admin lists/manages entries; `youtube/[videoId]` renders a detail route. Firebase modules live under `src/app/sv/`. The source imports Firebase, but `package.json` currently does not list `firebase`; install it with `npm install firebase` and commit the updated lockfile.

## Video storage design

Use Firestore for metadata only (title, description, owner UID, URL and timestamps). Store large files in Firebase Storage or another object store, then write the resulting URL to Firestore. Define file type/size limits, upload progress, cancellation and cleanup when metadata creation fails.

## Authorization

Only authenticated users should create records; only the owner or a server-verified admin should modify/delete them. Hiding the Admin link in React is not security—enforce ownership/custom claims in Firestore and Storage Rules. Test direct access to admin, missing IDs, interrupted uploads and cross-user updates before deploy.

`Updata` appears to be a typo; if renamed to `Upload`, update all links. Also verify the lint script against the installed Next.js version and run a production build.
