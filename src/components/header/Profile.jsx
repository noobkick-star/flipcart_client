import { Typography ,Menu , MenuItem, makeStyles, Button } from "@material-ui/core";
import { useState } from "react";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from "react-router-dom";

const useStyle = makeStyles( {
    component:{
        marginTop :40
    }

} )

const Profile = ({ account, setAccount }) => {
    const [open,setOpen ]= useState(false);

    const handleClose =()=>{
        setOpen(false );
    }

    const handleClick=(event )=>{
        setOpen(event.currentTarget );
    }
    const classes=useStyle();
    const logout=()=>{
        setAccount('');
    }
  return (
    <>
       <Button onClick={handleClick }  style={{ marginTop: 8 , cursor : "pointer" }}> {account } </Button>
      <Menu
        
        anchorEl={open}
       
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component }
      >
        <MenuItem onClick={ ()=> { handleClose() ; logout();    }  }> <PowerSettingsNewIcon/>   Logout</MenuItem>
       
      </Menu>
    </>
  );
};
export default Profile;
