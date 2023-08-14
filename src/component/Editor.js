import React from 'react'
import EditorJS from '@editorjs/editorjs';

import { editorConfig } from '../config/TextEditorConfig'

const Editor = (props) => {

  const editor = new EditorJS(editorConfig)

  return (
    <div>
      <div id="editorjs"></div>
    </div>
  )
}

export default Editor
