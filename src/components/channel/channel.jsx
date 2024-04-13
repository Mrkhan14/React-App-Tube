import React from 'react'
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom'

const Channel = () => {
  const params = useParams()
  console.log(params);
  return (
    <div>
      Channel
      <Link to={'/'}>
        <Button> Main </Button>
      </Link> 
    </div>
  )
}
export default Channel