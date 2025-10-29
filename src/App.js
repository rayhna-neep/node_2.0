import React from "react";
import MyCard from "./MyCard";
import ProfilImage from "./Pimage";

const firstName = "Rayhan";

function App() {
  const greeting = firstName ? `Hello, ${firstName}!` : "Hello, there!";

  return (
    <div
      className="position-relative vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: "#ADD8E6", 
      }}
    >
      {firstName && <ProfilImage />}
      <MyCard />

      <p
        style={{
          color: "#063006ff", 
          fontSize: "1.25rem",
          fontWeight: "500",
          marginTop: "10px",
        }}
      >
        {greeting}
      </p>
    </div>
  );
}

export default App;
