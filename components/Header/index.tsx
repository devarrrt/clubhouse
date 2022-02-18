import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import Avatar from '../Avatar'

import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className='container d-flex align-items-center justify-content-between cup'>
        <Link href="/">
          <div className={clsx(styles.headerLogo, 'd-flex align-items-center')}>
            <img src="/static/hand-wave.png" alt="Logo" className="mr-5" />
            <h4> Clubhouse </h4>
          </div>
        </Link>
        <Link href="/profile/1">
          <div className="d-flex align-items-center cup">
            <b className="mr-5"> Devarrrt </b>
            <Avatar
              src=""
              width="50px"
              height="50px"
            /> 
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header 