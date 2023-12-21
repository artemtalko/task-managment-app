import React from "react";
import Header from "./componets/Header";
import Center from "./componets/Center";
import { useState } from "react";

function App() {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  return (
    <div>
      {/* Header Section */}
      <Header
          setIsBoardModalOpen={setIsBoardModalOpen}
          isBoardModalOpen={isBoardModalOpen}
      />
      
      {/* Center Section */}
      <Center/>

    </div>
  )
}

export default App

