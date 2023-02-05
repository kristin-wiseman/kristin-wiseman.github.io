import React from 'react';
import './App.css';

function NavBar(props) {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  return (
    <>
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <div>
        <p>More Coming Soon!</p>
        <p>
          For now, please find me on&nbsp;
          <a href='https://linkedin.com/in/kristinwiseman' target="_blank">LinkedIn</a>
        </p>
      </div>
    </>
  );
  }
}

export default App;
