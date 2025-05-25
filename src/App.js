import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [citation, setCitation] = useState({ 
    texte: "Cliquez pour une citation", 
    auteur: "Auteur inconnu" 
  });

  const fetchCitation = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/random-citation/');
      setCitation(response.data[0]);
    } catch (error) {
      console.error("Erreur:", error);
      setCitation({
        texte: "Erreur de chargement",
        auteur: "Vérifiez le serveur"
      });
    }
  };

  return (
    <div className="app-container">
      <h1>Générateur de Citations</h1>
      <div className="citation-box">
        <p>"{citation.texte}"</p>
        <p>- {citation.auteur}</p>
      </div>
      <button onClick={fetchCitation} className="nouvelle-btn">
        Nouvelle Citation
      </button>
    </div>
  );
}

export default App;