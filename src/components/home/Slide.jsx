// slider for all products using carousel


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import { Box, Button, Divider, makeStyles, Typography } from "@material-ui/core";
import Countdown from 'react-countdown';
const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const useStyle = makeStyles(theme => ( {
    component: {
        marginTop: 12,
        background: '#FFFFFF'
    }, 
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: 'auto',
        height: 150
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    deal: {
        display: 'flex',
        padding: '15px 20px'
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    wrapper: {
        padding: '35px 15px'
    },
    timer: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
  } ))
 
const Slide= ( {timer , title , data } )=>{
    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer } >  {hours} : {minutes} : {seconds}  Left </span>;
    };
    
    return(
       
     <Box className={classes.component } >
         <Box className={classes.deal } >  
             <Typography className={classes.dealText } >{title } </Typography>
             { 
             timer &&
             <>
              <Box className={classes.timer  } > 
                        <img src={timerURL} style={{width :24 } } alt="timer"  />
                <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
              </Box>
                <Button variant= "contained" color="primary" className={classes.button } >View all</Button>
           
                     </>
                
             }
         </Box>
         <Divider/>
        <Carousel 
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={100000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
        >
          {     
              data.map( product =>(
                  <Link   to={`product/${product.id}`  } >
                  <Box textAlign="center" className={classes.wrapper } >
                  <img className={classes.image } src ={product.url } alt ="ok" />
                  <Typography className={classes.text } style={{ fontWeight: 600, color: '#212121' }}    >{product.title.shortTitle} </Typography>
                  <Typography className={classes.text } style={{ color: 'green' }} >{product.discount } </Typography>
                  <Typography className={classes.text } style={{ color: '#212121', opacity: '.6' }} >{product.tagline }  </Typography>
                    
                  </Box>
                  </Link>
                  
              )   )
          }
          </Carousel> 
         </Box>
    )
}
export default Slide