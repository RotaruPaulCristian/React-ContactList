import React, { useState } from "react";

const ContactCard = (props) => {
  const { avatarUrl, name, email, age } = props;
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={avatarUrl} alt="profile"></img>
      <div className="user-details">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button onClick={() => setShowAge(!showAge)}>Show/hide Age</button>
        {showAge && <p>Age: {age}</p>}
      </div>
    </div>
  );
};

export default ContactCard;
