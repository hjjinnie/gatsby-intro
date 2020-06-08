import React from 'react';
import { Button } from 'antd';
import logo from '../images/logo.png';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import linkedIn from '../images/linkedIn.png';
import github from '../images/github.svg';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: '#ffe8df',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header {...props}>
      <div className="logo-wrapper">
        <img
          src={logo}
          alt="logo"
          width="50"
          display="inline-block"
          height="50"
          target="_blank"
        ></img>
        <span> </span>
        <span>Lisa Han</span>
      </div>
      <div className="button">
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Contact Me
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <a href="mailto:jjlisahan@gmail.com">
            <StyledMenuItem>
              <ListItemIcon>
                <DraftsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Email" />
            </StyledMenuItem>
          </a>
          <a href="https://www.linkedin.com/in/lisajjhan/" target="_new">
            <StyledMenuItem>
              <ListItemIcon>
                <img
                  src={linkedIn}
                  width="20"
                  height="20"
                  alt="linkedIn"
                  fontSize="small"
                />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </StyledMenuItem>
          </a>
          <a href="https://github.com/hjjinnie" target="_new">
            <StyledMenuItem>
              <ListItemIcon>
                <img
                  src={github}
                  width="20"
                  height="20"
                  alt="github"
                  fontSize="small"
                />
              </ListItemIcon>
              <ListItemText primary="Github" />
            </StyledMenuItem>
          </a>
        </StyledMenu>
      </div>
    </header>
  );
}
