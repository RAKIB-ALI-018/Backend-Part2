import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [note, setNote] = useState([]);

  function fetchNotes() {
    axios.get('http://localhost:3000/api/notes')
      .then((res) => {
        setNote(res.data.notes);
      })
  }
  useEffect(() => {
    fetchNotes()
  }, [])



  return (
    <div className='notes'>
      {
        note.map(note => {
          return <div className='note'>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </div>
        })
      }

    </div>
  );
}

export default App;
