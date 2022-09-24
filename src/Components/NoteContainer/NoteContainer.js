import React from 'react'
import Note from "../Note/Note";
import './NoteContainer.css'

function NoteContainer(props) {

  const reverseNotes =(notes)=>{
    const revNotes=[]

    for(let i=notes.length-1;i>=0;i--)
    {
      revNotes.push(notes[i]);
    }
    return revNotes;
  } 

  const notes = reverseNotes(props.notes);

  return (
    <div className='note-container'>
      <h2>Notes</h2>
      <div className='note-container_notes custom-scroll'>
        { notes.length >0 ?
          notes.map((item)=> <Note
          key={item.id}
          note={item}
          deleteNote={props.deleteNote}
          />) : (<h3>Click + to add notes </h3>)
        }
      </div>
    </div>
  )
}

export default NoteContainer;