/* eslint-disable react/prop-types */
import { useState } from 'react';

function TaskList({ task, onDelete, onEdit }) {
  
  const [editMode, setEditMode] = useState(null); 
  const [editText, setEditText] = useState('');

  const handleDelete = (index) => {
    onDelete(index);
  };

  const handleEdit = (index) => {
    setEditMode(index);
    setEditText(task[index]);
  };

  const handleSaveEdit = (index) => {
    onEdit(index, editText);
    setEditMode(null);
  };

  const handleCancelEdit = () => {
    // Exit edit mode without saving changes
    setEditMode(null);
  };

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div>
      {task.map((item, index) => (
        <div key={index}>
          {editMode === index ? (
            // Render edit form if editMode is active for this task
            <div>
              <label htmlFor="editTask">Edit Task</label>
              <input
                type="text"
                placeholder="Edit task here"
                value={editText}
                onChange={handleChange}
              />
              <button onClick={() => handleSaveEdit(index)}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            // Render task and buttons if not in edit mode
            <div>
              {item}
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
