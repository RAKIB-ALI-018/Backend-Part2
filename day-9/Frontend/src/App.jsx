import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [note, setNote] = useState([
    // {
    //   title: "test title 1",
    //   description: "description 1"
    // },
    // {
    //   title: "test title 2",
    //   description: "description 2"
    // },
    // {
    //   title: "test title 3",
    //   description: "description 3"
    // },
    // {
    //   title: "test title 4",
    //   description: "description 4"
    // }
  ]);

  axios.get('http://localhost:3000/api/notes')
    .then((res) => {
      setNote(res.data.notes);

  })
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
