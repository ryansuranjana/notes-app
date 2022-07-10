import React from 'react';
import NotesSearch from './NotesSearch';
import NotesInput from './NotesInput';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <header>
          <h1>Notes App</h1>
        </header>
        <main>
          <NotesSearch />
          <NotesInput />
        </main>
      </>
    );
  }
}

export default App;
