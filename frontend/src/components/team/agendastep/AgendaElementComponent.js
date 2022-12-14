import React, { useState, useEffect } from "react";

const AgendaElementComponent = (props) => {
  const [content, setContent] = useState("");

  const { onChangeContent, index } = props;

  useEffect(() => {
    onChangeContent(content, index);
    //console.log(chosenFeelingsCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <div className="flex flex-row w-full overflow-auto items-center justify-around gap-3 text-center">
      <div className="flex flex-row items-center justify-center w-1/2">
        <div className=" w-12 text-xl px-2">{index + 1}. </div>
        <input
          className=" text-center w-full  focus:outline-none"
          placeholder="..."
          onChange={(e) => setContent(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default AgendaElementComponent;
