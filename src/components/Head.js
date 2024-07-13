import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

    const dispatch=useDispatch();

    const toogleMenuHandler=()=>{
        dispatch(toggleMenu())
    }

    return (
        <div className='grid grid-flow-col m-4 p-5 shadow-2xl bg-gray-200'>
            <div className='flex col-span-1 pt-1'>
                <img
                    onClick={()=>toogleMenuHandler()}
                    className='h-9 w-9 cursor-pointer'
                    alt="menu"
                    src="https://cdn-icons-png.flaticon.com/512/8182/8182885.png" />
                <img
                    className='h-9 mx-8'
                    alt='youtube-logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png' />
            </div>
            <div className='col-span-10 px-24 '>
                <input className='w-7/12 border border-gray-400 p-2 rounded-l-full font-serif font-medium' type='text' />
                <button className='border border-gray-400 p-2 rounded-r-full font-serif font-semibold bg-gray-100 hover:bg-gray-400'>Search</button>
            </div>
            <div className='col-span-1 text-right pt-1'>
                <img
                    className='h-9 w-9'
                    alt='user'
                    src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
            </div>
        </div>
    )
}

export default Head
