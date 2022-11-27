import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { Box , Button, makeStyles, Typography ,Grid } from "@material-ui/core";
import CartItem from "./CartItem";
import { removeFromCart } from "../../redux/actions/cartActions.js"
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";

const useStyles = makeStyles(theme => ({
    component: {
         marginTop: 55,
        padding: '30px 135px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0'
        }
    },
    leftComponent: {
        width: '67%',
        paddingRight: 15,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 15
        }
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        borderTop: '1px solid #f0f0f0'
    },
    placeOrder: {
        display: 'flex',
        marginLeft: 'auto',
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 51
    }
}));


const Cart = ()=>{
    
    const {cartItems}= useSelector( state=>state.cart  ) ;
    const dispatch =useDispatch()

    useEffect( ()=>{
        console.log(cartItems )
    } )

     const removeItemFromCart=(id)=>{
         dispatch(removeFromCart(id) )
     }

     const classes=useStyles();
    return(
       <>
              {
                  cartItems.length ? 
                  
                  <Grid container className={classes.component} >
                      <Box item  lg={9} md={9} sm={12} xs={12} className={classes.leftComponent} >
                          <Box className={classes.header}  > 
                              <Typography style={{fontWeight : 600 , fontSize : 18 } } >My cart( {cartItems.length }   ) </Typography>
                          </Box>
                          {
                              cartItems.map(  item => (
                              <CartItem item={item}removeItemFromCart={removeItemFromCart}  />
                            ))
                          }
                          <Box className={classes.bottom} >
                              <Button onClick={()=>alert("This feature is in development mode") } className={classes.placeOrder} variant="contained"  >place order</Button>
                          </Box>
                                  
                      </Box>
                       <Grid>
                         <TotalView item lg={3} md={3} sm={12} xs={12} cartItems={cartItems} />
                       </Grid>
                      
                  </Grid>
                  
                  : <EmptyCart/>
              }
       </>
    )
}
export default Cart;