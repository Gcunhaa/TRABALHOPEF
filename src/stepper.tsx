import React from "react";
import logo from "./logo.png";
import * as S from "./styles";
import hulk from "./hulk.png";

const FirstStep: React.FC<{ nextStep: () => void }> = ({ nextStep }) => {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Trabalho desenvolvido para a disciplina PEF3208.</p>
      <div className="Names">
        <span>Gabriel Salomão Cunha - 12553480</span>
        <span>Miguel Calvão Weng - 12554157</span>
        <span>Rodrigo Galvez Lima - 12553733</span>
        <span>Professor: Guilherme Rosa Franzini</span>
      </div>
      <button className="App-link" onClick={(e) => nextStep()}>
        Começar
      </button>
    </>
  );
};

const SecondStep: React.FC<{}> = ({}) => {
  return (
    <S.Card>
      <p>
        Você já se perguntou quais seriam os pontos de maior momento fletor
        quando o hulk levanta um tanque de guerra ?
      </p>
    </S.Card>
  );
};
const ThirdStep: React.FC<{}> = ({}) => {
  return (
    <S.Card>
      <p>
        Provavelmente não, mas já que despertamos a sua curiosidade que tal ir
        mais afundo ?
      </p>
    </S.Card>
  );
};

const FourthStep: React.FC<{}> = ({}) => {
  return (
    <S.Card>
      <p>
        Na próxima etapa você podera determinar o peso do tanque de guerra e
        variar ele para ter uma idéia de como isso reflete nas forças de reação
        no pé do Hulk.
      </p>
    </S.Card>
  );
};

const FifthStep: React.FC<{}> = ({}) => {
  const [mass, setMass] = React.useState(61300);

  function getVa(tankMass: number) {
    return 92.245 * tankMass + 2.5;
  }

  function getVb(tankMass: number) {
    return -(82.245 * tankMass + 2.5);
  }

  function handleMassChange(event: any) {
    var numberPattern = /\d+/g;
    if (event.target.value === "") {
      setMass(0);
      return;
    }
    setMass(event.target.value.match(numberPattern).join(""));
  }

  return (
    <S.HulkCard>
      <img className="hulk" src={hulk} alt="Hulk" />
      <div className="content">
        <span>Informe o peso do tanque(kg)</span>
        <input
          onChange={handleMassChange}
          value={mass === 0 ? "" : mass}
          type="text"
        />
        <span className="result">
          Normal em relação ao pé esquerdo: {getVa(mass)} N
        </span>
        <span className="result">
          Normal em relação ao pé direito: {getVb(mass)} N
        </span>
      </div>
    </S.HulkCard>
  );
};

const Stepper: React.FC = () => {
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  function nextStep() {
    setCurrentStep(currentStep + 1);
  }
  function lastStep() {
    if (currentStep === 0) return;
    setCurrentStep(currentStep - 1);
  }
  const steps: React.ReactElement[] = [
    <FirstStep nextStep={nextStep} />,
    <SecondStep />,
    <ThirdStep />,
    <FourthStep />,
    <FifthStep />,
  ];
  return (
    <>
      {steps[currentStep]}
      {currentStep != 0 && currentStep < 4 && (
        <S.Nav>
          <a onClick={(e) => lastStep()}>Voltar</a>{" "}
          <a onClick={(e) => nextStep()}>Continuar</a>
        </S.Nav>
      )}
    </>
  );
};

export default Stepper;
