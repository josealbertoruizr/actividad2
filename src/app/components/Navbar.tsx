import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-start mx-auto p-4">
        <ul className="font-medium flex flex-row space-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>    
             <Link href="/page2">Rectangle color</Link>
          </li>
          <li>    
             <Link href="/page3">Register</Link>
          </li>
 
        </ul>
      </div>
    </nav>
  );
}