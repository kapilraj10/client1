import React from 'react'
import AboutUS from './AboutUS'
import ProfileSecation from './ProfileSecation'
const Page = () => {
  return (
  <>
  <AboutUS/>
   <main className="min-h-screen bg-white text-slate-900 antialiased">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-y-20">
          <ProfileSecation />
          <ProfileSecation reverse />
          <ProfileSecation />
        </div>
      </div>
    </main>
  </>
  )
}

export default Page

