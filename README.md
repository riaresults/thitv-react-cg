# README #

Crisan Vasile-Gabriel

## Project requirements ##

Create a simple book track app that allows users to see a collection of books with the following specifications:
- Fetch the collection at [books api](​https://riabooksapi.azurewebsites.net/books)​. Filter that data and use the relevant fields.
- Display the list of books with image, title, author and genre.
- Give the user the option to switch between grid view and list view.
- When a user clicks on a book card / list item a modal will be opened and book
description, image, title and author will be displayed.
- Add a light/dark mode toggle and style the app accordingly.
- Allow the user to filter the books by adding a search bar. The user should be able to filter
all the fields and the list should be updated.

## Project setup ##

| Command                                   | Description                                                                                                                                                                |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm install`                         | Install the packages required for the project platform                                                                                                        |
| `npm run start`                        | Run the project locally using the port 3000                                                                                                       |
| `npm run build`                        | Prepare the project bundle for production use                                                                                                       |

## Project details ##

- For the project boilderplate i used [Create React-App](https://reactjs.org/docs/create-a-new-react-app.html).
- The option for the project architecture is the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).
- I used typescript in order to improve the type guard and code readability, for theming and styling.
- For styling and theming i used (styled-components)[https://styled-components.com/] because it helps keep the concerns of styling and element architecture separated and make components more readable.
- For faster layout development i added (boostrap-grid)[https://getbootstrap.com/docs/5.0/layout/grid/] to the project
- The logic of the books list is handled inside the reducer to have a more predictable and maintainable state architecture

## Improvements ##

- If i had more time allocated for this project I would configure linting with prettier to be part of the pre-commit step (using husky plugin).
- Add unit testing and part of the pre-commit step.
- Improve typings and create a better component structure for scalability.
- Improve image rendering to use webp, filtering on device by size, and defer them using progressive images.
- Better error handling for requests api and react components
- Add i18n internationalization in the project
- Improve user experience and system design
- Working on page performance issues (faster components, smaller images, better ux, find better alternative for libraries in order to reduce project size)
- Caching strategies for pages
