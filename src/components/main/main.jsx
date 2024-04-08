import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Link to={'/channel'}>
        <Button> Channel </Button>
      </Link> 
    </div>
  )
}

export default Main
