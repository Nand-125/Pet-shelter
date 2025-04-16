'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// Temporary user store (replace with proper auth in production)
const useUserStore = (set: any) => ({
  user: null,
  setUser: (user: any) => set({ user }),
})

export default function DashboardPage() {
  const router = useRouter()
  
  // In a real app, you would get this from your auth context
  const user = { role: 'admin' } // Temporary hardcoded user

  useEffect(() => {
    // In a real app, you would check auth state here
    const isAuthenticated = true // Replace with actual auth check
    if (!isAuthenticated) router.push('/login')
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Pet Shelter Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Welcome, {user?.role}</span>
            <button 
              onClick={() => router.push('/login')}
              className="text-sm text-blue-600 hover:underline"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {user?.role === 'admin' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DashboardCard 
              title="Manage Pets"
              description="View and manage all pets in the shelter"
              link="/pets"
            />
            <DashboardCard 
              title="Applications"
              description="Review adoption applications"
              link="/applications"
            />
            <DashboardCard 
              title="Shelter Staff"
              description="Manage shelter staff members"
              link="/staff"
            />
          </div>
        )}

        {user?.role === 'adopter' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardCard 
              title="Browse Pets"
              description="Find pets available for adoption"
              link="/pets"
            />
            <DashboardCard 
              title="My Applications"
              description="View your adoption applications"
              link="/my-applications"
            />
          </div>
        )}
      </main>
    </div>
  )
}

function DashboardCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Link href={link}>
      <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  )
}