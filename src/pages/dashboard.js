import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import artsonLogo from "../../assets/images/artson-image.png";
import DropdownUser from "../../components/DropDownUser"
import MenuItem from "@mui/material/MenuItem";
import Home from "../../components/Home";


function DashBoard() {
  const [TabsArray, setTabsArray] = useState(["DOCS", "REPORTS"]);
  const [docs, setDocs] = useState(["Induction Training", "Tool Box Talk", "MOM-HSE Commitee Meeting", "Accident Investigation"]);
  const [reports, setReports] = useState(["Near Miss Report", "Audit report", "Monthly HSE Report", "Mock Drill Report"]);
  const [selectedTab, setSelectedTab] = useState("");
  const [state, setState] = useState({
    REPORTS: false,
    DOCS: false,
  });
  const [selectedParent, setSelectedParent] = useState("");
  const [selectedChildren, setSelectedChildren] = useState("");
  const [searchFlag, setSearchFlag] = useState("");


  const handleClick = (selectedReport, children) => {
    setSearchFlag(true);
    setSelectedParent(selectedReport);
    setSelectedChildren(children); 
 };

  const toggleDrawer = (anchor, open) => (event) => {
    setSelectedTab(anchor);
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({
      ...Object.fromEntries(Object.entries(state).map(([key, value]) => [key, false])),
      [anchor]: open
    });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem sx={{display:"block"}}>
        { anchor == "DOCS" ? 
        <>
        {docs
          ? docs.map((children) => {
              return (
                <MenuItem
                  key={children}
                  className="menu-items"
                  sx={{
                    backgroundColor: children.key == selectedChildren ? "#4B4B4B" : "",
                  }}
                  onClick={() => handleClick(anchor,children)}
                >
                  {children}
                </MenuItem>
              );
            })
          : ""}
        </> : <>
        {reports
          ? reports.map((children) => {
              return (
                <MenuItem
                  key={children}
                  className="menu-items"
                  sx={{
                    backgroundColor: children.key == selectedChildren ? "#4B4B4B " : "",
                  }}
                  onClick={() => handleClick(anchor,children)}
                >
                  {children}
                </MenuItem>
              );
            })
          : ""}
        </>
        }
        
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
    <CssBaseline />
    <AppBar className="app-bar-background" sx={{
    zIndex: (theme) => theme.zIndex.drawer + 1,
    bgcolor: '#ffa500d4', 
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    height: "6rem"
  }}>
      <Toolbar>
        <img alt="Kotak Logo" className="logo-size" src={artsonLogo.src} />
        <div className="header-text">
      
          {TabsArray?.map((parent) => (
            <React.Fragment key={parent}>
              <Button
                sx={{
                  backgroundColor: parent === selectedTab ? "#4B4B4B" : "",
                  marginRight: "2rem",
                  color: "white",
                  fontSize: "1.2rem"
                }}
                onClick={toggleDrawer(parent, true)}
              >
                {parent}
              </Button>

              <SwipeableDrawer
                anchor={parent}
                open={state[parent]}
                onClose={toggleDrawer(parent, false)}
                onOpen={toggleDrawer(parent, true)}
              >
                {list(parent)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
        <DropdownUser />
      </Toolbar>
    </AppBar>
    {searchFlag && (
        <Home selectedParent={selectedParent} selectedChildren={selectedChildren}/>
      )}
  </Box>
  );
}

export default DashBoard;
