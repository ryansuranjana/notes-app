import React from 'react';
import NotesAktif from './NotesAktif';

export default ({notes}) => {
  const notesAktif = notes();
  return (
    <div className="notes-list">
      {notesAktif.map(note => (
        <NotesAktif note={note}/>
      ))}
    </div>
  );
};
