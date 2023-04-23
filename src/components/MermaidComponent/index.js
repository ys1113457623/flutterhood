import React from "react";
import Mermaid from "./Mermaid";
import example from "./example";

function MermaidComponent({ example }) {
  return (
    <div className="App">
      <Mermaid chart={example} />
    </div>
  );
}

export default MermaidComponent;
