import React from 'react'
import DropDown from './DropDown'

function DropdownSelection() {
    const fields=['city','theatere','movie','timings','seats']
  return (
    <div>
        {fields.map(x=><DropDown value={x}/>)}
    </div>
  )
}

export default DropdownSelection