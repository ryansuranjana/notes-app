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
      titleNewNote: '',
      body: '',
    }

    this.showFormEventHandler = this.showFormEventHandler.bind(this);
    this.hiddenFormEventHandler = this.hiddenFormEventHandler.bind(this);
    this.getNotesListAktif = this.getNotesListAktif.bind(this);
    this.getNotesListArsip = this.getNotesListArsip.bind(this);
    this.onDeleteNotesEventHandler = this.onDeleteNotesEventHandler.bind(this);
    this.onAktifNotesEventHandler = this.onAktifNotesEventHandler.bind(this);
    this.onArsipNotesEventHandler = this.onArsipNotesEventHandler.bind(this);
    this.validateTitleEventHandler = this.validateTitleEventHandler.bind(this);
    this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
    this.handleBodyInputChange = this.handleBodyInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  onArsipNotesEventHandler(id) {
    const note = this.state.notes.find((note) => note.id == id);
    note.archived = true;
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
        ]
      }
    })
  }

  onAktifNotesEventHandler(id) {
    const note = this.state.notes.find((note) => note.id == id);
    note.archived = false;
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
        ]
      }
    })
  }




  // task

  // validasi title input form
  validateTitleEventHandler(event) {
    const countCharacter = event.target.value.length;
    const inputTitleElement = document.querySelector('form input');
    const countCharacterSpan = document.querySelector('form p span');
    countCharacterSpan.innerHTML = 50 - countCharacter;
    if (countCharacter >= 50) {
      inputTitleElement.setAttribute('onkeypress', 'return false;');
    }
    else {
      inputTitleElement.setAttribute('onkeypress', 'return true;');
    }

    this.handleTitleInputChange(event);
  }
  // akhir validasi title input form

  // add notes

  handleTitleInputChange(event) {
    this.setState({
      titleNewNote: event.target.value
    });
  }

  handleBodyInputChange(event) {
    this.setState({
      body: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newNote = {
      id: this.state.notes.length + 1,
      title: this.state.titleNewNote,
      body: this.state.body,
      archived: false,
    }
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          newNote,
        ]
      }
    })
    event.target.reset();
    const popupSuccess = document.querySelector('.popup-success');
    popupSuccess.classList.remove('d-none');
    setTimeout(() => {
      popupSuccess.classList.add('d-none');
    }, 2000)
  }

  // akhir add notes

  // akhir task





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
          <NotesSearch showForm={this.showFormEventHandler}/>
          <NotesInput hiddenForm={this.hiddenFormEventHandler} validateTitleEventHandler={this.validateTitleEventHandler} handleTitleInputChange={this.handleTitleInputChange} handleBodyInputChange={this.handleBodyInputChange} handleSubmit={this.handleSubmit}/>
          <section className="notes animation-up-notes">
            <h2>Catatan Aktif</h2>
            <NotesListAktif notes={this.getNotesListAktif} onDelete={this.onDeleteNotesEventHandler} onArsip={this.onArsipNotesEventHandler}/>
            <h2>Arsip</h2>
            <NotesListArsip notes={this.getNotesListArsip} onDelete={this.onDeleteNotesEventHandler} onAktif={this.onAktifNotesEventHandler}/>
          </section>
        </main>
      </>
    );
  }
}

export default App;
