'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

// Form validation schemas
const adminSchema = z.object({
  role: z.literal('admin'),
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  shelterId: z.string().min(1, { message: 'Shelter ID is required' }),
  systemAccessLevel: z.enum(['Full', 'Partial']),
})

const adopterSchema = z.object({
  role: z.literal('adopter'),
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .regex(/[A-Z]/, { message: 'Must contain at least one uppercase letter' })
    .regex(/[0-9]/, { message: 'Must contain at least one number' }),
  ssn: z.string()
    .min(9, { message: 'SSN must be at least 9 digits' })
    .max(11, { message: 'SSN must be at most 11 characters' })
    .regex(/^[\d-]+$/, { message: 'SSN must contain only numbers and hyphens' }),
  address: z.string().min(5, { message: 'Address must be at least 5 characters' }),
})

const formSchema = z.discriminatedUnion('role', [adminSchema, adopterSchema])

type FormData = z.infer<typeof formSchema>
type AdminFormData = z.infer<typeof adminSchema>
type AdopterFormData = z.infer<typeof adopterSchema>

export default function SignUpPage() {
  const [userType, setUserType] = useState<'admin' | 'adopter'>('adopter')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: 'adopter',
    },
  })

  const onSubmit = async (data: FormData) => {
    setError(null)
    setIsSubmitting(true)

    try {
      if (userType === 'adopter') {
        const adopterData = data as AdopterFormData
        
        // Clean SSN input by removing hyphens
        const cleanedSSN = adopterData.ssn.replace(/-/g, '')
        
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: adopterData.firstName.trim(),
            lastName: adopterData.lastName.trim(),
            email: adopterData.email.trim().toLowerCase(),
            password: adopterData.password,
            ssn: cleanedSSN,
            address: adopterData.address.trim(),
          }),
        })

        const responseData = await response.json()
        
        if (!response.ok) {
          // Handle specific error cases
          if (response.status === 409) {
            setFocus('email')
            throw new Error('This email is already registered. Please use a different email.')
          }
          throw new Error(
            responseData.error || 
            responseData.message || 
            `Signup failed with status ${response.status}`
          )
        }

        // Show success message before redirect
        setSuccess(true)
        reset()
        
        // Redirect after 2 seconds
        setTimeout(() => {
          router.push('/dashboard')
        }, 2000)
      }
    } catch (err) {
      console.error('Signup error:', err)
      setError(
        err instanceof Error ? 
        err.message : 
        'An unexpected error occurred. Please try again later.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  // Type guards for form errors
  const isAdminErrors = (errors: any): errors is Partial<Record<keyof AdminFormData, any>> => {
    return userType === 'admin'
  }

  const isAdopterErrors = (errors: any): errors is Partial<Record<keyof AdopterFormData, any>> => {
    return userType === 'adopter'
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        
        {/* User type toggle */}
        <div className="flex mb-6 rounded-lg overflow-hidden border border-gray-200">
          <button
            type="button"
            onClick={() => setUserType('adopter')}
            className={`flex-1 py-2 px-4 transition-colors ${
              userType === 'adopter' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            Pet Adopter
          </button>
          <button
            type="button"
            onClick={() => setUserType('admin')}
            className={`flex-1 py-2 px-4 transition-colors ${
              userType === 'admin' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            Shelter Admin
          </button>
        </div>

        {/* Success message */}
        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            Account created successfully! Redirecting to dashboard...
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input type="hidden" {...register('role')} value={userType} />
          
          {/* Common fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
            <input
              {...register('firstName')}
              className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John"
              disabled={isSubmitting}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
            <input
              {...register('lastName')}
              className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Doe"
              disabled={isSubmitting}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              {...register('email')}
              className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your@email.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
            <input
              type="password"
              {...register('password')}
              className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="At least 6 characters with 1 number"
              disabled={isSubmitting}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Adopter-specific fields */}
          {userType === 'adopter' && isAdopterErrors(errors) && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SSN*</label>
                <input
                  {...register('ssn')}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.ssn ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="123-45-6789"
                  disabled={isSubmitting}
                />
                <p className="text-xs text-gray-500 mt-1">We encrypt your SSN for security</p>
                {errors.ssn && (
                  <p className="text-red-500 text-sm mt-1">{errors.ssn.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address*</label>
                <input
                  {...register('address')}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="123 Main St, City, State ZIP"
                  disabled={isSubmitting}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                )}
              </div>
            </>
          )}

          {/* Admin-specific fields */}
          {userType === 'admin' && isAdminErrors(errors) && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Shelter ID*</label>
                <input
                  {...register('shelterId')}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.shelterId ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.shelterId && (
                  <p className="text-red-500 text-sm mt-1">{errors.shelterId.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Access Level*</label>
                <select
                  {...register('systemAccessLevel')}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.systemAccessLevel ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">Select access level</option>
                  <option value="Full">Full</option>
                  <option value="Partial">Partial</option>
                </select>
                {errors.systemAccessLevel && (
                  <p className="text-red-500 text-sm mt-1">{errors.systemAccessLevel.message}</p>
                )}
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 rounded-md transition-colors ${
              isSubmitting
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-medium mt-4 flex items-center justify-center`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a 
            href="/login" 
            className="text-blue-600 hover:underline font-medium"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}