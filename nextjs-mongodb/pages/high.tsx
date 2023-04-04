import Highlighter from "react-highlight-words";
import React, { useState } from "react";

export default function TextHighlighter() {
  const [t, setT] = useState("f0r");
  return (
    <div>
      <h3>GeeksforGeeks - Highlighter</h3>
      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={[{ t }]}
        autoEscape={true}
        textToHighlight="This is text for GfG example"
      />
    </div>
  );
}
