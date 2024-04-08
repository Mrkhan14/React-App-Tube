import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const Channel = () => {
  return (
    <div>
      <Link to={'/'}>
        <Button> Main </Button>
      </Link> 
    </div>
  )
}

export default Channel
