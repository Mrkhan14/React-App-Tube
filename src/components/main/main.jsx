import {useState} from 'react'
import { Box, Container, Stack, Typography } from '@mui/material';
import {Category} from '../'
import { category } from '../../constants';

const Main = () => {
  const [selectCategory, setSelectCategory] = useState('New') 
  
  const selectCategoryHandeler = (category) =>  {
    setSelectCategory(category)

  }
  return (
    <Stack >
       <Category 
        selectCategoryHandeler={selectCategoryHandeler}
        selectCategory={selectCategory}
       />
       <Box p={2} sx={{height: '90vh'}}>
          <Container maxWidth={'90%'}>
            <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
              {selectCategory} <span>videos</span>
            </Typography>
          </Container>
       </Box>
    </Stack>
  )
}
export default Main