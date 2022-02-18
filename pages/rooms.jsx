import React from 'react'
import Button from '../components/Button'
import ConversationCard from '../components/ConversationCard'
import Header from '../components/Header'
import Link from 'next/link';


const RoomsPage = () => {
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
          <Link href="/rooms/1">
            <a>
              <ConversationCard
                title="всем привет, ребята"
                avatars={[]}
                guests={[
                  { name: "Carl" },
                  { name: "John" },
                ]}
                guestsCount={5}
                spaekersCount={6} />
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default RoomsPage
