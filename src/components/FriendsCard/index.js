import React from "react";
import "./style.css";

function FriendCard({results}) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={results.name}
          src={results.picture.large}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {results.name.first} {results.name.last}
          </li>
          <li>
            <strong>Age:</strong> {results.dob.age}
          </li>
          <li>
            <strong>Email:</strong> {results.email}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;