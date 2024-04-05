import Link from 'next/link'
import React from 'react'
import Container from '../Container'

const Navbar = () => {
    return (
        <div className='
        sticky
        top-0
        shadow-sm
        w-full
        z-30
        bg-slate-200
        '
        >
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex flex-row items-center justify-between gap-5'>
                        <Link href={`/`}>LOGO</Link>
                        <div>Search</div>
                        <div className='flex flex-row items-center gap-5'>
                            <div>Home</div>
                            <div>Contact</div>
                            <div>About</div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar