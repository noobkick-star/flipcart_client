// navigation bar




import { navData } from "../../constants/data";
import { Box, Typography ,makeStyles } from "@material-ui/core";
const useStyle = makeStyles( theme=>( {
    component :{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '55px 130px 0 130px',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    image: {
        width: 64
    },
    
}))

const Navbar = ()=>{
    const classes = useStyle();
    return(
        <Box className={classes.component }  >
            {
                navData.map(  data => (
                    <Box className={ classes.container   } >
                    <img src ={data.url} className={classes.image } alt= "no img found" />
                    <Typography  className={classes.text } > { data.text }  </Typography>
                    </ Box >
                )  )
            }
            
        </Box>

    )
}
export default Navbar;