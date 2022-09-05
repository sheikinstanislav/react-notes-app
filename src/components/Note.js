import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
