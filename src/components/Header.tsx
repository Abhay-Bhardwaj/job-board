import { getSignInUrl,getUser, signOut } from "@workos-inc/authkit-nextjs";
import Link from "next/link";


export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();
  return (
    <header>
          <div className="container flex justify-between items-center mx-auto my-4">
            <Link href={'/'} className="font-bold">Job Board</Link>
            <nav className="flex gap-4">
              {!user && <Link className="bg-gray-200 py-2 px-4 rounded-md" href={signInUrl}>Login</Link>}
              {user && <>
                <form action={async () => {
                        'use server';
                        await signOut();
                      }}>
                        <button type="submit" className="bg-gray-200 py-2 px-4 rounded-md" >Logout</button>
                    </form>
                    <Link className="bg-blue-600 text-white py-2 px-4 rounded-md" href={'/new-listing'}>Post a Job</Link> 
              </>
              }
            </nav>
          </div>
    </header>
  )
}
