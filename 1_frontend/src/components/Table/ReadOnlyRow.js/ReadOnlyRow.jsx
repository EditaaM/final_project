import React from 'react';

const ReadOnlyRow = ({ item, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={item._id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.date}</td>
      <td>{item.time}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, item)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(item._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
