import Link from 'next/link'
import React from 'react'

interface IBackButton {
    title: string,
    href: string
}

const BackButton: React.FC<IBackButton> = ({ title, href }) => {
    return (
        <Link href={href}>
            <div className='d-flex mb-30 cup'>
                <img src="/static/back-arrow.svg" alt="back" className='mr-10' />
                <h3> {title} </h3>
            </div>
        </Link>
    )
}

export default BackButton