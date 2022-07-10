import React from 'react';
import NotesSearch from './NotesSearch';

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
        </main>
      </>
    );
  }
}

export default App;
