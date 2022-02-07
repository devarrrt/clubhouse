import { useState } from 'react';
import WeclomeStep from "../components/steps/WelcomeStep";
import NameStep from './../components/steps/NameStep/index';
import GitHubStep from './../components/steps/GitHubStep/index';
import ChooseAvatarStep from './../components/steps/ChooseAvatarStep/index';
import EnterPhoneStep from './../components/steps/EnterPhoneStep/index';
import EnterCodeStep from '../components/steps/EnterCodeStep';

const StepsState = {
  0: WeclomeStep,
  1: NameStep,
  2: GitHubStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep
}

export default function Home() {
  const [step, setStep] = useState<number>(5)
  const Step = StepsState[step]
  
  return (
    <div>
      <Step/>
    </div>
  );
}

