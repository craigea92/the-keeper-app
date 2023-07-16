import React from "react";

function Note(props) {
  // Event handler function to handle the delete button click
  function handleClick() {
    // Calling the 'onDelete' function passed as a prop and passing the 'id' prop of the Note component
    props.onDelete(props.id);
  }

  // Render function of the Note component
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
