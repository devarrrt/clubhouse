import { useContext } from "react"
import WhiteBlock from "../../WhiteBlock"
import Button from '../../Button'
import styles from './WelcomeStep.module.scss'

const WeclomeStep: React.FC = () => {
    // const { onNestStep } = useContext(null)

    return (
        <WhiteBlock className={styles.block}>
            <h3 className={styles.title}>
                <img className={styles.handWaveImg} src="/static/hand-wave.png" />
                Welcome to Clubhouse!
            </h3>
            <p>
                We're working hard to get Clubhouse ready for everyone! While we wrap up the finishing
                youches, we're adding people gradually to make sure nothing breaks :)
            </p>
            <div>
                <Button onClick={() => console.log('next page')}>
                    Get your username
                    <img className="d-ib ml-10" src="/static/arrow.svg" />
                </Button>
            </div>

            <div className="link mt-15 cup d-ib">Have an invite text? Sign in</div>
        </WhiteBlock>
    )
}

export default WeclomeStep
