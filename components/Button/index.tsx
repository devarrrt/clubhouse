import clsx from 'clsx'
import React from 'react'
import styles from './Button.module.scss'

const colors = {
    green: styles.buttonGreen,
    gray: styles.buttonGray,
    blue: styles.buttonBlue,
};

interface IButton {
    color?: any
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    className?: string
    disabled?: boolean;
}

const Button: React.FC<IButton> = ({ children, disabled,
    color,
    onClick,
    className,
}) => {
    return (
        <button type="button"
            disabled={disabled}
            className={clsx(className, styles.button, colors[color])}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
