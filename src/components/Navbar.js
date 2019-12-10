import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return(
        <div>
            <AppBar position="static" style={{
                background: '#3AB5DE'
            }}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        React & Material-UI Sample
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;