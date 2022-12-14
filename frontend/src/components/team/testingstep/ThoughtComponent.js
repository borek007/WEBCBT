import React, { useState, useEffect } from "react";

import { useThoughtsStore } from "../../../store/ThoughtsStore";

const ThoughtComponent = (props) => {
  const [content, setContent] = useState("");
  const [beforePercentage, setBeforePercentage] = useState(0);
  const [afterPercentage, setAfterPercentage] = useState(0);
  const positiveThoughts = useThoughtsStore((state) => state.positiveThoughts);

  const {
    onChangeContent,
    onChangeBeforePercentage,
    onChangeAfterPercentage,
    index,
  } = props;
  const onInputChange = (newContent) => {
    const updatedContent = [...positiveThoughts];
    updatedContent[index] = newContent;
    useThoughtsStore.setState({ positiveThoughts: updatedContent });
  };

  useEffect(() => {
    onChangeContent(content, index);
    //console.log(chosenFeelingsCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  useEffect(() => {
    onChangeBeforePercentage(beforePercentage, index);
    //console.log(chosenFeelingsCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beforePercentage]);
  useEffect(() => {
    onChangeAfterPercentage(afterPercentage);
    //console.log(chosenFeelingsCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [afterPercentage]);
  return (
    <div className="flex flex-row w-full overflow-auto items-center justify-around gap-3 text-center">
      <div className="flex flex-row items-center justify-center w-1/2">
        <div className=" w-12 text-xl px-2">{index + 1}. </div>
        <input
          className=" text-center w-full  focus:outline-none"
          placeholder="..."
          onChange={(e) => {
            onInputChange(e.target.value);
            setContent(e.target.value);
          }}
        ></input>
      </div>
      <div className=" grid grid-cols-2 w-1/2 justify-items-center">
        <input
          placeholder="0"
          htmlFor="beforePercentageInput"
          className="w-16 border-none font-semibold focus:ring-0 focus:outline-none text-center"
          type="number"
          onChange={(e) => {
            setBeforePercentage(parseInt(e.target.value, 10));
          }}
        ></input>
        <input
          placeholder="0"
          htmlFor="afterPercentageInput"
          className="w-16 border-none font-semibold focus:ring-0 focus:outline-none text-center"
          type="number"
          onChange={(e) => {
            setAfterPercentage(parseInt(e.target.value, 10));
          }}
        ></input>
      </div>
    </div>
  );
};

export default ThoughtComponent;
