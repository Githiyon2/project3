import React from "react";
import TextArea from "../textarea/TextArea";
import Button from "../button/Button";
import { stringData } from "../../data";

const CreateNote = ({ handleSave, handleChange, inputText }) => {
  const { save_Button, textArea_Name, textArea_Placeholder } = stringData;
  return (
    <>
      <div className="h-48 w-1/4 border border-2 flex flex-col justify-between p-2 rounded-lg text-white">
        <div className="w-full h-4/5">
          <TextArea
            className="w-full h-full bg-transparent border-none outline-none resize-none text-md capitalize"
            value={inputText}
            handleChange={handleChange}
            name={textArea_Name}
            placeholder={textArea_Placeholder}
          />
        </div>
        <div className="h-1/4 w-full relative">
          <span className="absolute left-4 bottom-1 text-white">
            {100 - inputText.length}
          </span>
          <Button
            className="px-3 py-1 rounded-lg bg-red-300 text-white absolute bottom-1 right-2"
            handleClick={() => handleSave()}
            btnName={save_Button}
          />
        </div>
      </div>
    </>
  );
};

export default CreateNote;
