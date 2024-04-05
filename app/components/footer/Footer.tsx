
import React from 'react'
import FooterList from './FooterList'
import Container from '../Container'
import Link from 'next/link'
import { MdFacebook } from 'react-icons/md'
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-slate-700 text-slate-200 text-sm mt-16'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Shop Categories</h3>
            <Link href={`#`}>Phones</Link>
            <Link href={`#`}>Laptop</Link>
            <Link href={`#`}>Desktop</Link>
            <Link href={`#`}>Watches</Link>
            <Link href={`#`}>TVs</Link>
            <Link href={`#`}>Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Customer Services</h3>
            <Link href={`#`}>Contact Us</Link>
            <Link href={`#`}>Shipping Policy</Link>
            <Link href={`#`}>Retrun & Exchange</Link>
            <Link href={`#`}>FAQs</Link>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>About Us</h3>
            <p className='mb-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quod perferendis voluptate ratione eveniet sit rerum laudantium optio labore odio rem quas illo earum id ad natus, temporibus a sapiente?
            </p>
            <p>&copy; {new Date().getFullYear()} E-Shop, All Rights Reserved.</p>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Follow Us</h3>
            <div className='flex gap-2'>
              <Link href={`#`}><MdFacebook size={24} /></Link>
              <Link href={`#`}><AiFillTwitterCircle size={24} /></Link>
              <Link href={`#`}><AiFillInstagram size={24} /></Link>
              <Link href={`#`}><AiFillYoutube size={24} /></Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </div>
  )
}

export default Footer