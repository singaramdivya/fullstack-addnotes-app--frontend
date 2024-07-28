import React, { useEffect, useState } from 'react';
import ToDo from './components/ToDo';
import { getAllToDo, addToDo, updateToDo, deleteToDo } from './utils/HandleApi';

export default function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    console.log(text);
    console.log("updated......");
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  const onDisplayNotes = () => {
    setShowNotes(true);
  };

  return (
    <div>
      <div className='container'>
        <h1>Add Notes</h1>
        <div className='top'>
          <div className='input-container'>
            <input
              type='text'
              placeholder='Add Note..'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div
              className='add'
              onClick={isUpdating
                ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)}
            >
              {isUpdating ? "Update" : "Save Note"}
            </div>
          </div>
          <div className='list'>
            <button className='list-out-button' onClick={onDisplayNotes}>List Notes</button>
            {showNotes && (
              toDo.map((item) =>
                <ToDo
                  key={item._id}
                  text={item.text}
                  updateMode={() => updateMode(item._id, item.text)}
                  deleteToDo={() => deleteToDo(item._id, setToDo)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
