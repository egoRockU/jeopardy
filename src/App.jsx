import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import categories from './data/items.json'

function App() {
  // Add react-card-flip library for flipping cards
  const categoryNames = Object.keys(categories);
  const points = Object.keys(categories[categoryNames[0]])
  console.log(categories);

  return (
    <>
      <div className="border w-full h-full">
	<table className="w-full h-full">
	  <thead>
	    <tr>
	      {categoryNames.map((category, idx)=>(
		<th key={idx} className="border p-4 text-center">
		  {category}
		</th>
	      ))}
	    </tr>
	  </thead>
	  <tbody>
	    {Object.entries(categories).map(([category, items])=>(
	      // TODO: loop each row}
	      <></>
	    ))}
	  </tbody>
	</table>
      </div>
    </>
  )
}

export default App
