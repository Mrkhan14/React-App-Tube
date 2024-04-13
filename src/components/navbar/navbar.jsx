import React from 'react'
import { Stack, Box } from '@mui/material';
import { logo } from '../../constants'
import { colors } from '../../constants/color'
import { Link } from 'react-router-dom'
import {SearchBar} from '../index';


 
const Navbar = () => {
  return (
    <Stack 
      direction={'row'} 
      alignItems={'center'} 
      justifyContent={'space-between'}
      p={2}
      sx={{position: 'sticky', top: 0, zIndex: 999,  background:colors.asosi }}
      >
      <Link to={'/'}>
        <img src={logo} alt="logo" width={50} />
      </Link>

      <SearchBar></SearchBar>

      <Box />
    </Stack>
  )
}

export default Navbar
