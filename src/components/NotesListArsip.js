import React from 'react';
import NotesArsip from './NotesArsip';

export default ({notes, onDelete, onAktif}) => {
  const notesArsip = notes();
  if(notesArsip.length == 0) {
    return (
        <p className='not-found__notes'>Tidak ada catatan</p>
    )
  } else {
    return (
      <div className="notes-list">
        {notesArsip.map((note) => (
          <NotesArsip note={note} onDelete={onDelete} onAktif={onAktif}/>
        ))}
      </div>
    );
  }
};
