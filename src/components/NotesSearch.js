import React from 'react';

export default () => {
  return (
    <section className="search-input">
      <input type="text" placeholder="Cari Catatan.." />
      <div className="button-tambah">
        <img src="/images/plus.png" alt="Tombol Tambah" />
      </div>
    </section>
  );
};
