import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useStyles } from './style';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
          </Typography>
                    <MenuList style={{ display: 'flex' }}>
                        <MenuItem component={Link} to='/login'>Login</MenuItem>
                        <MenuItem component={Link} to='/register'>Register</MenuItem>
                    </MenuList>
                </Toolbar>

            </AppBar>
        </div>
    );
}
