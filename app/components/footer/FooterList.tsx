import React from 'react'

interface Props {
    children: React.ReactNode
}

const FooterList = ({children}: Props) => {
  return (
    <div className='flex flex-col gap-2 w-full mb-6 sm:w-1/2 md:w-1/4 lg:w-1/6'>
        {children}
    </div>
  )
}

export default FooterList