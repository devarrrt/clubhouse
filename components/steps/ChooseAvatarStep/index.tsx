import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import StepInfo from '../../StepInfo'
import WhiteBlock from './../../WhiteBlock/index';
import Avatar from './../../Avatar/index';
import Button from './../../Button/index';
import { MainContext } from '../../../pages';

import styles from './ChooseAvatarStep.module.scss'
import { useContext } from 'react';

const ChooseAvatarStep = () => {
    const [avatarUrl, setavatarUrl] = useState<string>('')
    const inputFileRef = React.useRef<HTMLInputElement>(null);
    const { onNextStep } = useContext(MainContext)

    const handleChangeImage = (e: Event): void => {
        const file = (e.target as HTMLInputElement).files [0]
        if (file) {
            const ImageUrl = URL.createObjectURL(file)
            setavatarUrl(ImageUrl)
        }
    }

    useEffect(() => {
        if (inputFileRef.current) {
            inputFileRef.current.addEventListener('change', handleChangeImage)
        }
    }, [])

    return (
        <div className={styles.block}>
            <StepInfo
                icon="/static/celebration.png"
                title={`Okay, devarrt!`}
                description="How’s this photo?"
            />
            <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
                <div className={styles.avatar}>
                    <Avatar width="120px" height="120px" src={avatarUrl} letters='A' />
                </div>
                <div className="mb-30">
                    <label htmlFor="image" className="link cup">
                        Choose a different photo
                    </label>
                </div>
                <input id="image" ref={inputFileRef} type="file" hidden />
                <Button onClick={onNextStep}>
                    Next
                    <img className="d-ib ml-10" src="/static/arrow.svg" />
                </Button>
            </WhiteBlock>
        </div>
    )
}

export default ChooseAvatarStep
