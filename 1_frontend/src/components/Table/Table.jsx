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
            <td>
              <input type="text" value={item.name} name="name" />
            </td>
            <td>
              <input type="text" value={item.email} name="email" />
            </td>
            <td>
              <input type="text" value={item.date} name="date" />
            </td>
            <td>
              <input type="text" value={item.time} name="time" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
