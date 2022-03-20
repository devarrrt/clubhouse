import React from 'react'
import Button from '../components/Button'
import ConversationCard from '../components/ConversationCard'
import Header from '../components/Header'
import Link from 'next/link';
import Head from 'next/head';
import Axios from '../core/axios';
import { UserApi } from './../API/UserApi';
import Cookies from 'nookies';
import { checkAuth } from './../helpersFront';

const RoomsPage = ({rooms = []}) => {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Clubhouse: Drop-in audio chat</title>
      </Head>
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

export const getServerSideProps = async (ctx) => {
  try {
    const user =  await checkAuth(ctx)
    console.log(user,'THIS ');

    if (!user){
      return {
        props: {},
        redirect: {
          permanent: false,
          destination: '/'
        }
      }
    }

    return {
      props: {
        user,
        rooms: []
      }
    }
  } catch(e) {
    console.log(e)
  }
  return {
    props: {
      rooms: []
    }
  }

}

export default RoomsPage
