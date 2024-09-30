import React from 'react'
import prdBlogImg from '../../assets/images/blog/productionBlogsImg.png'
import Lines from '../../assets/images/blog/line.png'
import box from '../../assets/images/blog/box.png'
import { Box, Container, Typography } from '@mui/material'

const ProductionBlogsDetail = () => {
  return (
    <>
      <Box sx={{ mt: { md: 15, xs: 10 } }} >
        <Container>
          <Box sx={{ position: 'relative' }}>
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { md: 10, xs: 5 } }}>
                <Typography sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, alignItems: 'center', display: 'flex' }}>
                  <Typography component={'img'} src={Lines} width={'8%'} sx={{ mr: 1 }}></Typography>
                  Our Products
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <Typography component={'img'} src={prdBlogImg} width={{ sm: '80%', xs: '100%' }}></Typography>
                <Typography sx={{
                  position: 'absolute',
                  bottom: '5%',
                  width: '80%',
                  backgroundColor: '#fff',
                  boxShadow: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#555555',
                  fontSize: { lg: '30px', md: '26px', sm: '18px', xs: '14px' },
                  fontWeight: 600,
                  p: 2,
                  left: { sm: '5%', xs: '-3%' }
                }}>
                  Choose the Perfect Product to Export in 6 simple steps
                </Typography>
              </Box>
            </Box>
            <Box sx={{ position: 'absolute', top: '-10%', left: '-2%', zIndex: -1, display: { sm: 'block', xs: 'none' } }}>
              <Typography component={'img'} src={box} sx={{ width: { lg: '80%', md: '68%', xs: '53%' } }}></Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ProductionBlogsDetail
