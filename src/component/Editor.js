import React, { useEffect, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { Input } from 'antd';
import { useParams } from 'react-router-dom';

import { getNoteById, updateNote } from '../service/NoteService';

const Editor = () => {
  const [note, setNote] = useState({ title: '', content: '' });
  const { noteId } = useParams();

  useEffect(() => {
    const fetchNoteById = async () => {
      const noteData = await getNoteById(noteId);
      if (noteData) {
        setNote({
          title: noteData.title || '',
          content: noteData.content || '',
        });
      }
    };

    fetchNoteById();
  }, [noteId]);

  const handleTitleBlur = (e) => {
    const newTitle = e.target.value;
    updateNote(noteId, newTitle, note.content);
  };

  const handleNoteBlur = (e) => {
    const newContent = e.target.value;
    updateNote(noteId, note.title, newContent);
  };

  return (
    <div style={style.container} onBlur={handleTitleBlur}>
      <Input
        placeholder="Untitled"
        onChange={(event) => setNote({ ...note, title: event.target.value })}
        style={style.input}
        value={note.title}
      />
      <TextArea
        style={style.text_area}
        onChange={(event) => setNote({ ...note, content: event.target.value })}
        onBlur={handleNoteBlur}
        value={note.content}
      />
    </div>
  );
};

const style = {
  container: {
    width: 1000,
  },
  input: {
    height: 50,
    marginBottom: 24,
  },
  text_area: {
    height: '70vh',
  },
};

export default Editor;
