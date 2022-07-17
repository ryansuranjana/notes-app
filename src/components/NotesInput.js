import React from 'react';

export default ({ hiddenForm }) => {
  return (
    <section className="add-notes animation-hidden-form">
      <div className="add-notes-header">
        <h2>Buat Catatan</h2>
        <img src="/images/close.png" alt="Tombol close form" onClick={hiddenForm} />
      </div>
      <form>
        <p>Sisa karakter: 50</p>
        <input type="text" placeholder="Ini adalah judul.." autoComplete="off" />
        <textarea cols="40" rows="10" placeholder="Tuliskan catatanmu di sini.." autoComplete="off"></textarea>
        <button type="submit">Buat</button>
      </form>
    </section>
  );
};