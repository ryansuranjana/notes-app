import React from 'react';

export default () => {
  return (
    <div className="card">
      <article>
        <header>
          <h3>React Js</h3>
          <p className="date-notes">Minggu, 10 Juli 2022</p>
        </header>
        <p className="description-notes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi praesentium consectetur nostrum inventore doloribus? Similique dolorem laborum corporis minus quis?</p>
      </article>
      <div className="action-notes">
        <div className="btn-delete">Delete</div>
        <div className="btn-move-notes">Arsipkan</div>
      </div>
    </div>
  );
};
