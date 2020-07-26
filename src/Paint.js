import React, { useEffect } from 'react'
import Name from './Name'
import ColorPicker from './ColorPicker'
import randomColor from 'randomcolor'

export default function Paint() {
  
  
  const [colors, setColors] = React.useState([]);
  const [activeColor, setActiveColor] = React.useState(null)

 
  const getColors = () => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
    .then(res => res.json())
    .then(res => {
      setColors(res.colors.map(color => color.hex.value))
      setActiveColor(res.colors[0].hex.value)
    })
  }

  React.useEffect(() => {
    getColors();
  },[])

  return (
    <header style={{ borderTop: `10px solid ${activeColor}` }}>
      <div className="app">
        <Name />
      </div>
      <div style={{ marginTop: 10 }}>
        <ColorPicker
          colors={colors}
          currentColor={activeColor}
          setActiveColor={setActiveColor}
        />
      </div>
    </header>
  )
}
