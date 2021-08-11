import React from 'react';
import TextField from '@material-ui/core/TextField';
import {useRouter} from 'next/router';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';

import AirplayIcon from '@material-ui/icons/Airplay';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

import AddLocationOutlinedIcon from '@material-ui/icons/AddLocationOutlined';

import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';




const drawerWidth = 85
const backColor = '#41257b'
const useStyles = makeStyles({
    page: {
        background:'#f9f9f9',
        width: '100%'
        
    },
    drawer:{
        width: drawerWidth,
        backgroundColor: backColor
        
        
    },
    field: {
        marginTop: 20,
       marginLeft: 80,
        display: 'block',
        width: '100%'
        
      },
      root:{
          display:'flex'
          
      },
      icon: {
        marginLeft: 20,
        marginTop: 20,
        
        
      }
     
})

const Nav = () => {
    const classes = useStyles()
    const router = useRouter()
    
   
const menuItem = [
    {
        text: '',
        icon: <DashboardIcon color='primary' />,
        path: '/'
    },
    {
        text: '',
        icon: <AirplayIcon color='primary' />,
        path: '/about'
    },
    {
        text: '',
        icon: <MenuBookIcon color='primary' />,
        path: '/'
    },
    {
        text: '',
        icon: <BatteryChargingFullIcon  color='primary'/>,
        path: '/about'
    },
    {
        text: '',
        icon: <CardGiftcardIcon color='primary' />,
        path: '/'
    },
    {
        text: '',
        icon: <PermIdentityIcon color='primary'/>,
        path: '/about'
    },
    {
        text: '',
        icon: <WbSunnyIcon color='primary' />,
        path: '/'
    }

]

    return (
        <div className={classes.root}>
<Drawer variant='permanent' className={classes.drawer}>
    <div>
        <Typography align='center' variant='h6'>Gull</Typography>
    </div>

{/* list/links/icon */}

<List>

{menuItem.map(item=>(
    <ListItem
    onClick={()=> router.push(item.path)}
     button 
     key={item.text}>
<ListItem>{item.icon}</ListItem>
<ListItemText primary={item.text}/>
    </ListItem>
))}

</List>
</Drawer>
<div className={classes.root}>
<div className={classes.icon}>
<AddLocationOutlinedIcon style={{ fontSize: 40 }} color="action"/>
</div>
<div >
    
<form  noValidate autoComplete="off">
<TextField
 className={classes.field}
   color="secondary" 
   id="outlined-basic" 
   label="search" 
   variant="outlined"
   required />
</form>
</div>

</div>

        </div>
    );
};

export default Nav;

