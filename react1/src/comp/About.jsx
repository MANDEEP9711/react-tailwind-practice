import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-900 p-4 shadow-md'>
        <h2 className='text-[20px] font-bold text-gray-400'>about--------</h2>
        <div className='flex items-center space-x-4'>
            <div className='mx-9'><img src="/src/images/man.jpg" width='500px' alt="" className='rounded-4xl' /></div>
            <div>
                <p className='text-gray-400 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.</p>
                <div className="text-gray-400 gap-2 my-10">
                <div ><span className='font-bold mx-4'>Birthday: </span> 28 june 2001</div>
                <div><span className='font-bold mx-4'>City: </span> Delhi, India</div>
                <div><span className='font-bold mx-4'>phone: </span> +919625******</div>
                <div><span className='font-bold mx-4'>Gmail: </span> mandeepsingh971159@gamil.com</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;