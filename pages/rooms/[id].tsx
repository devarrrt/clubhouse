import React from 'react'
import { useRouter } from 'next/router';
import Header from '../../components/Header/index';
import BackButton from '../../components/BackButton';
import Room from '../../components/Room';
import Axios, { instance } from '../../core/axios';

type IRoomPage = {

}

function RoomPage({ room }) {

    return (
        <>
            <Header />
            <div className="container mt-40">
                <BackButton title="All rooms" href="/rooms " />
            </div>
            <Room title={room.title} />
        </>
    )
}
export default RoomPage

export const getServerSideProps = async (context) => {
    try {
        const { data } = await instance.get('/rooms.json')
        const roomId = context.query.id
        const room = data.find(el => el.id === roomId)
        return {
            props: {
                room
            }
        }
    } catch (e) {
        console.log(e)

        return {
            props: {
                rooms: []
            }
        }
    }
}


