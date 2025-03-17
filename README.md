Music Service on Next.js

Welcome to the music service built on Next.js. This project utilizes the capabilities of Next.js and a modern technology stack to create a convenient and functional web application for listening to music.

About the Project

This project was created using create-next-app and includes the following key pages and features:

Authentication Page

Layout: The page follows the provided design.

Data Validation: If incorrect data is entered, access to the next step is blocked.

Correct Data: When valid data is entered, the user is redirected to the main page, and the data is saved in localStorage.

Registration: If the user is not registered, they can proceed to the registration page.

Registration Page

Layout: The page follows the provided design (popup messages are not included).

Hints:

When entering an email, a hint with an example is displayed (to demonstrate form capabilities).

When entering a password, information about the minimum length and allowed characters is shown.

Validation: Registration does not proceed if incorrect data is entered (empty fields, mismatched passwords, length less than 8 characters). A message "All fields must be filled correctly" is displayed.

Successful Registration: When valid data is entered, registration is processed on the server, and the user is redirected to the authentication page.

Home Page

Skeleton: A skeleton is displayed while the page is loading, following the design.

Layout: The page follows the provided design.

Navigation:

The "Home" tab leads to the main page.

The "My Playlist" tab leads to the favorite tracks.

The "Logout" button clears the data from localStorage, changes the button to "Login," and redirects to the authentication page when clicked.

Display:

Depending on the login status, the user's email and a logout button are displayed in the top right corner.

Search: The search field allows users to find tracks by title or artist.

Likes: Users can like tracks, adding them to the "My Playlist" page. Disliking removes the track from the playlist.

Player:

Clicking the icon next to the track title starts playback, displaying the player with play, pause, next track, previous track, loop, and shuffle buttons.

The player continues playing tracks when navigating to "My Playlist" and "Collections" pages.

Music Player

The player is implemented using React and Redux for state management. Some key features include:

Track Controls:

Play/Pause tracks.

Switch between tracks (next/previous).

Shuffle and loop modes.

Interface:

Display of the current track, artist, and album.

Ability to like and dislike tracks.

Volume and playback time control using sliders.

State Management:

Using Redux to manage player state, current track, time, and volume.

Handling audio element events (ended, timeupdate, canplay).

Updating the player state when the track or playback time changes.

Main Commands

dev: Starts the local development server. Allows immediate feedback on code changes.

build: Creates an optimized production build, ready for deployment.

start: Runs the application in production mode after building.

lint: Checks code for standard and style compliance.

test: Runs tests to verify functionality and correctness.

Getting Started

First, run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.

Learn More

To learn more about Next.js, check out the following resources:

Next.js Documentation - learn about Next.js features and API.

Learn Next.js - an interactive Next.js tutorial.

You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.

