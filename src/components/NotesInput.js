import React from 'react';

export default () => {
  return (
    <section className="tambah-catatan">
      <div class="tambah-catatan-header">
        <h2>Buat Catatan</h2>
        <img src="/images/close.png" alt="Tombol close" />
      </div>
      <form>
        <input type="text" placeholder="Ini adalah judul.." autoComplete="off" />
        <textarea cols="40" rows="10" placeholder="Tuliskan catatanmu di sini.." autoComplete="off"></textarea>
        <button type="submit">Buat</button>
      </form>
    </section>
  );
};
