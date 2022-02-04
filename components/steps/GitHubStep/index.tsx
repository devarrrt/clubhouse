import React from 'react'
import clsx from 'clsx'
import Button from '../../Button'
import StepInfo from '../../StepInfo'
import WhiteBlock from '../../WhiteBlock'
import styles from './GitHubStep.module.scss'

const GitHubStep = () => {
    return (
        <div className={styles.block}>
            <StepInfo icon="/static/connect.png" title='Do you import info from GitHub ?' />
            <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
                <Button onClick={() => { }} className={clsx(styles.button, 'd-i-flex align-items-center')}>
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
