import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Assurez-vous d'importer votre fichier CSS
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-vip">
        <a className="navbar-brand" href="#">FIFA PLAYER</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Players</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Teams</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="App-header">
        <h1>FIFA Player Cards</h1>
        <PlayersList />
      </header>
    </div>
  );
}

export default App;
