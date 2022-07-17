import React from 'react';
import NotesAktif from './NotesAktif';

export default ({notes, onDelete, onArsip}) => {
  const notesAktif = notes();
  if(notesAktif.length == 0) {
    return (
      <p className='not-found__notes'>Tidak ada catatan</p>
    )
  } else {
    return (
      <div className="notes-list">
        {notesAktif.map(note => (
          <NotesAktif note={note} onDelete={onDelete} onArsip={onArsip}/>
        ))}
      </div>
    );
  }
};
