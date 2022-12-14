import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as ArrowLeftIcon } from "../../../assets/icons/ArrowLeft.svg";
import AgendaElementComponent from "./AgendaElementComponent";
const AgendaComponent = (props) => {
  const { showMethodsComponent, setShowMethodsComponent } = props;

  let navigate = useNavigate();
  const [content, setContent] = useState("");
  const [positives, setPositives] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const savePositiveContent = (newContent, index) => {
    const updatedContent = [...content];
    updatedContent[index] = newContent;
    setContent(updatedContent);
  };
  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <div className="flex flex-row ">
      <div className=" flex min-h-screen flex-col justify-center rounded-lg py-12 font-sans sm:px-6 lg:px-8">
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mr-5  flex flex-row items-center justify-center">
            <ArrowLeftIcon
              onClick={() => {
                navigate("/session", { replace: true });
              }}
              className="h-6 mt-6 transition duration-150 hover:scale-125"
            ></ArrowLeftIcon>
            <h1 className="my-auto mt-6 text-center font-serif text-4xl font-extrabold text-gray-900">
              Agenda Setting
            </h1>
          </div>
        </div>
        <div className="mt-6 sm:mx-auto  sm:max-w-full">
          <div className="bg-white py-8 px-4 shadow sm:rounded-sm sm:px-10">
            <div className=" mx-auto flex flex-col sm:my-3">
              <div className="flex max-w-xl font-serif text-xl">
                For each of the category of feelings, and for each thought you
                have written down, try to find some positives. Ask yourself
                these questions: <br></br> 1. What are some benefits and
                advantages of that feeling/thought. What is it giving me that is
                positive?<br></br> 2. What does this feeling/thought show about
                me that is positive?
              </div>
              <div className="divide-y-2 divide-dashed divide-cyan-600 flex w-full  flex-col items-center  gap-2">
                {positives.map((value, i) => {
                  return (
                    <AgendaElementComponent
                      onChangeContent={savePositiveContent}
                      index={value - 1}
                      key={value}
                    />
                  );
                })}
              </div>
              <div className="flex justify-center mt-6 ">
                <button
                  onClick={() => {
                    setPositives([
                      ...positives,
                      positives[positives.length - 1] + 1,
                    ]);
                  }}
                  className="text-md font-serfi mt-3 border-none  font-semibold hover:text-indigo-500"
                >
                  Add more
                </button>
              </div>
              {!showMethodsComponent && (
                <div>
                  <div className="font-serif mt-6 text-center w-full font-semibold text-md">
                    Press the save button when you are ready to go to the
                    methods step
                  </div>
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                      setShowMethodsComponent(true);
                    }}
                    className="mx-auto mt-6 flex w-full justify-center rounded-sm border border-transparent bg-indigo-500 py-2 px-4 text-lg font-medium text-white shadow-sm transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-600 focus:outline-none focus:ring-2  focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgendaComponent;
