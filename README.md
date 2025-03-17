# Music service on Next.js

Welcome to a music service based on Next.js. This project utilizes the power of Next.js and a modern technology stack to create a user-friendly and functional web application for listening to music.

### About

This project was created using [create-next-app](https://nextjs.org/docs/api-reference/create-next-app), and includes the following key pages and features:

### Authorization page

- **Mockup**: The page conforms to the provided layout.
- **Data Validation**: If incorrect data is entered, access to the next step is blocked.
- **Correct Data**: If correct data is entered, the user is redirected to the home page, data is stored in localStorage.
- **Registration**: If the user is not registered, the user can go to the registration page.

### Registration page

- **Mockup**: The page conforms to the provided layout (pop-up messages are not included).
- **Tips**:
    - When entering an email, a tooltip with an example is displayed (to demonstrate the form features).
    - When entering a password, information about minimum length and allowable characters is displayed.
- **Validation**: Registration fails if data is entered incorrectly (empty fields, passwords do not match, length is less than 8 characters). The message "all fields must be filled in correctly" is displayed.
- **Successful registration**: If the data is entered correctly, the registration takes place on the server and the user is logged in.


- **Skeleton**: When the page loads, the skeleton is displayed according to the layout.
- **Mockup**: The page matches the layout.
- **Navigation**:
    - The "Home" field leads to the home page.
    - The "My Playlist" field leads to your favorite tracks.
    - The "Logout" field clears data from localStorage, the field changes to "Login" and redirects to the authorization page when clicked.
- **Display**:
    - Depending on the login, displays the user's email and a button to logout in the right corner.
- **Search**: The search field allows you to search for tracks by title or author.
- **Likes**: Tracks can be liked and are added to the My Playlist page. Disliking a track removes it.
- **Player**:
    - When you click on the icon next to the track name, playback starts, a player appears with start, pause, next track, previous track, loop and shuffle buttons.
    - The player continues to play tracks when you go to the My Playlist and Selections pages.

### Player

The player is implemented using React and Redux for state management. Here are some of its key features:

- **Track Management**:
    - Playing tracks (start/pause).
    - Switching between tracks (next/previous).
    - Shuffle and loop mode.
- **Interface**:
    - Display of the current track, its author and album.
    - Ability to give likes and dislikes.
    - Control volume and playback time with sliders.
- **State Management**:
    - Using Redux to control player state, current track, time and volume.
    - Handling audio element events (ended, timeupdate, canplay).
    - Updating player state when track or playback time changes.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Basic Commands


- **dev**: Starts a local server for development. This allows you to make changes to the code and see the results immediately.
- **build**: Creates an optimized production version of the application, ready for deployment.
- **start**: Starts the application in production mode after it has been built.
- **lint**: Checks code for compliance with standards and style rules.
- **test**: Runs tests to verify functionality and code correctness.
