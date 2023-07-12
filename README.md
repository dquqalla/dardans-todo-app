# **Dardan's To Do App**

The React-based To-Do app enables users to add new tasks to a dynamic list and easily mark them as completed with a simple click.

<p align="center">
    <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/61984924/251967345-5e36b018-10a2-4ac3-8425-d990202919c5.png">
</p>

## **Project Structure**

Below is the structure of the project, including folders and files.

```
├── README.md
├── package.json
├── public
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── components
    │   ├── Todo.js
    │   ├── TodoForm.js
    │   └── TodoList.js
    └── index.js
```

## **Files**

### _Todo.js_

The To Do component is a functional component that represents an individual to-do item in a to-do list. It renders a div containing the task text, which can be clicked to toggle its completion status. It also includes a delete icon if a user wants to delete the to-do item.

### _TodoForm.js_

The TodoForm component renders a form for adding new tasks to a to-do list.

### _TodoList.js_

The TodoList component acts as a wrapper for managing a to-do list. It includes functionality for adding, deleting, and toggling the completion of to-do items.

## **Commands**

In the project directory, you can run:

### `npm install`

Installs all the required dependencies and their specific versions listed in the dependencies section of the package.json file.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## **Trade-offs**

Given the task's time constraint, some trade-offs were made to ensure the app's basic functionality was met. These are noted below.

### _Local Storage Usage_

The project utilises local storage to persist the to-do list when the user returns to the app. While local storage is a convenient way to store data within a web browser, it does have its limitations. It has a limited storage capacity, around 5 MB, and can only store data as strings. An appropriate solution is a more scalable and structured storage solution, such as a backend database.

### _Authentication and User Management_

The app allows users to anonymously submit to-do tasks. Although, it does lack authentication and user management features. Implementing a backend server with user registration and login functionality should do the trick if the user requires specific functionalities, such as personalised to-do lists or user account management.

### _State Management_

React's "useState" hook manages the state of the to-do list. While suitable for small applications, if the app was to grow in complexity, there may be challenges with statement management. More advanced state management solutions like Redux would suit this particular use case.

### _Responsiveness_

Achieving full responsiveness across all devices wasn't feasible. Instead, I prioritized responsiveness on desktop devices for this production-ready app. In a more ideal scenario, I would adopt a mobile-first approach and progressively enhance the app's responsiveness for different screen sizes.

### _Testing_

No unit testing or integration testing is included. Comprehensive testing should be implemented to ensure the stability and reliability of the app. This can be achieved using test frameworks such as Jest and the React Testing library.

### _Error Handling and Validation_

Implementing error-handling mechanisms and validating user input is essential for a reliable and smooth user experience. This includes validating input fields, handling potential errors during state updates, and displaying meaningful error messages to the user when necessary.
