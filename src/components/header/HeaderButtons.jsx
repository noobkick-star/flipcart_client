import {makeStyles, Box, Typography, Badge, Button } from "@material-ui/core";
import {  ShoppingCart } from '@material-ui/icons';
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import LoginDialog from "../login/Login";
import {LoginContext} from "../../context/ContextProvider"
import Profile from "./Profile"
import { useSelector } from "react-redux";

//css
const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                color: '#2874f0',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10
            }      
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }   
    },
    login: {
        color: '#2874f0',
        marginTop : 4,
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        
    }
          
}));

const HeaderButtons = ( ) => {
    const classes = useStyle();
    const [ open, setOpen ] = useState(false);
    const { account, setAccount } = useContext(LoginContext);
    
    const { cartItems  } = useSelector(  state => state.cart  )
    
    const openLoginDialog = () => {
        setOpen(true);
        
    }
  return (
    
      <Box className={classes.wrapper    }  >
         {
                account ? <Profile account={account} setAccount={setAccount} /> : 
                <Button className={classes.login} variant="contained" onClick={() => openLoginDialog() }>Login</Button>
            }
    
             <Link to='/more' >  <Button variant="contained" className={classes.login} >More</Button></Link> 
        
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={ cartItems.length } color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
     
  )
};
export default HeaderButtons;
