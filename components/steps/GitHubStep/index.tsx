import React, { useContext, useEffect } from 'react'
import clsx from 'clsx'
import Cookies from 'js-cookie'
import Button from '../../Button'
import StepInfo from '../../StepInfo'
import WhiteBlock from '../../WhiteBlock'
import styles from './GitHubStep.module.scss'
import { IUser, MainContext } from '../../../pages'

const GitHubStep = () => {
    const { onNextStep, setuserData } = useContext(MainContext)

    const onClickAuth = () => {
        const win = window.open('http://localhost:3001/auth/github',
            'Auth',
            'width=500, height=500, status=yes, toolbar=no, menubar=no, location=no')
    }

    useEffect(() => {
        window.addEventListener('message', ({ data, origin }) => {
            const user: string = data
            if (typeof user === 'string' && user.includes('avatarUrl')) {
                const json: IUser = JSON.parse(user)
                setuserData(json)
                onNextStep()

                Cookies.set('token', json.token)
            }
        })
    }, [])

    return (
        <div className={styles.block}>
            <StepInfo icon="/static/connect.png" title='Do you import info from GitHub ?' />
            <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
                <Button onClick={onClickAuth} className={clsx(styles.button, 'd-i-flex align-items-center')}>
                    <img className='d-ib mr-10' src="/static/github.svg" alt="github" />
                    Import from GitHub
                    <img className='d-ib mr-10' src="/static/arrow.svg" alt="github" />
                </Button>
                <div className="link mt-20 cup d-ib">Enter my info manually</div>
            </WhiteBlock>
        </div>
    )
}

export default GitHubStep

