import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react";
import { getProductDetails } from "../../redux/actions/productAction.js";
import { Box, Typography, makeStyles, CircularProgress, Button, Grid } from '@material-ui/core';
import { LocalOffer as Badge } from '@material-ui/icons';
import clsx from "clsx";
import ProductDetail from "./ProductDetail.jsx";
import ActionItems from "./ActionItems.jsx";

const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        // margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    }
}));



const DetailView = ( {match}  )=>{
 
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'     
    const classes = useStyles();
    const {product } = useSelector( state=>state.getProductDetails  );

     const dispatch = useDispatch();

      useEffect(() => {
         
          dispatch( getProductDetails(match.params.id ) )
      }, [dispatch])

     // since return runs first before useEffect so we have to make a check on return statement
    return (
        
        <Box className={classes.component}>
            <Box></Box>
            { product && Object.keys(product).length &&
                <Grid container className={classes.container}> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItems product={product} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{marginTop: 5}}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{color: '#388E3C'}}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </Grid>
                </Grid>
            }   
        </Box>
    )
}
export default DetailView