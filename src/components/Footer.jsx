import React from 'react'
import { FaLinkedinIn,FaGithub,FaInstagram,FaFacebook} from 'react-icons/fa6'

function Footer() {
  return (
    <>
      <hr />
        <footer className='py-12'>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex space-x-4'>
                        <FaLinkedinIn size={24}/>
                        <FaGithub size={24}/>
                        <FaInstagram size={24}/>
                        <FaFacebook size={24}/>
                    </div>
                    <div className="mt-8 border-gray-700 border-t pt-8 flex flex-col items-center">
                            <p className='text-sm'>
                                &copy;2024 Your Company.All Right Reserved.
                            </p>
                    </div>
                </div>
            </div>

        </footer>
    </>
  )
}

export default Footer
