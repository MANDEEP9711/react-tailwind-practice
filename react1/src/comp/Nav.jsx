import React from 'react'
import styled from 'styled-components'

function File() {
  const NavItem = styled.div`
  &:hover {
    color: #fbbf24; /* Tailwind's yellow-400 */
    text-decoration: underline;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    padding: 5px 10px;
  }
`;
  return (
    <div className='flex justify-between items-center bg-gray-800 text-white p-4'>
      <div className='navbar text-red-300 m-2 font-bold text-[30px]'>Mandeep Singh</div>
      <div>
        <div className='flex gap-4 text-[15px] cursor-pointer'>
          <NavItem><a href="">home</a></NavItem>
          <NavItem><a href="">about</a></NavItem>
          <NavItem><a href="">skills</a></NavItem>
          <NavItem><a href="">projects</a></NavItem>
          <NavItem><a href="">resume</a></NavItem>
          <NavItem><a href="">contact</a></NavItem>
        </div>
      </div>
    </div>
  )
}

export default File;