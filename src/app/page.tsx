import Link from 'next/link';

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Pet Shelter</h1>
      <div className="space-y-4">
        <Link href="/signup" className="block w-64 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors">
          Sign Up
        </Link>
        <Link href="/login" className="block w-64 bg-gray-600 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
          Login
        </Link>
      </div>
    </div>
  );
}