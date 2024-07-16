import React, { useState } from 'react'

export default function ColorPicker() {

  const [selectedColor, setSelectedColor] = useState('#000000');
  const handleChange = (e) => {
    // console.log(e.target.value);
    setSelectedColor(e.target.value);
  }
  return (
    <div>
      <input type="color" onChange={handleChange} />
      <div style={{width :"100px", height : "100px", backgroundColor: selectedColor}}></div>
    </div>
  )
}
