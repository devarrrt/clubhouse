import clsx from 'clsx'
import React, { useState, useContext } from 'react'
import StepInfo from '../../StepInfo'
import WhiteBlock from '../../WhiteBlock'
import Avatar from './../../Avatar/index';
import Button from '../../Button'

import styles from './NameStep.module.scss'
import { MainContext } from '../../../pages';

interface INameStep {}

const NameStep: React.FC<INameStep> = () => {
    const { onNextStep, userData, changeField } = useContext(MainContext)
    const [inputName, setInputName] = useState<string>(userData.fullname)
    const disabledStep = !inputName

    const onClickNext = () => {
        if (inputName) {
            onNextStep()
        }
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeField('fullname', inputName)
        setInputName(e.target.value)
    }

    return (
        <div className={styles.block}>
            <StepInfo
                title="What's your full name ?"
                icon="/static/man.png"
                description="People use real names on Clubhouse. Thnx:)"
            />
            <WhiteBlock className={clsx("m-auto", styles.WhiteBlock)}>
                <Avatar src={userData.avatarUrl} width='120px' height='120px' />
                <div className="mb-30 mt-30">
                    <input
                    className="field"
                    placeholder="Enter fullname"
                    value={inputName}
                    onChange={handleChangeInput}
                    />
                </div>
                <Button disabled={disabledStep} onClick={onClickNext}>
                    Next step
                    <img className="d-ib ml-10" src="/static/arrow.svg" />
                </Button>
            </WhiteBlock>
        </div>
    )
}

export default NameStep
