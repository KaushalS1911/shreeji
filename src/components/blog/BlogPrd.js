import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import box from "../../assets/images/blog/box.png";
import line from "../../assets/images/blog/line.png";
import container from "../../assets/images/blog/container.png";
import ship from "../../assets/images/blog/ship.png";
import truck from "../../assets/images/blog/truck.png";
import flight from "../../assets/images/blog/flight.png";
import worker2 from "../../assets/images/blog/worker2.png";
import worker from "../../assets/images/blog/worker.png";
import axios from "axios";


// const blogPrd = [
//   { image: container, label: "Choose the Perfect Product to Export in 6 simple steps"},
//   { image: ship, label: "Top New Points you must be Aware About Export Import policy In India" },
//   { image: truck, label: "Steps to Find a Right Custom House Agent (CHA)" },
//   { image: flight, label: "What is Part of Discharge and Place of Delivery" },
//   { image: worker2, label: "Importance of WAEHOUSE for International Traders" },
//   { image: worker, label: "What is Mother Vessel and Feeder Vessel" },
// ];

const BlogPrd = () => {

  const [blogPrd,setBlogPrd] = useState([])

  useEffect(() => {
    axios.get("https://shreeji-be.onrender.com/api/blog").then((res) => setBlogPrd(res.data.data)).catch((err) => console.log(err))
  },[])
  console.log(blogPrd,"hello")
  return (
    <>
      <Box sx={{ mt: { md: 15, sm: 10, xs: 5 } }}>
        <Container>
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { md: 10, xs: 5 } }}>
              <Typography sx={{ fontWeight: 600, fontSize: { lg: '40px', md: '34px', sm: '24px', xs: '28px' }, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <Typography component={'img'} src={line} sx={{ mr: 1 }}></Typography>
                Blog
              </Typography>
            </Box>
            <Grid container spacing={5}>
              {blogPrd.map((blogPrd, index) => (
                <Grid item md={4} sm={6} xs={12} key={index}>
                  <Box sx={{ position: 'relative' }}>
                    <Typography component={'img'} src={blogPrd?.thumbnail_image} sx={{ width: '100%', objectFit: 'cover', height: { sm: 'auto', xs: '350px' } }}></Typography>
                    <Typography sx={{
                      position: 'absolute',
                      bottom: '10%',
                      width: '100%',
                      height: { lg: '20%', md: '28%', sm: '23%' },
                      backgroundColor: '#fff',
                      boxShadow: 1,
                      display: 'flex',
                      justifyContent: 'center',
                      color: '#555555',
                      fontWeight: 600,
                      py: 3,
                      px: 4,
                      fontSize: { sm: '16px', xs: '14px' },
                      left: { sm: '-6%', xs: '-3%' }
                    }}>
                      {blogPrd?.heading}
                    </Typography>

                    <Button
                      sx={{
                        position: 'absolute',
                        borderRadius: '0',
                        bottom: { sm: '5%', xs: '4%' },
                        color: '#fff',
                        boxShadow: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#19AED7',
                        textTransform: 'unset',
                        py: 1,
                        px: 5.5,
                        fontWeight: 600,
                        right: '-3%'
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ position: 'absolute', top: '-5%', left: '-2%', zIndex: -1, display: { sm: 'block', xs: 'none' } }}>
              <Typography component={'img'} src={box} sx={{ width: { lg: '80%', md: '68%', xs: '53%' } }}></Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default BlogPrd
