import React from 'react'
import news from "../Assets/news.jpg"
const Post = () => {
  return (
    <div className='post'>
            <img className=' img-news' src={news} alt="known"></img>
            <div className='post-Aouther'> By:O.Kh</div>
            <h3 className='h3'>  lorem ipusumd dolor sit amet consectetr adipisicing</h3>
    </div>
  )
}

export default Post