import React, {useState} from 'react'
import './Name.css'

function Name(){
    const [name, setName] = useState('')
    return(
        <label>
            <input 
            value={name}
            onChange={ e => setName(e.target.value) }
            onClick={ e => e.target.setSelectionRange(0, e.target.value.length)}
            placeholder="Untitled"
            />
        </label>
    )
}

export default Name