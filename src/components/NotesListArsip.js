import React from 'react';
import NotesArsip from './NotesArsip';

export default ({notes}) => {
  const notesArsip = notes();
  return (
    <div className="notes-list">
      {notesArsip.map((note) => (
        <NotesArsip note={note}/>
      ))}
    </div>
  );
};
