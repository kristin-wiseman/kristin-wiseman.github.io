import React from 'react';
import logo from './logo.svg';
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
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
    </div>
  );
  }
}

export default App;
