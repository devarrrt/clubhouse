import React from 'react'
import { useRouter } from 'next/router';
import Header from '../../components/Header/index';
import BackButton from '../../components/BackButton';
import Room from '../../components/Room';

type IRoomPage = {}

const RoomPage: React.FC<IRoomPage> = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Header />
            <div className="container mt-40">
                <BackButton title="All rooms" href="/rooms " />
            </div>
            <Room title="hello" />
        </>
    )
}

export default RoomPage
