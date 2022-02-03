import { useState } from 'react';
import WeclomeStep from "../components/steps/WelcomeStep";
import NameStep from './../components/steps/NameStep/index';

const StepsState = {
  0: WeclomeStep,
  1: NameStep
}

export default function Home() {
  const [step, setStep] = useState<number>(1)
  const Step = StepsState[step]
  
  return (
    <div>
      <Step/>
    </div>
  );
}

