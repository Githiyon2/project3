import React from "react";
import { Trash } from "lucide-react";
import Button from "../button/Button";

const Note = ({ handleDelete, noteId, text }) => {
  return (
    <>
      <div className="w-1/4 h-48  border border-2 m-5 rounded-lg text-white flex flex-col justify-between p-3">
        <div className="w-full h-4/5 flex capitalize break-all">{text}</div>
        <div className="w-full h-1/5 relative">
          <span className="absolute left-4 bottom-1 text-white">
            {100 - text.length}
          </span>
          <Button
            className="absolute right-2 bottom-1"
            handleClick={() => {
              handleDelete(noteId);
            }}
            btnName={<Trash />}
          />
        </div>
      </div>
    </>
  );
};

export default Note;
