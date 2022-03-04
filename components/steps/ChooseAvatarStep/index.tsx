import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import StepInfo from '../../StepInfo'
import WhiteBlock from './../../WhiteBlock/index';
import Avatar from './../../Avatar/index';
import Button from './../../Button/index';
import { MainContext } from '../../../pages';

import styles from './ChooseAvatarStep.module.scss'
import { useContext } from 'react';
import Axios from './../../../core/axios';

const ChooseAvatarStep = () => {
    const [avatarUrl, setAvatarUrl] = useState<string>('')
    const inputFileRef = React.useRef<HTMLInputElement>(null)
    const { onNextStep, changeField } = useContext(MainContext)

    const uploadFile = async (file: File):Promise< { url: string } >  => {
        const formData = new FormData();
        formData.append('photo', file);

        const { data } = await Axios({
            method: 'POST',
            url: '/upload',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return data;
    };

        const handleChangeImage = async (event: Event) => {
            const target = event.target as HTMLInputElement;
            const file = target.files[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                setAvatarUrl(imageUrl);
                const data = await uploadFile(file);
                target.value = '';
                setAvatarUrl(data.url);
                changeField('avatarUrl', data.url)
            }
        };


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
