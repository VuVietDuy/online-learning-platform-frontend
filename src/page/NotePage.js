import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import NewNote from '../component/NewNote'
import Note from '../component/Note'
import { getNotesByCourseId } from '../service/NoteService'

function NotePage() {

  const {id} = useParams("id")

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNote = async () => {
      const notesData = await getNotesByCourseId(id);
      setNotes(notesData)
    }

    fetchNote()
  }, [id])

  return (
    <div>
      <NavLink to={`editor/new`}><NewNote ></NewNote></NavLink>
      {notes.map((note, i) => {
        return (
          <NavLink to={`/${id}/editor/${note.id}`} key={i}>
            <Note title={note.title} key={note.id}></Note>
          </NavLink>
        )
      })}
    </div>
  )
}

export default NotePage