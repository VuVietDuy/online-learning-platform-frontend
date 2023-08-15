import React from 'react'
import EditorJS from '@editorjs/editorjs'; 
import { Header } from '@editorjs/header';

const editorConfig = new EditorJS({ 
  /** 
   * Id of Element that should contain the Editor 
   */ 
  holder: 'editorjs', 

  tools: {
    header: Header, 
  },

  onReady: () => {
    console.log('Editor.js is ready to work!')
  }
})

export {
  editorConfig
}
