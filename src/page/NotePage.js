import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

import NewNote from '../component/NewNote'
import Note from '../component/Note'
import { notes } from '../data'

function NotePage() {

  const {id} = useParams("id")

  return (
    <div>
      <NavLink to={`/${id}/editor/new`}><NewNote ></NewNote></NavLink>
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