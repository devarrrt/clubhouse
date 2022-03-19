import { useState, createContext, Dispatch, SetStateAction, useEffect } from 'react';
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
  step: number;
  userData?: IUser;
  setuserData: Dispatch<SetStateAction<IUser>>;
  changeField: (field: keyof IUser, value: string) => void
}

export interface IUser {
  id: number,
  fullname: string,
  avatarUrl: string,
  phone: string,
  isActive: number,
  username: string,
  token?: string
}

export const MainContext = createContext<IMainContext>({} as IMainContext)

const getUserData = (): IUser | null => {
  try {
    return JSON.parse(window.localStorage.getItem('userData'))
  } catch (error) {
    return  
  }
}

const nextStep = (): number => {
  const json = getUserData()
  if (json) {
    if (json.phone) {
      return 5
    } else {
      return 4
    }
  }
  return 0
}

export default function Home() {
  const [step, setStep] = useState<number>(nextStep())
  const [userData, setuserData] = useState<IUser>()
  const Step = StepsState[step]

  const changeField = (field: string, value: string) => {
    setuserData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const onNextStep = () => {
    setStep(prev => prev + 1)
  }
 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const json = getUserData()
      if (json) {
        setuserData(json)
        setStep(nextStep())
      }
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('userData', userData && JSON.stringify(userData))
  }, [userData])

  return (
    <MainContext.Provider value={{ step, onNextStep, userData, setuserData, changeField }}>
      <Step />
    </MainContext.Provider>
  );
}
