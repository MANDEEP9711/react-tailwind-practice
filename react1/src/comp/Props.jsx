import React from 'react'

const Props = ({person}) => {
  return (
    <div>
        <h1>props pass</h1>
        <h2 className='text-3xl font-bold text-blue-500'>Hello {person.name}</h2>
        <p className='text-xl'>Age: {person.age}</p>
        <p className='text-lg'>Gmail: {person.gmail}</p>
    </div>
  )
}

export default Props