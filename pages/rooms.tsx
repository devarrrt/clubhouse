import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import ConversationCard from '../components/ConversationCard'
import Header from '../components/Header'
import Link from 'next/link';
import Axios from '../core/axios';

const RoomsPage = ({rooms = []}) => {

  console.log(rooms, 'rooms');
  

  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-40 d-flex align-items-center justify-content-between">
          <h1> All conversations </h1>
          <Button color='green'>
            Start room
          </Button>
        </div>
        <div className="grid mt-30">
         {rooms.map((el, index) => (
           <Link href={`/rooms/${el.id}`} key={index}>  
             <a className='d-flex'>
               <ConversationCard
                 title={el.title}
                 avatars={el.avatars}
                 guests={el.guests}
                 guestsCount={el.guestsCount}
                 spaekersCount={el.spaekersCount} />
             </a>
           </Link>
         ))}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const {data} = await Axios.get('/rooms.json')
    return {
      props: {
        rooms: data
      }
    }
  } catch(e) {
    console.log(e)
  }
  return {
    props: []
  }

}

export default RoomsPage
