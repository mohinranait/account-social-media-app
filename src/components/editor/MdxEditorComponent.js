'use client'
import { MDXEditor, headingsPlugin } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import { useEffect, useRef, useState } from 'react';




const MdxEditorComponent = ({ value, setValue, placeholder, editorRef, ...props }) => {
    const editor = useRef();
    const handleChange = () => {
        const textValue = editor.current?.getMarkdown();
        setValue(textValue)
    }


    return (
        <>
            <MDXEditor
                ref={editor}
                className='mdx_editor_chat'
                onChange={handleChange}
                markdown={value}
                placeholder={placeholder}
                plugins={[headingsPlugin()]}
            />

        </>
    )
}

export default MdxEditorComponent