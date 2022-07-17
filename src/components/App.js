import React from 'react';
import NotesSearch from './NotesSearch';
import NotesInput from './NotesInput';
import NotesListAktif from './NotesListAktif';
import NotesListArsip from './NotesListArsip';
import { getInitialData } from '../utils/index';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    }

    this.showFormEventHandler = this.showFormEventHandler.bind(this);
    this.hiddenFormEventHandler = this.hiddenFormEventHandler.bind(this);
    this.getNotesListAktif = this.getNotesListAktif.bind(this);
    this.getNotesListArsip = this.getNotesListArsip.bind(this);
    this.onDeleteNotesEventHandler = this.onDeleteNotesEventHandler.bind(this);
  }

  showFormEventHandler(event) {
    const form = document.querySelector('.add-notes');
    const notes = document.querySelector('.notes');
    if (form.classList.contains('animation-hidden-form')) {
      form.classList.remove('animation-hidden-form');
      form.classList.add('animation-show-form');
      notes.classList.remove('animation-up-notes');
      notes.classList.add('animation-down-notes');
    }
  }

  hiddenFormEventHandler(event) {
    const form = document.querySelector('.add-notes');
    const notes = document.querySelector('.notes');
    if (form.classList.contains('animation-show-form')) {
      form.classList.remove('animation-show-form');
      form.classList.add('animation-hidden-form');
      notes.classList.remove('animation-down-notes');
      notes.classList.add('animation-up-notes');
    }
  }

  onDeleteNotesEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  getNotesListAktif() {
    return this.state.notes.filter((note) => note.archived === false);
  }

  getNotesListArsip() {
    return this.state.notes.filter((note) => note.archived === true);
  }

  render() {
    return (
      <>
        <header className="title-apps">
          <h1>Notes App</h1>
        </header>
        <main>
          <NotesSearch showForm={this.showFormEventHandler} />
          <NotesInput hiddenForm={this.hiddenFormEventHandler} />
          <section className="notes animation-up-notes">
            <h2>Catatan Aktif</h2>
            <NotesListAktif notes={this.getNotesListAktif} onDelete={this.onDeleteNotesEventHandler}/>
            <h2>Arsip</h2>
            <NotesListArsip notes={this.getNotesListArsip} onDelete={this.onDeleteNotesEventHandler}/>
          </section>
        </main>
      </>
    );
  }
}

export default App;
