import React from 'react';
import NotesSearch from './NotesSearch';
import NotesInput from './NotesInput';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.showFormEventHandler = this.showFormEventHandler.bind(this);
    this.hiddenFormEventHandler = this.hiddenFormEventHandler.bind(this);
  }

  showFormEventHandler(event) {
    const form = document.querySelector('.tambah-catatan');
    if (form.classList.contains('animation-hidden-form')) {
      form.classList.remove('animation-hidden-form');
      form.classList.add('animation-show-form');
    }
  }

  hiddenFormEventHandler(event) {
    const form = document.querySelector('.tambah-catatan');
    if (form.classList.contains('animation-show-form')) {
      form.classList.remove('animation-show-form');
      form.classList.add('animation-hidden-form');
    }
  }

  render() {
    return (
      <>
        <header>
          <h1>Notes App</h1>
        </header>
        <main>
          <NotesSearch showForm={this.showFormEventHandler} />
          <NotesInput hiddenForm={this.hiddenFormEventHandler} />
        </main>
      </>
    );
  }
}

export default App;
