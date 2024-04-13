import React from 'react'
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
const SearchBar = () => {
  return (
    <Paper component={'form'}>
      <input 
        type="text" 
        placeholder='Search....' 
        className='search-bar'
        />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
