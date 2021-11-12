import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
        Switch,
        Route,
        Link,
        useRouteMatch
      } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import Payment from '../Payment/Payment';
import AddReview from '../AddReview/AddReview';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import ManageProduct from '../ManageProduct/ManageProduct';

const drawerWidth = 200;

function Dashboard(props) {

    const {user ,logOut ,admin} = useAuth();
  const { window } = props;
  let { path, url } = useRouteMatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
<Link to={`${url}/addReview`}>Add Review</Link>
<br />
<Link to={`${url}/myOrder`}>My Order</Link>
<br />
<Link to={`${url}/payment`}>Payment</Link> <br />
{admin && <Box><Link to={`${url}/manageAllOrder`}>Manage All Order</Link> <br />
<Link to={`${url}`}>Dashboard</Link> <br />
<Link to={`${url}/makeAdmin`}> Make Admin</Link> <br />
<Link to={`${url}/addProduct`}> Add Product</Link> <br />
<Link to={`${url}/manageProduct`}>Manage Product</Link>
</Box>
}
{user?.email && <li>
          <button onClick={logOut} className="nav-link active ms-5 btn btn-info text-white">logout</button>
        </li>}
    <br />
    <Link to="/"><button class="btn btn-warning text-white">Back to Home</button></Link> <br />
      {/* <List>
        {['Inbox', 'Starred', 'Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
          <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
            <MyOrders/>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin />
        </AdminRoute>
        <Route path={`${path}/addReview`}>
          <AddReview />
        </Route>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct />
        </AdminRoute>
        <Route path={`${path}/payment`}>
          <Payment />
        </Route>
        <AdminRoute path={`${path}/manageAllOrder`}>
          <ManageAllOrders />
        </AdminRoute>
        <AdminRoute path={`${path}/manageProduct`}>
          <ManageProduct />
        </AdminRoute>
        <Route path={`${path}/myOrder`}>
          <MyOrders />
        </Route>
       
      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;






























// import React from 'react';
// import Sidebar from '../Sidebar/Sidebar';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useParams,
//     useRouteMatch
//   } from "react-router-dom";

// const Dashboard = () => {
//     let { path, url } = useRouteMatch();

//     return (
//         <div className="row">
//             <div className="col-md-4">
//             <Sidebar></Sidebar>
//             </div>
//             <div style={{ height:'450px'}} className="col-md-7">
            //  <Link to="/addReview"><button type="button" class="btn btn-warning">Add Review</button></Link>
            // <Link to={`${url}`}><button type="button" class="btn btn-warning">Dashboard</button></Link>
            // <Link to={`${url}/makeAdmin`}><button type="button" class="btn btn-warning">Make Admin</button></Link>
            // <Link to={`${url}/addProduct`}><button type="button" class="btn btn-warning">Add Product</button></Link>
            // <Link to={`${url}/payment`}><button type="button" class="btn btn-warning">Payment</button></Link>
           
//             <h1>This is dashboard</h1>
//            </div>
//             <div className="col-md-1">

//             </div>
//         </div>
//     );
// };

// export default Dashboard;


{/* <Link to="/addReview"><button type="button" class="btn btn-warning">Add Review</button></Link>
<Link to={`${url}`}><button type="button" class="btn btn-warning">Dashboard</button></Link>
<Link to={`${url}/makeAdmin`}><button type="button" class="btn btn-warning">Make Admin</button></Link>
<Link to={`${url}/addProduct`}><button type="button" class="btn btn-warning">Add Product</button></Link>
<Link to={`${url}/payment`}><button type="button" class="btn btn-warning">Payment</button></Link> */}
