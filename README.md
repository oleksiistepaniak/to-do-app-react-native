# To-Do Mobile App (React Native)

This project is a mobile to-do list application developed using **React Native** and **Expo**. It consists of three main tabs:

1. **Home Screen** — general information about the app.
2. **Create Task** — allows users to create new tasks and add them to their task list.
3. **Task List** — allows users to view, update, start, complete, and delete tasks.

All data is stored in **Context API** during runtime without any backend server.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [App Structure](#app-structure)
- [Key Features](#key-features)
- [Technologies](#technologies)
- [Author](#author)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/to-do-app-react-native.git
    ```

2. Install dependencies:
    ```bash
    cd to-do-app-react-native
    npm install
    ```

## Running the Project

To run the project on your mobile device, follow these steps:

1. **Install Expo Go**:
   - For **Android**, download **Expo Go** from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).
   - For **iOS**, download **Expo Go** from the [App Store](https://apps.apple.com/us/app/expo-go/id982107779).

2. **Start the project**:
   - Open your terminal and navigate to the project folder.
   - Run the following command to start the Expo server:
     ```bash
     npx expo start
     ```

3. **Scan the QR Code**:
   - Once the Expo server is running, a QR code will appear in your terminal.
   - Open the **Expo Go** app on your mobile device and scan the QR code to launch the app on your phone.

The app should now be running on your mobile device!

## App Structure

### Main Components

1. **Home Screen**: Displays general information about the app, such as the app name and other details.
2. **Create Task Screen**: Allows users to create new tasks by filling in the task title and description.
3. **Task List Screen**: Displays a list of all created tasks and allows users to:
   - Update task details.
   - Change task status (active/completed).
   - Delete tasks from the list.

### Context API

Task data is stored locally using **Context API**, meaning all changes (creating, updating, deleting tasks) are stored only in the current session, and they are not persisted after closing the app. The context is used for global state management across the app.

## Key Features

- **Create Task**: The app allows users to create tasks with a title and description. Once a task is created, it gets added to the task list.
- **View Tasks**: In the task list tab, users can view all created tasks along with their current status (active or completed).
- **Update Tasks**: Users can update the status of tasks, marking them as "completed" or "active".
- **Delete Tasks**: Users can remove tasks from the list.
- **Real-time Data**: Since data is stored only in memory via Context API, the app does not have a backend and does not persist data after restarting the app.

## Technologies

- **React Native**: Framework for building mobile applications.
- **Expo**: Platform for rapid mobile app development using React Native.
- **Context API**: For global state management without a backend.
- **React Navigation**: For navigation between app screens.
- **Jest**: For testing the application.

## Author

This project was developed by [Oleksii Stepaniak](https://github.com/oleksiistepaniak/).