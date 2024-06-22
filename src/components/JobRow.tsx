import { Heart } from 'lucide-react';
import React from 'react'

export default function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className='absolute top-2 right-2'>
          <Heart className='h-4 w-4'/>
        </div>
        <div className='flex grow gap-4 '>
          <div className='content-center'>
            <img className="size-12" src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"/>
          </div>
          <div className='grow sm:flex'>
            <div className='grow'>
              <div className='font-bold text-gray-500 text-sm'>Spotify</div>
              <div className='font-bold text-lg'>Product designer</div>
              <div className='text-gray-400 text-sm'>Remote &middot; New York, US &middot; Full Time</div>
            </div>
            <div className='content-end items-end text-gray-500 text-xs'>
              2 Weeks ago
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
