
import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, LinkedIn, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const More = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Ankit Singh</Typography>
                <Typography variant="h5" className={classes.text}>I'm an undergraduate student of IIT BHU. 
                I am intrested in wevb developement and like to build real world project
                    
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Typography>have a look at my other projects on Github
                        <Link style={{marginLeft : 20 } }  href="https://github.com/noobkick-star" color="inherit" target="_blank"><GitHub /></Link>
                        </Typography>
                    </Box>
                </Typography>
                <Typography variant="h5" className={classes.text}>
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link style={{marginLeft : 20 } }  href="https://www.linkedin.com/in/ankit-singh-9b6218209" color="inherit" target="_blank">
                           <LinkedIn />
                        </Link>
                    </Box> 
                    <Typography>
                          or send me an Email 
                        <Link style={{marginLeft : 20 } }  href="mailto:ankitsingh25996@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                        </Typography> 
                </Typography>
            </Box>
        </Box>
    )
}

export default More;