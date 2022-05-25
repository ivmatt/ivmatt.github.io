import React from "react";
import "./draggablePhoto.css";
import portrait from "../../assets/0E9A0699-Edit.png";

const DraggablePhoto = () => {
  return (
    <div className="draggable">
      <img src={portrait} style={{ maxWidth: "100%", borderRadius: 20 }} />
    </div>
  );
};

export default DraggablePhoto;
