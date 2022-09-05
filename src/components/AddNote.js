import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
    }
    setNoteText('');
  };

  return (
    <div className="note new">
      <textarea
        cols="8"
        rows="10"
        placeholder="Type to add note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
