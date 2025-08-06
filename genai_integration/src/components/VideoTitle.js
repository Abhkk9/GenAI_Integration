import React from 'react'

function VideoTitle( {title,overview}) {
  return (
    <div className="w-screen aspect-video pt-[20%]  px-26 absolute bg-gradient-to-r from-black">
    <h1 className='text-6xt font-bold text-white mx-8'>{title}</h1>
      <p className=' py-6 text-lg w-1/4 text-white mx-8'>{overview}</p>
      <div className=' m-4 '>
        <button className='bg-white text-black p-4 px-8 text-lg hover:bg-opacity-50 rounded-lg'>Play</button>
        <button className='mx-2 bg-gray-500 text-black p-4 px-8 text-lg bg-opacity-17 rounded-lg'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
