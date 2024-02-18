import React from 'react'

export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black/75 transition-all">
            <div className='text-center'>
                <img className="max-h-auto max-h-24 block mx-auto" src="/kapaw.jpg" alt="kapaw" />
            </div>
            <h4 className="font-semibold text-xl my-3">Boat Noodle</h4>
            <p className="text-gray-500 text-sm">
                LoremLoremLoremLor
            </p>
            <button className="mt-4 bg-red-800 text-white rounded-full px-8 py-2">Add to cart 50$</button>
        </div>
    )
}
