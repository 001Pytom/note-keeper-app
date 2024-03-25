import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  // for the beautification

  const [isExpanded, setIsEXpanded] = useState(false);
  const [noteBox, setNoteBox] = useState({
    title: "",
    content: "", //learnt here that this has to be the same name as on input
  });

  function displayInputText(e) {
    const { name, value } = e.target;
    setNoteBox((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function submitNote(e) {
    e.preventDefault();
    props.onAdd(noteBox);
    setNoteBox({
      title: "",
      content: "",
    });
  }

  function expand() {
    setIsEXpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            onChange={displayInputText}
            value={noteBox.title}
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={displayInputText}
          value={noteBox.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
