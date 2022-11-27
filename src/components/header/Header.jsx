import { AppBar, Toolbar, makeStyles,Drawer , Typography, Box , withStyles,IconButton, List, ListItem } from "@material-ui/core";
// import Search  from "./Search";
import { Link } from "react-router-dom";
import Search  from "./Search";
import HeaderButtons from "./HeaderButtons";
import { Menu } from '@material-ui/icons';
import { useState } from "react";

const useStyles = makeStyles( theme=>( {
  header: {
    background: "#2874f0",
    height: 55
  },
  logo :{
       width : 75,
       
  },
  subURL :{
      width:10 ,
      marginLeft :4,
      height :10
  },
  container:{
      display : "flex"
  },
  component:{
    marginLeft: '12%',
    lineHeight: 0,
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  list: {
    width: 250
},
menuButton: {
  display: 'none',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
},
customButtons: {
  margin: '0 5% 0 auto', 
  [theme.breakpoints.down('sm')]: {
      display: 'none'
  } 
}

}));

const ToolBar = withStyles({
    root: {
      minHeight: 55
    }
    
})(Toolbar);

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  const classes = useStyles();
     
   const [open ,setOpen ]=useState(false )

   const handleClose = ()=>{
     setOpen(false);
   }
   const handleOpen = ()=>{
    setOpen(true);
  }
   
  const list= ()=>{
    return (
     
    <Box className={ classes.list } >
      <List>
        <ListItem>
            <HeaderButtons/>
        </ListItem>
      </List>
    </Box>
  
    )
  }

  return (
    <>
      <AppBar className={classes.header}>
        <ToolBar>
        <IconButton
                    color="inherit"
                    className={classes.menuButton}
                    onClick={()=>handleOpen() } 
                  
                >
                    <Menu />
                   
                </IconButton>
                <Drawer open={open} onClose={handleClose}  >
                      { list() }
                </Drawer>
          <Link to="/" className= { classes.component } >
            <img src ={logoURL } alt = "log" className={ classes.logo } />
            <Box className={ classes.container } >
            <Typography> Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box> </Typography>
            <img src={subURL } alt = "log" className={ classes.subURL } />
            </Box>
          </Link>
           <Search/>
            <span className={classes.customButtons} ><HeaderButtons  /></span> 
           
        </ToolBar>
      </AppBar>
    </>
  );
};
export default Header;
