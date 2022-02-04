import React, { useState } from 'react'
import clsx from 'clsx'
import NumberFormat from 'react-number-format';
import StepInfo from '../../StepInfo'
import WhiteBlock from '../../WhiteBlock'
import styles from './EnterPhoneStep.module.scss'
import Button from '../../Button';

interface InputValueState {
    formattedValue: string;
    value: string;
};

const EnterPhoneStep = () => {
    const [phoneValue, setPhoneValue] = useState<InputValueState>({} as InputValueState)

    return (
        <div className={styles.block}>
            <StepInfo
                icon="/static/phone.png"
                title="Enter your phone #"
                description="We will send you a confirmation code"
            />
            <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
                <div className={clsx('mb-30', styles.input)}>
                    <img src="/static/russian-flag.png" alt="flag" width={24} />
                    <NumberFormat
                        className="field"
                        format="+# (###) ###-##-##"
                        mask="_"
                        placeholder="+7 (999) 333-22-11"
                        value={phoneValue.value}
                        onValueChange={({ formattedValue, value }) => setPhoneValue({ formattedValue, value })}
                    />
                </div>
                <Button onClick={() => { }}>
                    Next
                    <img className="d-ib ml-10" src="/static/arrow.svg" />
                </Button>
                <p className={clsx(styles.policyText, 'mt-30')}>
                    By entering your number, you’re agreeing to our Terms of Service and Privacy Policy.
                    Thanks!
                </p>

            </WhiteBlock>
        </div>
    )
}

export default EnterPhoneStep
