// for three images of corona warriors



import clsx from "clsx"
import { ImageURL } from "../../constants/data"
import { Box , makeStyles , Grid } from "@material-ui/core"
const useStyle = makeStyles( theme=> ( {
  wrapper:{
      display : "flex",
      marginTop :20 ,
      justifyContent : "space-between"
  },
  help: {
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}

} ))

const MidSection = ()=>{
  const classes=useStyle();
  const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
        <>
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper }  >
            {
                ImageURL.map(image =>(
                    <Grid lg={4} sm={12} md={4} xs={12} item >
                    <img src={image } style={{width :"100%" } } alt="corona warriors" />
                    </Grid>
                )   )
            }
            </Grid>
            <img src={coronaURL} className={clsx(classes.wrapper, classes.help)}  alt="corona" style={{width : "100%" , marginTop :20 } } />
        </>
      
    )
}
export default MidSection