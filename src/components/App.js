import React from 'react';
import NotesSearch from './NotesSearch';
import NotesInput from './NotesInput';
import NotesListAktif from './NotesListAktif';
import NotesListArsip from './NotesListArsip';
import { getInitialData } from '../utils/index';
import autoBind from 'auto-bind';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      titleNewNote: '',
      body: '',
      notesSearch: [],
      searchKeyword: '',
    }

    autoBind(this);
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
      id: +new Date(),
      title: this.state.titleNewNote,
      body: this.state.body,
      archived: false,
      createdAt: new Date(),
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

  handleSearchNotes(event) {
    const searchKeyword = event.target.value.toLowerCase();
    const notesSearch = this.state.notes.filter((note) => note.title.toLowerCase().includes(searchKeyword));
    this.setState({ notesSearch, searchKeyword });
  }

  getNotesListAktif() {
    const notes = this.state.searchKeyword.length == 0 ? this.state.notes : this.state.notesSearch;
    return notes.filter((note) => note.archived === false);
  }

  getNotesListArsip() {
    const notes = this.state.searchKeyword.length == 0 ? this.state.notes : this.state.notesSearch;
    return notes.filter((note) => note.archived === true);
  }

  render() {
    return (
      <>
        <header className="title-apps">
          <h1>Notes App</h1>
        </header>
        <main>
          <NotesSearch showForm={this.showFormEventHandler} handleSearchNotes={this.handleSearchNotes}/>
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
