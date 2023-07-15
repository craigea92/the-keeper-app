import React, { useState } from "react";

function CreateArea(props) {
  // Initializing state variable 'note' and its setter function 'setNote' using the 'useState' hook
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // Event handler function to handle changes in the input fields
  function handleChange(event) {
    // Extracting the 'name' and 'value' properties from the target element of the event
    const { name, value } = event.target;

    // Updating 'note' object by creating a new object that includes the previous note properties and the updated property
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  // Event handler function to handle form submission
  function submitNote(event) {
    // Calling the 'onAdd' function passed as a prop and passing the 'note' object
    props.onAdd(note);

    // Resetting the 'note' object to its initial state
    setNote({
      title: "",
      content: "",
    });

    // Preventing the default form submission behavior
    event.preventDefault();
  }

  // Render function of the CreateArea component
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
