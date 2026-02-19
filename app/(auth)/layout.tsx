import { isAuthinticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
import React from 'react'
import { Toaster } from 'sonner'


const AuthLayout = async ({ children } :{children : React.ReactNode}) => {
  const isUserAuthentecated = await isAuthinticated();
    if (isUserAuthentecated) redirect('/') 


  return (
    <div className='auth-layout'>
      {children}
      <Toaster/>

    </div>
  )
}

export default AuthLayout