import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [viewNote, setViewNote] = useState([]);

  function addNote(note) {
    setViewNote((prevNote) => {
      return [...prevNote, note];
    });
  }
  function deleteNotes(id) {
    setViewNote((prevNote) => {
      return prevNote.filter((item, index) => {
        return index !== id;
      });
    });
    
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {viewNote.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            deletelNote={deleteNotes}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
