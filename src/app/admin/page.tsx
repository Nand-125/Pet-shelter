'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import AboutUs from '@/components/AboutUs'
import PetProfile from '@/components/PetProfile'
import BlogSection from '@/components/BlogSection'
import AdminPetProfile from '@/components/AdminPetProfile'
import AdminHero from '@/components/AdminHero'

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
    <main >
      <div className='relative'>
        <AdminHero/>
        <div className='w-full flex justify-center absolute bottom-[-200] left-0'>
        <Services/>
        </div>
        </div>
       <h1>WELCOME TO ADMIN PORTAL</h1>
          <AboutUs/>
          <AdminPetProfile/>
          <BlogSection />
      
  </main>
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