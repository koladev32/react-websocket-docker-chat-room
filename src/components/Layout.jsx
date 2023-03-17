import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center space-y-6'>
      <h2 className='text-3xl font-bold'>React Ws Chat</h2>
      {children}
    </div>
  )
}

export default Layout
