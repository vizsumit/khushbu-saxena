import React from 'react'

const HomePage = () => {
  let name = "Khushbu"
  let surName = "Saxena"
  let arr = ["SDF", "CSS", "JS", 0, true, false,];
  
  
  return (
    <div>
      <h1>Hello {name} {surName}</h1>
      <h3>I am learning {String(arr[5])}</h3>
    </div>
  )
}

export default HomePage