import { useState } from "react";
import { useEffect } from "react";
const MoodTestRating = (props) => {
  const { onChangeRating, defaultValue, count } = props;
  const [rating, setRating] = useState(defaultValue);
  const [hover, setHover] = useState(0);
  useEffect(
    (e) => {
      // console.log(hover);
    },
    [hover]
  );
  useEffect((e) => {
    // console.log(rating);
    onChangeRating(rating - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectRating = (rating) => {
    setRating(rating);
    onChangeRating(rating - 1);
  };
  return (
    <div
      className="flex flex-row flex-wrap justify-center"
      onMouseLeave={() => setHover(rating)}
    >
      {[...Array(count)].map((star, index) => {
        index += 1;
        return (
          <div
            key={index}
            onClick={() => {
              onSelectRating(index);
            }}
            className={
              index <= (hover || rating)
                ? " my-1 mx-1  h-8 w-8 rounded-md  border-2 border-indigo-800 bg-indigo-600 text-center font-serif font-semibold text-white transition duration-150 ease-in-out hover:scale-125 hover:duration-300 "
                : "my-1 mx-1  h-8 w-8 border-2  text-center font-serif font-semibold "
            }
            onMouseEnter={() => setHover(index)}
          >
            {index - 1}
          </div>
        );
      })}
    </div>
  );
};
export default MoodTestRating;
