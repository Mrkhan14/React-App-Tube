import {useEffect, useState} from 'react'
import { Box, Container, Stack, Typography } from '@mui/material';
import {Category, Videos} from '../'
import { category } from '../../constants';
import { ApiService } from '../../service/api.service'

const Main = () => {
  const [selectCategory, setSelectCategory] = useState('New') 
  const [videos, setVideos] = useState([])
  
  const selectCategoryHandeler = (category) =>  {
    setSelectCategory(category)
  }

  useEffect(() => {
    ApiService.fetching('search').then(data => setVideos(data))
  })

  console.log(process.env.REACT_APP_PUBLIC_API_KEY);
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
            
            <Videos />
            {/* {videos.items.map(c => c.kind)} */}
          </Container>
       </Box>
    </Stack>
  )
}
export default Main