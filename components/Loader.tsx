import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full min-h-full'>
      <span className="text-white loading loading-spinner loading-lg"></span>
    </div>
  )
}

export default Loader