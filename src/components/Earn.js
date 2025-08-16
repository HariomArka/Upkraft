import React from 'react'

const Earn = () => {
    return (
        <div className='md:w-[30%] w-[100%] flex flex-col items-center'>
            <img
                src="./refer.jpg"
                alt="Student"
                className="w-40 h-40 "
            />
            <div className="w-full bg-purple-600 rounded-xl p-3 text-white mb-6 flex text-center align-middle">
                <div className='w-full '>
                    <h3 className="text-xl font-bold mb-2">Refer and Earn</h3>
                    <p className="text-purple-100 mb-4">
                        Invite friends and earn this course powered by
                        Community Learning
                    </p>
                    <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300">
                        Refer Now →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Earn