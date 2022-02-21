import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import ConversationCard from '../components/ConversationCard'
import Header from '../components/Header'
import Link from 'next/link';
import Axios from '../core/axios';

const RoomsPage = ({rooms = []}) => {

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
         {rooms.map(el => (
           <Link href="/rooms/1" key={el.id}>  
             <a className='d-flex'>
               <ConversationCard
                 title={el.title}
                 avatars={["https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                   "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1100&q=60",
                   "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1100&q=60"
                   ]}
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

//fix path 
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
