import React from 'react';

export default ({ showForm, handleSearchNotes }) => {
  return (
    <section className="search-input">
      <input type="text" placeholder="Cari Catatan.." onChange={(event) => handleSearchNotes(event)}/>
      <div className="btn-add">
        <img src="/images/plus.png" alt="Tombol show form" onClick={showForm} />
      </div>
    </section>
  );
};
