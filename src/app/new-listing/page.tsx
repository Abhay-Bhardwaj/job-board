import { getUser } from '@workos-inc/authkit-nextjs';
import React from 'react'
import { json } from 'stream/consumers';

export default async function NewListingPage() {
    const {user}= await getUser();
  return (
    <div>
        <p>{JSON.stringify(user)}</p>
    </div>
  )
}
