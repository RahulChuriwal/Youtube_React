import React from 'react'

const VideoCard = ({ info }) => {
    // console.log(info);

    return (
        <div className='p-3 m-3 w-80 shadow-xl rounded-xl cursor-pointer hover:bg-gray-100'>
            <img
                className='rounded-2xl'
                alt='thumbnail' src={info?.snippet?.thumbnails.medium.url} />
            <ul className='pt-3'>
                <li className='pb-2 font-bold'>{info?.snippet?.title}</li>
                <li>{info?.snippet?.channelTitle}</li>
                <li>{Math.round(info?.statistics?.viewCount / 1000)}K</li>
            </ul>
        </div>
    )
}

export default VideoCard
