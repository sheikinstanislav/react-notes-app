import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
  return (
    <header className="header">
      <h1>NotesApp</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Toggle Mode
      </button>
    </header>
  );
};

export default Header;
