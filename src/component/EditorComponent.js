import React, { useRef, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';

function EditorComponent() {
  const editorInstance = useRef(null);

  useEffect(() => {
    // Khởi tạo EditorJS
    editorInstance.current = new EditorJS({
      holder: 'editor-container', // ID của phần tử chứa EditorJS
      tools: {
        header: Header,
        // Các plugin khác mà bạn muốn sử dụng
      },
      // Cấu hình khác của EditorJS
    });
  }, []);

  return (
    <div>
      <div 
        id="editor-container" 
        style={{
            border: "1px solid #e0e0e0",
            width: "100vh"
        }}></div>
    </div>
  );
}

export default EditorComponent;
