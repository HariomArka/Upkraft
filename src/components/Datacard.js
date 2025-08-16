import React from 'react'

const Datacard = ({value,description }) => {
  return (
    <div className='rounded-lg bg-white p-4 shadow-sm m-1'>
        <div className='text-3xl text-blue-700 font-bold mb-2 font-serif'>
            {value}
        </div>
        <div className='text-ld font-semibold text-gray-900'>
            {description}
        </div>
    </div>
  )
}

export default Datacard