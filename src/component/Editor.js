// import React, { useState } from 'react'
// import TextArea from 'antd/es/input/TextArea';
// import { Input } from 'antd';
// import { useParams } from 'react-router-dom';

// const Editor = (props) => {

//   const [title, setTitle] = useState("");
//   const [note, setNote] = useState("");
//   const { id } = useParams("id");

//   // get note by note id

//   var defaultTitle = ""
//   var defaultContent = ""

//   const handleTitleBlur = (e) => {
//     console.log(e.target.value);
//   }

//   const handleNoteBlur = (e) => {
//     console.log(e.target.value);
//   }

//   return (
//     <div style={style.container} onBlur={handleTitleBlur}>
//       <Input placeholder='Untitle' onChange={(event) => setTitle(event.target.value)} style={style.input} defaultValue={defaultTitle}></Input>
//       <TextArea style={style.text_area} onChange={(event) => setNote(event.target.value)} onBlur={handleNoteBlur} defaultValue={defaultContent} />
//     </div>
//   )
// }

// const style = {
//   container: {
//     width: 1000,
//   },
//   input: {
//     height: 50,
//     marginBottom: 24,
//   },
//   text_area: {
//     height: "70vh",
//   },
// }

// export default Editor
