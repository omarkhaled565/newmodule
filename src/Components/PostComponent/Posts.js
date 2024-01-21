import React from 'react'
import "./Posts.css"
import news from "../Assets/news.jpg"
import Post from './Post'
function Posts() {
  return (
      <section className='posts'> 
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
      </section>
  )
}

export default Posts