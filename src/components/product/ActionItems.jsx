import { Button, Box, makeStyles } from '@material-ui/core';
import clsx from "clsx"
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { payUsingPaytm } from '../../service/api.js';
import { post } from '../../utils/paytm.js';

const useStyle = makeStyles(theme => ({
    leftContainer: {
        minWidth: '40%',
        // textAlign: 'center',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF'
    },
    buyNow:{
        background: '#fb641b',
        color: '#FFF'
    }
}));


const ActionItems=({product} )=>{
    const classes = useStyle();
     const dispatch = useDispatch();
        const history=useHistory();

    
     const addItemToCart=()=>{
        dispatch(addToCart(product.id ) )
        history.push( "/Cart" )
       }
     const buyNow = async()=>{
        let response=   await payUsingPaytm({  amount :500, email :"ankitsingh25996@gmail.com" } );
          
        let information={
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response  
        }
        post( information )
     }



    return (
        <Box className={classes.leftContainer}>
        <img src={product.detailUrl } alt='kk' /><br />
        <Button onClick={()=>addItemToCart() } className={clsx(classes.button, classes.addToCart)} style={{marginRight: 10}} variant="contained" ><Cart/> Add to cart </Button>
        <Button onClick={()=>alert("This feature is in development mode") } className={clsx(classes.button, classes.buyNow)} variant="contained" ><Flash/> Buy now </Button>
    </Box>
    )
}
export default ActionItems