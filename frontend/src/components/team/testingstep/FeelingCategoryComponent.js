import React, { useState, useEffect } from "react";

const FeelingCategoryComponent = (props) => {
  const [chosenFeelingsCategory, setChosenFeelingsCategory] = useState("");
  const [beforePercentage, setBeforePercentage] = useState(0);
  const [goalPercentage, setGoalPercentage] = useState(0);
  const [afterPercentage, setAfterPercentage] = useState(0);

  const {
    onSelectFeeling,
    onChangeBeforePercentage,
    onChangeGoalPercentage,
    onChangeAfterPercentage,
    feelings,
    index,
  } = props;

  useEffect(() => {
    onSelectFeeling(chosenFeelingsCategory);
    //console.log(chosenFeelingsCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenFeelingsCategory]);

  useEffect(() => {
    onChangeBeforePercentage(beforePercentage, index);
    //console.log(chosenFeelingsCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beforePercentage]);
  useEffect(() => {
    onChangeGoalPercentage(goalPercentage);
    //console.log(chosenFeelingsCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goalPercentage]);
  useEffect(() => {
    onChangeAfterPercentage(afterPercentage);
    //console.log(chosenFeelingsCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [afterPercentage]);
  var checkBoxList = feelings.map(function (feeling, index) {
    return (
      <button
        key={index}
        className={
          chosenFeelingsCategory.includes(feeling)
            ? "flex items-center gap-1 font-serif text-indigo-500 hover:-translate-y-1 hover:scale-110"
            : "flex transform items-center gap-1 font-serif hover:-translate-y-1 hover:scale-110"
        }
        onClick={(e) => {
          if (!chosenFeelingsCategory.includes(feeling))
            setChosenFeelingsCategory(chosenFeelingsCategory + feeling + ";");
          else
            setChosenFeelingsCategory(
              chosenFeelingsCategory.replace(feeling + ";", "")
            );
        }}
      >
        {feeling}
      </button>
    );
  });
  return (
    <div className=" flex w-full  flex-row  items-center gap-2 font-serif">
      <div className="flex flex-row flex-wrap items-center gap-3 text-center">
        {checkBoxList}
      </div>
      <div className="ml-auto grid grid-cols-3">
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
          htmlFor="goalPercentageInput"
          className="w-16 border-none font-semibold focus:ring-0 focus:outline-none text-center"
          type="number"
          onChange={(e) => {
            setGoalPercentage(parseInt(e.target.value, 10));
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

export default FeelingCategoryComponent;
