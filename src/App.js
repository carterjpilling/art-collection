import React from 'react';
import Header from './components/Header'
import ArtDisplay from './components/ArtDisplay'
import './App.css'
import './reset.css'

function App() {
  return (
    <div className="App">
      <ArtDisplay />
      <Header />
    </div>
  )
}

export default App