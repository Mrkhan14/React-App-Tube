import React from 'react'
import { Stack } from '@mui/material';
import { category } from '../../constants/index';
import { colors } from '../../constants/color';

const Category = () => {
  return (
    <Stack direction={'row'} sx={{overflowX: 'scroll'}}>
         {category.map(itme => (
            <button key={itme.name} className='category-btn'>
               <span style={{color: 'colors.jig', marginRight: '15px'}}>{itme.icon}</span>
               <span style={{ opacity: '1'}}>{itme.name}</span>
            </button>
         ))}
    </Stack>
  )
}

export default Category
