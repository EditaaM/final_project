import React from 'react';

const EditableRow = ({
  editClientInfo,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          onChange={handleEditFormChange}
          value={editClientInfo.name}
          required
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          onChange={handleEditFormChange}
          value={editClientInfo.email}
          required
        />
      </td>
      <td>
        <input
          type="date"
          name="date"
          onChange={handleEditFormChange}
          value={editClientInfo.date}
          required
        />
      </td>
      <td>
        <select
          id="time"
          onChange={handleEditFormChange}
          value={editClientInfo.time}
        >
          <option value="8:00">8:00</option>
          <option value="8:30">8:30</option>
          <option value="9:00">9:00</option>
          <option value="9:30">9:30</option>
          <option value="10:00">10:00</option>
        </select>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
