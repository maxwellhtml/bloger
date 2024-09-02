"use client"
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
interface EditorProps {
    content: string;
    setContent: (content:string) => void;
}

const Editor: React.FC<EditorProps> = ({content, setContent}) => {
    const editor = useRef(null);
    return (
    <div className=''>
        <JoditEditor
			ref={editor}
			value={content} 
			onBlur={newContent => setContent(newContent)} 
			onChange={() => {}}
		/>
    </div>
  )
}

export default Editor
