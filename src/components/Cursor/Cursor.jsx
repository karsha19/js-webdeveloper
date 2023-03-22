import React, { useState, useEffect } from "react";
import "./cursor.css";

const Cursor = ({ isHovering }) => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [cursorClass, setCursorClass] = useState("cursor");

  useEffect(() => {
    if (isHovering) {
      setCursorClass("cursor-hover");
    } else {
      setCursorClass("cursor");
    }
  }, [isHovering]);

  const handleMouseMove = (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  };
  console.log(handleMouseMove);

  return (
    <div
      className={cursorClass}
      style={{
        left: cursorX - 15,
        top: cursorY - 15,
      }}
      onMouseMove={handleMouseMove}
    >
      Click
    </div>
  );
};

export default Cursor;
