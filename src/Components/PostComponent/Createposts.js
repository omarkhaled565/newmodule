import React from 'react'

const Createposts = () => {
  return (
    <div className=' body'>
        <section className='create-posts'>
            <h1>Add New Posts</h1>
            <form>
                <label className='labelForm'> Blog Title :</label>
                <input className='inp' type="text" required></input>
                <label className='labelForm'> Blog Image :</label>
                <input className='inp'  type="url" required></input>
                <label className='labelForm'> Blog Body :</label>
                <textarea required rows="10"></textarea>
                <label className='labelForm'> Blog Author :</label>
                <select>
                     <option value=""></option>
                    <option value="admin">Admin</option>
                    <option value="codv"> CodeV</option>
                </select>
                <button className='btnArtical1' type= "submit">AddBlog </button>


          </form>
        </section>
  </div>
  )
}

export default Createposts