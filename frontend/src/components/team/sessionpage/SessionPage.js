import { useState } from "react";
import TestingComponent from "../testingstep/TestingComponent";
import AgendaComponent from "../agendastep/AgendaComponent";
//import MethodsComponent from "../methodsstep/MethodsComponent";
import RecoveryCircleComponent from "../methodsstep/RecoveryCircleComponent";
const SessionPage = () => {
  const [showTestingComponent, setShowTestingComponent] = useState(true);
  const [showAgendaComponent, setShowAgendaComponent] = useState(false);
  const [showMethodsComponent, setShowMethodsComponent] = useState(false);
  return (
    <div
      className={
        showAgendaComponent
          ? "flex flex-col md:flex-row justify-center flex-wrap"
          : "flex justify-center"
      }
    >
      {showTestingComponent && (
        <div className="lg:min-w-[400px]">
          <TestingComponent
            showAgendaComponent={showAgendaComponent}
            setShowAgendaComponent={setShowAgendaComponent}
          ></TestingComponent>
        </div>
      )}
      {showMethodsComponent && (
        <div className="lg:min-w-[400px] lg:max-w-[700px]">
          <RecoveryCircleComponent></RecoveryCircleComponent>
        </div>
      )}
      {showAgendaComponent && (
        <div className="lg:min-w-[400px]">
          <AgendaComponent
            showMethodsComponent={showMethodsComponent}
            setShowMethodsComponent={setShowMethodsComponent}
          ></AgendaComponent>
        </div>
      )}
    </div>
  );
};
export default SessionPage;
