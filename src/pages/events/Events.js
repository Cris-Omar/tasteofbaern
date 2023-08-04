import React from "react"
import "../../styles/style.css"
import { Posts } from "./Data"
import PostsItems from "../../components/PostItems"

export default function Events(){

  return(
    <div className="events">
      <h2>Upcoming Events</h2>

      <div className='posts'>

        {Posts.map((Posts, key) => {
          return <PostsItems 
            kex={key}
            title={Posts.title} 
            image={Posts.image} 
            shortText={Posts.shortText}/>
        })}
      </div>

    </div>
  )
}