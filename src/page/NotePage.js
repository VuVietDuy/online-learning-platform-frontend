import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

import NewNote from '../component/NewNote'
import Note from '../component/Note'
import { courseInformation } from '../data'

function NotePage() {

  const {id} = useParams("id")

  return (
    <div>
      <NavLink to={`/${id}/editor`}><NewNote ></NewNote></NavLink>
      {courseInformation.notes.map(note => {
        return (
          <Note title={note.title}></Note>
        )
      })}
    </div>
  )
}

export default NotePage