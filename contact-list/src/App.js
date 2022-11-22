import React, { useState, useEffect } from "react";
import "./index.css";
import ContactCard from "./Components/ContactCard";

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      });
  }, []);

  return (
    <div className="container">
      {results.map((result, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
          />
        );
      })}
    </div>
  );
};

export default App;
