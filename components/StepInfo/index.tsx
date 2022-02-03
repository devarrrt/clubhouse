import clsx from 'clsx'
import React from 'react'
import styles from './StepInfo.module.scss'

interface IStepInfo {
    title: string;
    description?: string;
    icon: string;
}

const StepInfo: React.FC<IStepInfo> = ({ title, description, icon }) => {
    return (
        <div className={clsx(styles.block, 'text-center')}>
            <div>
                <img className={styles.img} src={icon} alt="picture" />
            </div>
            <b className={styles.title}> {title} </b>
            {description && (
                <p className={styles.description}> {description} </p>
            )}
        </div>
    )
}

export default StepInfo
