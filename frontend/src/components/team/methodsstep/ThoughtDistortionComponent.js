import React, { useState } from "react";

const ThoughtDistortionComponent = (props) => {
  const [chosen, setChosen] = useState(false);

  const { distortion, description, index } = props;
  return (
    <div className="w-full flex flex-col flex-wrap">
      <button
        key={index}
        className={
          chosen
            ? "flex items-center gap-1 font-serif text-indigo-500 w-fit hover:-translate-y-1 hover:scale-110"
            : "flex transform items-center gap-1 font-serif w-fit hover:-translate-y-1 hover:scale-110"
        }
        onClick={(e) => {
          if (!chosen) setChosen(true);
          else setChosen(false);
        }}
      >
        {distortion}
      </button>
      <div>{description}</div>
    </div>
  );
};

export default ThoughtDistortionComponent;
