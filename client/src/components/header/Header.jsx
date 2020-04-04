import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useStyles } from './style';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {bindActionCreators} from "redux";
import * as actions from '../../redux/actions';
import Badge from '@material-ui/core/Badge';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchField from "./SearchField";

 const Header = ({ setStateSideBar , basket  }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.container}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon onClick= { setStateSideBar }/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    <MenuItem component={Link} to='/shop'>Shop</MenuItem>
          </Typography>
                  <SearchField/>
                    <MenuList style={{ display: 'flex' }}>
                        <MenuItem component={Link} to='/login'>Login</MenuItem>
                        <MenuItem component={Link} to='/register'>Register</MenuItem>
                        <MenuItem component={Link} to='/admin-panel'>Admin panel</MenuItem>
                      <MenuItem component={Link} to='/basket'>
                      <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                      >
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                          <Badge badgeContent={basket.length} color="secondary">
                            <ShoppingBasketIcon />
                          </Badge>
                        </IconButton>
                      </IconButton>
                      </MenuItem>
                </MenuList>
            </Toolbar>
            </AppBar>
        </div>
    );
};

 const mapDispatchToProps = dispatch => {
   const { setStateSideBar } = bindActionCreators(actions, dispatch);
   return{
     setStateSideBar
   };
 };

 const mapStateToProps = state =>({
   basket : state.basket
 });

export default connect( mapStateToProps, mapDispatchToProps )(Header);
