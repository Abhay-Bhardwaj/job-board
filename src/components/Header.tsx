import Link from "next/link";


export default function Header() {
  return (
    <header>
          <div className="container flex justify-between items-center mx-auto my-4">
            <Link href={'/'} className="font-bold">Job Board</Link>
            <nav className="flex gap-4 *:py-2 *:px-4 *:rounded-md">
              <Link className="bg-gray-200" href={'/login'}>Login</Link>
              <Link className="bg-blue-600 text-white" href={'/new-listing'}>Post a Job</Link>
            </nav>
          </div>
    </header>
  )
}
