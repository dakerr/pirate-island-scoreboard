import { useState, useEffect } from 'react';
import './App.css'
import { Scoreboard } from './components/Scoreboard';
import * as FirestoreService from './services/Firestore';

function App() {
  const [scoreboardId, _] = useState<string>('gVnOkIA68OF0zpu8f2IA');

  useEffect(() => {
    FirestoreService.authenticateAnonymously()
  }, [scoreboardId]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Scoreboard 
        scoreboardId={scoreboardId}
      />
    </div>  
  )
}

export default App
