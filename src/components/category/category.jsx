import React from 'react'
import { Stack } from '@mui/material';
import { category } from '../../constants/index';
import { colors } from '../../constants/color';

const Category = ({selectCategoryHandeler, selectCategory}) => {
  return (
    <Stack direction={'row'} sx={{overflowX: 'scroll'}}>
         {category.map(itme => (
            <button 
               key={itme.name} 
               className='category-btn'
               style={{
                  borderRadius:0 ,
                  background: itme.name === selectCategory && colors.jur,
                  color: itme.name === selectCategory && '#fff'
               }}
               onClick={() => selectCategoryHandeler(itme.name)}
               >
               <span style={{
                  color: colors.jig, 
                  marginRight: '15px',
                  color: itme.name === selectCategory && '#fff'
                  }}>{itme.icon}</span>
               <span style={{ opacity: '1'}}>{itme.name}</span>
            </button>
         ))}
    </Stack>
  )
}

export default Category
