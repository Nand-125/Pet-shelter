import { X } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay to darken background */}
      <div className="min-h-screen flex items-center justify-center px-6 py-12 relative z-10">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
          
          {/* Text Section */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Breeding The <span className="text-orange-500">Best Friends</span><br />
              For You And Your Family
            </h1>
            <p className="text-white text-lg max-w-md">
              Here at Happy Tails, we love Labrador Retrievers and we have been breeding them for over half a century. We guarantee that puppies from our kennel club will grow into your faithful companions.
            </p>
            <div className='flex gap-x-6'>
            <Link href="/signup">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-lg rounded-full">
               Sign Up 
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-lg rounded-full">
               Login
              </Button>
            </Link>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
