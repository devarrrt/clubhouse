import clsx from 'clsx';
import React, { ChangeEvent, useState } from 'react';
import StepInfo from '../../StepInfo';
import WhiteBlock from '../../WhiteBlock';
import styles from './EnterCodeStep.module.scss'
import Button from '../../Button';
import Axios from '../../../core/axios';
import { useRouter } from 'next/router';

const EnterCodeStep = () => {
    const router = useRouter()
    const [codes, setCodes] = useState(['', '', '', '']);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const disabled = codes.some((v) => v)

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const index = Number(e.target.getAttribute('id'));
        const value = e.target.value;
        setCodes((prev) => {
            const newArr = [...prev]
            newArr[index] = value
            return newArr
        })
        if (e.target.nextSibling) {
            (e.target.nextSibling as HTMLInputElement).focus()
        }
    }

    const onSubmit = async () => {
        try {
            setIsLoading(true)
            await Axios.get('/todos')
            router.push('/rooms')
            setIsLoading(false)
        } catch (err) {
            alert('Ошибка при активации!');
            setCodes(['', '', '', '']);
        }
    }

    return (
        <div className={styles.block}>
            {!isLoading ? (
                <>
                    <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
                    <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
                        <div className={styles.codeInput} style={{ marginBottom: 30 }}>
                            {codes.map((el, index) => (
                                <input
                                    key={index}
                                    type="tel"
                                    placeholder="X"
                                    maxLength={1}
                                    id={String(index)}
                                    onChange={handleChangeInput}
                                    value={el}
                                />
                            ))}
                        </div>
                        <Button onClick={onSubmit} disabled={disabled}>
                            Next
                            <img className="d-ib ml-10" src="/static/arrow.svg" />
                        </Button>
                    </WhiteBlock>
                </>
            ) : <div className="text-center">
                <div className="loader"></div>
                <h3 className="mt-5">Activation in progress ...</h3>
            </div>
            }
        </div>
    )
};

export default EnterCodeStep;
