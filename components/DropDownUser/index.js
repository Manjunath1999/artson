import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DropdownUser = () => {
  const router = useRouter();
  const userEmail = "Welcome User";
  const [modelOpen, setModelOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
    setModelOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setModelOpen(true);
  };

  const SignoutClick = async () => {
    try {
        router.push("/");
    } catch (error) {
      console.log("error", error);
      router.push("/");
    }
  };

  return (
    <div>
      <Button
        color="inherit"
        className="headerbutton"
        sx={{ position: "absolute", top: "10px", right: "10px", color: "white",fontSize: "1.2rem", marginTop: "1rem" }}
        onClick={handleClick}
      >
        <AccountCircleIcon sx={{marginRight: "5px"}}/>
        {userEmail}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        style={{ top: "30px", marginTop: "10px", marginLeft: "10px" }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            width: 140,
          },
        }}
      >
        <MenuItem onClick={SignoutClick}>SignOut</MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownUser;
