import React, { useState } from 'react'
import TextArea from 'antd/es/input/TextArea';
import { Input } from 'antd';

import { createNote } from '../service/NoteService';
import { useParams } from 'react-router-dom';

const CreateNote = (props) => {

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const {id} = useParams()

  //get note by note id

  var defaultTitle = ""
  var defaultContent = ""

  const handleTitleBlur = async (e) => {
    try {
        if (title || note) {
          await createNote(title, note, id);
        }
      } catch (error) {
        console.error('Error creating note:', error);
      }
  }

  const handleNoteBlur = async () => {
    try {
      if (title || note) {
        await createNote(title, note, id);
      }
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div style={style.container} onBlur={handleTitleBlur}>
      <Input placeholder='Untitle' onChange={(event) => setTitle(event.target.value)} style={style.input} defaultValue={defaultTitle}></Input>
      <TextArea style={style.text_area} onChange={(event) => setNote(event.target.value)} onBlur={handleNoteBlur} defaultValue={defaultContent} />
    </div>
  )
}

const style = {
  container: {
    width: 1000,
  },
  input: {
    height: 50,
    marginBottom: 24,
  },
  text_area: {
    height: "70vh",
  },
}

export default CreateNote
