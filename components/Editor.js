import { useMemo,useCallback } from "react";
import { Editable,Slate,withReact } from "slate-react";
import { createEditor } from "slate";
import useEditorConfig from "../hooks/useEditorConfig";
import Toolbar from "./Toolbar";
import useSelection from "../hooks/useSelection";
import isHotkey from "is-hotkey";
import { getActiveStyles, toggleStyle } from "../utils/EditorUtils";



const Editor = ({ document, onChange}) => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const { renderElement,renderLeaf} = useEditorConfig(editor);
    const [selection, setSelection] = useSelection(editor);
    const KeyBindings = {
      onKeyDown: (editor, event) => {
        if (isHotkey('mod+b', event)) {
          toggleStyle(editor, 'bold');
          return;
        }
        if (isHotkey("mod+i", event)) {
          toggleStyle(editor, 'italic');
          return;
        }
        if (isHotkey("mod+c", event)) {
          toggleStyle(editor, 'code');
          return;
        }
        if (isHotkey("mod+u", event)) {
          toggleStyle(editor, 'underline');
          return;
        }
      },
  };
    const onKeyDown = useCallback(
      (event) => KeyBindings.onKeyDown(editor, event),
      [editor]
    );
    const onChangeHandler = useCallback(
        (document) => {
          onChange(document);
          setSelection(editor.selection);
        },
        [editor.selection, onChange, setSelection]
      );
    return ( 
        <Slate editor={editor} value={document} onChange={onChangeHandler}>
            <Toolbar selection={selection}/>
            <Editable renderElement={renderElement} renderLeaf={renderLeaf} onKeyDown={onKeyDown}/>
        </Slate>
     );
}
 
export default Editor;