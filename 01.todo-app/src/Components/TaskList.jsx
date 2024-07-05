/* eslint-disable react/prop-types */
import  { useState } from 'react';
import './TaskList.css';

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
    setEditMode(null);
  };

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th width="10px">Serial No.</th>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {task.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              {editMode === index ? (
                <div>
                  <input
                    type="text"
                    placeholder="Edit task here"
                    value={editText}
                    onChange={handleChange}
                  />
                </div>
              ) : (
                <div>{item}</div>
              )}
            </td>
            <td>
              {editMode === index ? (
                <div>
                  <button onClick={() => handleSaveEdit(index)}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </div>
              ) : (
                <div>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
