import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CreateNote from "../createnote/CreateNote";
import Note from "../note/Note";

const Notes = () => {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);
  function handleSave() {
    if (inputText.length > 0) {
      let newData = {
        id: uuidv4(),
        text: inputText,
      };
      let data = [...notes];
      data.push(newData);
      setNotes(data);
      setInputText("");
    }
  }

  function handleChange(e) {
    if (inputText.length < 100) {
      let value = e.target.value;
      setInputText(value);
    }
  }

  function handleDelete(id) {
    let data = [...notes];
    data = data.filter((d) => d.id !== id);
    setNotes(data);
  }
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        {notes.map((note, i) => {
          return (
            <Note
              key={note.id}
              noteId={note.id}
              text={note.text}
              inputText={inputText}
              handleDelete={handleDelete}
            />
          );
        })}
        <CreateNote
          handleSave={handleSave}
          handleChange={handleChange}
          inputText={inputText}
        />
      </div>
    </>
  );
};

export default Notes;
