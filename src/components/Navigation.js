import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
    <Link to="/home">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/admin">Admin</Link>
    </nav>
  )
}
