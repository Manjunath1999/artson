// import React, { useState, useEffect } from "react";
// import LoadingButton from "@mui/lab/LoadingButton";
// import AddDetailsTBT from "./addDetailsTBT"
// import ViewReportTBT from "./viewReportTBT"
// import AddTraineeTBT from "./addTraineeTBT"

// function ToolBoxTalk({ selectedParent, selectedChildren }) {
//   const [state, setState] = useState({
//     addTrainee: false,
//     viewReport: false,
//     addDetails: false,
//   });

//   const handleAddTrainee = () => {
//     setState({
//         addTrainee: true,
//         viewReport: false,
//         addDetails: false,
//       });
//  };

//  const handleViewReport = () => {
//     setState({
//         addTrainee: false,
//         viewReport: true,
//         addDetails: false,
//       });
//  };

//  const handleAddDetails = () => {
//     setState({
//         addTrainee: false,
//         viewReport: false,
//         addDetails: true,
//       });
//  };

//   return (
//     <div className="full-width-height">
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           marginTop: "6rem",
//           justifyContent: "center", // Center align horizontally
//           alignItems: "center",
//         }}
//       >
//         <LoadingButton
//           type="submit"
//           loadingPosition="end"
//           sx={{ width: "15rem" }}
//           variant="contained"
//           className="login-button"
//           endIcon={<></>}
//           onClick={handleAddDetails}
//         >
//           Add Details
//         </LoadingButton>
//         <div style={{ width: "2rem" }}></div>
//         <LoadingButton
//           type="submit"
//           loadingPosition="end"
//           sx={{ width: "15rem" }}
//           variant="contained"
//           className="login-button"
//           endIcon={<></>}
//           onClick={handleAddTrainee}
//         >
//           Add Trainee
//         </LoadingButton> 
        
//         <div style={{ width: "2rem" }}></div>
//         <LoadingButton
//           type="submit"
//           loadingPosition="end"
//           sx={{ width: "15rem" }}
//           variant="contained"
//           className="login-button"
//           endIcon={<></>}
//           onClick={handleViewReport}
//         >
//           View Report
//         </LoadingButton>
//       </div>
//       <div style={{
//           display: "flex",
//           flexDirection: "row",
//           marginTop: "6rem",
//           justifyContent: "center", // Center align horizontally
//           alignItems: "center",
//         }}>
//         { state.addTrainee ? <AddTraineeTBT/> : state.viewReport ? <ViewReportTBT/> : <AddDetailsTBT/>}
//       </div>
//     </div>
//   );
// }

// export default ToolBoxTalk;


import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
  TextField,
  Box,
} from '@mui/material';

function ViewReportTBT() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={10}>
                <Typography variant="h6" align="center">
                  ARTSON ENGINEERING LIMITED
                </Typography>
                <Typography variant="h6" align="center">
                  HSE INDUCTION / ORIENTATION TRAINING RECORD
                </Typography>
                <Typography variant="body1" align="center">
                  (A Subsidiary of TATA PROJECTS LIMITED)
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={8}>
                <Typography variant="body1">Location: Bangalore</Typography>
              </TableCell>
              <TableCell colSpan={2}>
                <Typography variant="body1">Date: 09-08-1999</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}>
                <Typography variant="body1">Induction Record No: 2</Typography>
              </TableCell>
              <TableCell colSpan={5}>
                <Typography variant="body1">
                  No. of Persons Inducted: 2
                </Typography>
              </TableCell>
              <TableCell colSpan={2}>
                <Typography variant="body1">Time: 10:30</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={4}>
                1. Briefing of General EHS Rules / HSE Policy
                <br/>
                2. Personnel Protective Equipment's
                <br/>
                3. Housekeeping & Waste disposal
                <br/>
                4. Electrical Safety
                <br/>
                5. First-Aid & Accident Reporting
                <br/>
              </TableCell>
              <TableCell colSpan={6}>
                6. Scaffolding, Access and Ladders
                <br/>
                7. Working at Heights
                <br/>
                8. Lifting Practices
                <br/>
                9. Fire Prevention & Protection
                <br/>
                10. Emergency Procedures
              </TableCell>
            </TableRow>
          </TableBody>
          <TableHead>
            <TableRow>
              <TableCell>S No.</TableCell>
              <TableCell>Name of the Person</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Signature</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(2).keys()].map((index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>Manjunath</TableCell>
                <TableCell>Conneqt</TableCell>
                <TableCell>24</TableCell>
                <TableCell>Digital Engineer</TableCell>
                <TableCell>ert</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4}>
              Name & Signature of HSE Person:
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}>
               Document No: AEL/FRM/HSE/01
              </TableCell>
              <TableCell colSpan={3}>
              * THINK SAFE * ACT SAFE * BE SAFE *
              </TableCell>
              <TableCell colSpan={3}>
              Revision No: 01 ;  Date: 13/09//2023
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
      </TableContainer>
    </div>
  );
}

export default ViewReportTBT;

