import React from 'react';
import {showFormattedDate} from '../utils/index'; 

export default ({note}) => {
  return (
    <div className="card">
      <article>
        <header>
          <h3>{note.title}</h3>
          <p className="date-notes">{showFormattedDate(note.createdAt)}</p>
        </header>
        <p className="description-notes">{note.body}</p>
      </article>
      <div className="action-notes">
        <div className="btn-delete">Delete</div>
        <div className="btn-move-notes">Arsipkan</div>
      </div>
    </div>
  );
};
