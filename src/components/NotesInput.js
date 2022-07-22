import React from 'react';

export default ({ hiddenForm, validateTitleEventHandler , handleBodyInputChange, handleSubmit}) => {
  return (
    <section className="add-notes animation-hidden-form">
      <div className="add-notes-header">
        <h2>Buat Catatan</h2>
        <img src="/images/close.png" alt="Tombol close form" onClick={hiddenForm} />
      </div>
      <div className="popup-success d-none">
        <p>Catatan Berhasil Dibuat!</p>
      </div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <p>Sisa karakter: <span>50</span></p>
        <input type="text" placeholder="Ini adalah judul.." autoComplete="off" onChange={(event) => validateTitleEventHandler(event)}/>
        <textarea cols="40" rows="10" placeholder="Tuliskan catatanmu di sini.." autoComplete="off" onChange={(event) => handleBodyInputChange(event)}></textarea>
        <button type="submit">Buat</button>
      </form>
    </section>
  );
};
