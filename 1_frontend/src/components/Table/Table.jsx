import React from 'react';

const Table = ({ data }) => {
  const tableHeadData = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {tableHeadData.slice(1, tableHeadData.length - 1).map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>
              <button>UPDATE</button>
            </td>
            <td>
              <button>DELETE</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
