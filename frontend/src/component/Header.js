import React from "react";

import "./table.css";

export default function Header() {
  return (
    <thead>
      <tr>
        <th className="tableHeader">ID</th>
        <th className="tableHeader">Name</th>
        <th className="tableHeader">Date</th>
        <th className="tableHeader">Currency</th>
      </tr>
    </thead>
  );
}
