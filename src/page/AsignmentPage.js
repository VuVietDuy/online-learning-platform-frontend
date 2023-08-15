import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

import Asignment from '../component/Asignment'
import { asignments } from '../data'

function AsignmentPage() {

  const {id} = useParams("id")

  return (
    <div>
      {asignments.map(asignment => {
        return (
          <NavLink to={`/${id}/asignment/${asignment.id}/detail`} key={asignment.id}>
            <Asignment title={asignment.title}></Asignment>
          </NavLink>
        )
      })}
    </div>
  )
}

export default AsignmentPage