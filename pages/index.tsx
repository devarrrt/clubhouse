import { useState, createContext } from 'react';
import WeclomeStep from "../components/steps/WelcomeStep";
import NameStep from './../components/steps/NameStep/index';
import GitHubStep from './../components/steps/GitHubStep/index';
import ChooseAvatarStep from './../components/steps/ChooseAvatarStep/index';
import EnterPhoneStep from './../components/steps/EnterPhoneStep/index';
import EnterCodeStep from '../components/steps/EnterCodeStep';

const StepsState = {
  0: WeclomeStep,
  1: GitHubStep,
  2: NameStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep
}

interface IMainContext {
  onNextStep: () => void;
  step: number
}

export const MainContext = createContext<IMainContext>({} as IMainContext)

export default function Home() {
  const [step, setStep] = useState<number>(0)
  const Step = StepsState[step]
  
  const onNextStep = () => {
    setStep(prev => prev + 1)
  }

  return (
    <MainContext.Provider value={{ step, onNextStep }}>
      <Step />
    </MainContext.Provider>
  );
}

