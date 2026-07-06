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

  function submitHandler(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;

    axios.post('http://localhost:3000/api/notes', {
      title: title.value,
      description: description.value
    })
      .then((res) => {
        console.log(res.data);
        fetchNotes()
      })

    title.value = ''
    description.value = ''
  }

  function deleteNote(noteId) {
    axios.delete("http://localhost:3000/api/notes/" + noteId)
      .then(res => {
        console.log(res.data)
        fetchNotes()
      })
  }

  return (
    <>
      <form className='note-create-form' onSubmit={submitHandler}>
        <input type="text" name='title' placeholder='Enter Title' />
        <input type="text" name='description' placeholder='Enter Description' />
        <button>Create note</button>
      </form>

      <div className='notes '>
        {
          note.map(n => {
            return <div className='note' key={n._id}>
              <h1>{n.title}</h1>
              <p>{n.description}</p>
              <button onClick={() => deleteNote(n._id)}>Delete</button>
            </div>
          })
        }
      </div>
    </>
  );
}

export default App;