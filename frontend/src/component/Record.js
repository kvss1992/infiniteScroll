import React from "react";

import "./table.css";

export default function Record(props) {
  const { id, name, date, currency } = props;
  return (
    <tr key={id}>
      <td>
        <div className="container">{id}</div>
      </td>
      <td>
        <div className="container">{name}</div>
      </td>
      <td>
        <div className="container">{date}</div>
      </td>
      <td>
        <div className="container">{currency}</div>
      </td>
    </tr>
  );
}
