import React from 'react';

export default ({ showForm }) => {
  return (
    <section className="search-input">
      <input type="text" placeholder="Cari Catatan.." />
      <div className="btn-add">
        <img src="/images/plus.png" alt="Tombol show form" onClick={showForm} />
      </div>
    </section>
  );
};
