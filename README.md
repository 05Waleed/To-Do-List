# To-Do List Web App

A simple, interactive To-Do List web app built with HTML, CSS, and JavaScript. This app allows users to manage their tasks with ease by adding, completing, and deleting tasks. The app also features **data persistence** using `localStorage`, so your tasks are saved even after refreshing the page.

## Features

- **Add Tasks:** Type a task in the input field and click "Add" to add it to the list.
- **Complete Tasks:** Click on a task to mark it as complete (strikethrough effect).
- **Delete Tasks:** Click the delete button (`×`) to remove a task.
- **Persistence:** Tasks are saved in `localStorage`, so they persist even after reloading the page.

## How It Works

- **Adding Tasks:** The app listens for the "Add" button click, checks if the input is not empty, and then appends a new task (`<li>`) to the list.
- **Completing Tasks:** When a task is clicked, it toggles a "checked" class to apply a strikethrough effect.
- **Deleting Tasks:** Each task has a delete button (`×`), which, when clicked, removes the task from the list.
- **Data Persistence:** The tasks are saved in `localStorage`, meaning the list of tasks will remain even if you reload the page.

## Technologies Used

- **HTML:** Structure of the app and the list.
- **CSS:** Styling of the app, tasks, and buttons.
- **JavaScript:** Handles the interactivity, including adding, deleting, and marking tasks, as well as saving/loading tasks to/from `localStorage`.
