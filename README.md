Notes App
A simple Notes application built with React.js that allows users to add, update, and delete notes. The list of notes can be displayed by clicking a button.

Features:

Add new notes
Update existing notes
Delete notes
Display list of notes on button click

Installation:

  Clone the repository:
  git clone https://github.com/your-username/notes-app.git
  cd notes-app

  Install the dependencies:
  npm install
  
  Start the development server:
  npm start
  
Usage:
Open your browser and navigate to http://localhost:3000.
Enter a note in the input field and click "Save Note" to add a new note.
Click the "List Notes" button to display the list of notes.
Click on the "Update" button next to a note to update its content.
Click on the "Delete" button next to a note to delete it.

Code Explanation:
The main component of the application is App, which handles the state and logic for adding, updating, deleting, and displaying notes.

State Variables:
toDo: An array that holds the list of notes.
text: A string that holds the current text input value.
isUpdating: A boolean that determines whether the app is in update mode.
toDoId: A string that holds the ID of the note being updated.
showNotes: A boolean that controls the visibility of the notes list.
Functions
useEffect: Fetches all notes when the component mounts and sets the toDo state.
updateMode(_id, text): Sets the app to update mode, pre-fills the input with the note text, and sets the toDoId.
onDisplayNotes(): Sets showNotes to true to display the list of notes.
addToDo: Adds a new note.
updateToDo: Updates an existing note.
deleteToDo: Deletes a note.

JSX Structure:
input: An input field for adding or updating a note.
button: A button to trigger the display of the notes list.
div.add: A div acting as a button to save or update a note.
ToDo component: Renders each note with options to update or delete.
