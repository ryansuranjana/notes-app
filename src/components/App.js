import React from 'react';
import NotesSearch from './NotesSearch';
import NotesInput from './NotesInput';
import NotesListAktif from './NotesListAktif';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.showFormEventHandler = this.showFormEventHandler.bind(this);
    this.hiddenFormEventHandler = this.hiddenFormEventHandler.bind(this);
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
            <NotesListAktif />
          </section>
        </main>
      </>
    );
  }
}

export default App;
