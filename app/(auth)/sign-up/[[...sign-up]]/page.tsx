import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md">
        <SignUp/>
      </div>
    </div>
  )
}