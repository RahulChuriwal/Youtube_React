import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <div className='p-4 pr-10 shadow-2xl bg-gray-50 w-56 '>
            <div className='pl-6'>
                <ul className='border-b-2 pb-4 font-serif font-bold'>
                    <li><Link to="/">Home</Link></li>
                    <li>Shorts</li>
                    <li>Videos</li>
                    <li>Live</li>
                </ul>
                <h1 className='font-bold pt-5 font-serif'>Subscription</h1>
                <ul className='border-b-2 pb-4 font-serif'>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
                <h1 className='font-bold pt-5 font-serif'>Watch Later</h1>
                <ul className='border-b-2 pb-4 font-serif F'>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
                <h1 className='font-bold pt-5'>History</h1>
            </div>
        </div>
    )
}

export default SideBar
