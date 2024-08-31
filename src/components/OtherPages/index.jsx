import React from 'react'
import { useParams } from 'react-router-dom'

function OtherPages() {
    const path = useParams()
  return (
    <h2>Welcome to {path['*']} page</h2>
  )
}

export default OtherPages