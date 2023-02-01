import React from 'react'
import exampleCards from '@/utils/examples'
import ExampleCard from './ExampleCard'

function ExampleContainer() {
  return (
    <div className='min-h-screen'>
      {exampleCards.map((card) => (
        <ExampleCard card={card} key={card.id} />
      ))}
    </div>
  )
}

export default ExampleContainer
