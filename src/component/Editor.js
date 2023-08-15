import React, { useState } from 'react'
import TextArea from 'antd/es/input/TextArea';
import { Input } from 'antd';
import { useParams } from 'react-router-dom';
import { noteData } from '../data';

const Editor = (props) => {

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const { noteId } = useParams("noteId");

  //get note by note id

  const noteData = {
    id: 1,
    title: "lesion 1",
    content: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team.`,
  }
  const handleTitleBlur = (e) => {
    console.log(e.target.value);
  }

  const handleNoteBlur = (e) => {
    console.log(e.target.value);
  }

  return (
    <div style={style.container} onBlur={handleTitleBlur}>
      <Input placeholder='Untitle' onChange={(event) => setTitle(event.target.value)} style={style.input} defaultValue={noteData.title}></Input>
      <TextArea style={style.text_area} onChange={(event) => setNote(event.target.value)} onBlur={handleNoteBlur} defaultValue={noteData.content} />
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

export default Editor
