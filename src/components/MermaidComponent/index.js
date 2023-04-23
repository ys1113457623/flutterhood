import React from "react";
import Mermaid from "./Mermaid";
import './index.css'

function MermaidComponent({ example }) {
  return (
    <div className="diagram">
      <Mermaid chart={example} />
    </div>
  );
}

export default MermaidComponent;
