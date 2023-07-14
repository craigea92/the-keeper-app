import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // Initializing state variable 'notes' and its setter function 'setNotes' using the 'useState' hook
  const [notes, setNotes] = useState([]);

  // Function to add a new note to the 'notes' array
  function addNote(note) {
    // Updating 'notes' array by creating a new array that includes the previous notes and the new note
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  // Function to delete a note from the 'notes' array based on its id
  function deleteNote(id) {
    // Updating 'notes' array by filtering out the note with the given id
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  // Render function of the App component
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
