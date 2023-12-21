import React from "react";
import Header from "./componets/Header";
import Center from "./componets/Center";
import { useState } from "react";

function App() {
  const [boardModalOpen, setBoardModalOpen] = useState(false)

  return (
    <div>
      {/* Header Section */}
      <Header boardModalOpen={boardModalOpen} setBoardModalOpen={setBoardModalOpen}/>

      {/* Center Section */}
      <Center/>

    </div>
  )
}

export default App

