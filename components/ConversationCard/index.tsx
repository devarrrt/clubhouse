import clsx from 'clsx'
import React from 'react'

import styles from './ConversationCard.module.scss'
import Avatar from './../Avatar/index';

interface IGuest {
    name: string
}

interface IAvatar {
    url: string
}

interface IConversationCard {
    title: string
    guests: IGuest[]
    avatars: any
    guestsCount: number
    spaekersCount: number
}

const ConversationCard: React.FC<IConversationCard> = ({ title, guests, avatars, guestsCount, spaekersCount }) => {

    return (
        <div className={clsx(styles.block, styles.card, 'mb-30')}>
            <h4 className={styles.title}> {title} </h4>
            <div className={clsx('d-flex mt-10', styles.content)}>
                <div className={styles.avatars}>
                    {avatars.map((el, i) => (
                        <img
                            style={{ borderRadius: '50%' }}
                            src={el}
                            key={i}
                            width='55'
                            height='55'
                            className={ avatars.length > 1 && i === avatars.length - 1 ? 'lastAvatar' : ""} />
                    ))}
                </div>
                <div className={clsx(styles.info, 'ml-10')}>
                    <ul className={styles.users}>
                        {guests.map((user, index) => (
                            <li key={index}>
                                {user}
                                <img src="/static/cloud.png" alt="Cloud" width={14} height={14} />
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.details}>
                        <li>
                            {guestsCount}
                            <img src="/static/user.svg" alt="Users count" width={12} height={12} />
                        </li>
                        <li>
                            {spaekersCount}
                            <img
                                className="ml-5"
                                src="/static/message.svg"
                                width={12}
                                height={12}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ConversationCard