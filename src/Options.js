import React from 'react'

function Options({name, id}) {
  return (
    <option name='name' value={id}>{name}</option>
  )
}

export default Options