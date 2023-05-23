
// import React,{useEffect}from 'react'
// import { useNavigate } from 'react-router-dom'


// const Dashboard = () => {
//     const navigate=useNavigate();
//     useEffect(()=>{
   
//         if(!localStorage.getItem('token')){
//             navigate('/login')
//         }
//     },[])
//   return (
//     <div className='dashboard'>
//       <h1>Dashboard</h1>
//     </div>
//   )
// }

// export default Dashboard
import { useNavigate } from 'react-router-dom'
import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Dashboard as DashboardIcon, AccountCircle as AccountCircleIcon } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const navigate=useNavigate();
  function logout() {
    // localStorage.clear();
    localStorage.removeItem("token");
    navigate("/login");
  }
useEffect(()=>{
   
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[])

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <DashboardIcon />
          <h3>Dashboard</h3>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={logout}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {/* Content goes here */}
      </main>
    </div>
  );
};

export default Dashboard;

