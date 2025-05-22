import React from 'react'
import { Link } from 'react-router'
import { UserCog } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 relative text-center">
    {/* Centered Footer Text */}
    <p className="text-sm">
      &copy; {new Date().getFullYear()} My Application. All rights reserved.
    </p>

    {/* Floating Admin Icon in Bottom Right */}
    <Link
      to="/loginsignupad"
      title="Go to Admin"
      className="absolute right-4 bottom-4 p-2 rounded-full bg-yellow-100 hover:bg-yellow-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
    >
      <UserCog className="w-5 h-5 text-yellow-700 dark:text-yellow-300" />
    </Link>
  </footer>
)
}

export default Footer
