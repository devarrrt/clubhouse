import React from 'react'
import clsx from 'clsx';
import Button from '../Button/index';
import Avatar from '../Avatar/index';

import styles from './Profile.module.scss'
import Link from 'next/link';

interface IProfile {
    fullname: string
    username: string
    avatarUrl: string
    about: string
}

const Profile: React.FC<IProfile> = ({fullname, username, avatarUrl, about}) => {
    return (
        <>
         <Link href="/rooms">
                <div className='d-flex mb-30'>
                    <img src="/static/back-arrow.svg" alt="back" className='mr-10' />
                    <h3> Back </h3>
                </div>
         </Link>

            <div className="d-flex align-items-center">
                <div className='d-flex align-items-center'>
                    <Avatar
                        src={avatarUrl}
                        width='100px'
                        height='100px'
                    />
                    <div className='d-flex flex-column ml-30 mr-30'>
                        <h2 className='mt-0 mb-0'> {fullname} </h2>
                        <h3 className={clsx(styles.username, 'mt-0 mb-0')}> @{username} </h3>
                    </div>
                </div>
                <Button className={styles.followButton} color="blue">
                    Follow
                </Button>
            </div>
            <p className={styles.about}>
                {about}
            </p>
        </>
    )
}

export default Profile
