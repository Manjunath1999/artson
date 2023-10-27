import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Input,
} from "@mui/material";
import CustomTextField from "../../components/common/CustomTextField";
import artsonLogo from "../../assets/images/artson-image.png";


function ViewReport() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    project: "",
    location: "",
    date: "",
    companyname: "",
    workpermitno: "",
    todayactivities: "",
    hazardsassociated: "",
    controlmeasures: "",
    inductiongivenby: "",
    time: "",
    signatureofhse: "",
    signatureofengineer: "",
  });

  const initialRow = {
    name: "",
    company: "",
    age: "",
    designation: "",
    signature: "",
  };
  const [tableData, setTableData] = useState([initialRow]);


  const addRow = () => {
    setTableData([...tableData, { ...initialRow }]);
  };

  const deleteRow = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleDownload = () => {
   console.log("PDF RENDERED")
  }

  return (
    <div className="container">
      <Typography
        variant="h5"
        align="center"
        style={{ marginBottom: "2rem", marginTop: "1rem", fontSize: "1.8rem" }}
      >
        ToolBox Talk
      </Typography>
      <div id="pdf-content">
      <TableContainer component={Paper}>
        <Table style={{ borderCollapse: "collapse" }}>
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={10}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                <img
                  alt="Kotak Logo"
                  className="logo-size"
                  src={artsonLogo.src}
                />
                <Typography variant="h6" align="center">
                  ARTSON ENGINEERING LIMITED
                </Typography>
                <Typography variant="h6" align="center">
                  TOOL BOX TALK / HIRA TALK
                </Typography>
                <Typography variant="body1" align="center">
                  (A Subsidiary of TATA PROJECTS LIMITED)
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={12}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                <Typography variant="body1">
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="project"
                      name="project"
                      label="Project"
                      value={formData.project}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          project: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <Typography variant="body1">
                      Project: {formData.project}
                    </Typography>
                  )}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={6}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                <Typography variant="body1">
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="location"
                      name="location"
                      label="Site/Location"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          location: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <Typography variant="body1">
                      Location: {formData.location}
                    </Typography>
                  )}
                </Typography>
              </TableCell>
              <TableCell
                colSpan={2}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="date"
                    name="date"
                    label="Date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        date: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">Date: {formData.date}</Typography>
                )}
              </TableCell>
              <TableCell
                colSpan={2}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="time"
                    name="time"
                    label="Time"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        time: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">Time: {formData.time}</Typography>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={6}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="companyname"
                    name="companyname"
                    label="Company Name:"
                    value={formData.companyname}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        companyname: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">
                    Company Name: {formData.companyname}
                  </Typography>
                )}
              </TableCell>
              <TableCell
                colSpan={5}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="workpermitno"
                    name="workpermitno"
                    label="Work Permit No"
                    value={formData.workpermitno}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        workpermitno: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">
                    Work Permit No: {formData.workpermitno}
                  </Typography>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={6}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="todayactivities"
                    name="todayactivities"
                    label="Today’s Activities:"
                    value={formData.todayactivities}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        todayactivities: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">
                    Today’s Activities: {formData.todayactivities}
                  </Typography>
                )}
              </TableCell>
              <TableCell
                colSpan={5}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="totalmanpower"
                    name="totalmanpower"
                    label="Total Man Power"
                    value={formData.totalmanpower}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        totalmanpower: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">
                    Total Man Power: {formData.totalmanpower}
                  </Typography>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={4}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="hazardsassociated"
                    name="hazardsassociated"
                    label="Hazards Associated with Activities"
                    value={formData.hazardsassociated}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hazardsassociated: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">
                    Hazards Associated with Activities :{" "}
                    {formData.hazardsassociated}
                  </Typography>
                )}
              </TableCell>
              <TableCell
                colSpan={6}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="controlmeasures"
                    name="controlmeasures"
                    label="Control Measures Explained"
                    value={formData.controlmeasures}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        controlmeasures: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">
                    Control Measures Explained: {formData.controlmeasures}
                  </Typography>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={12}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                <Typography variant="body1">
                  Hazards associated with the job and their control & preventive
                  measures have been explained to my understanding:
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={20}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          style={{
                            border: "1px solid #000",
                            padding: "8px",
                            textAlign: "left",
                          }}
                        >
                          S No.
                        </TableCell>
                        <TableCell
                          style={{
                            border: "1px solid #000",
                            padding: "8px",
                            textAlign: "left",
                          }}
                        >
                          Name of the Person
                        </TableCell>
                        <TableCell
                          style={{
                            border: "1px solid #000",
                            padding: "8px",
                            textAlign: "left",
                          }}
                        >
                          Designation
                        </TableCell>
                        <TableCell
                          style={{
                            border: "1px solid #000",
                            padding: "8px",
                            textAlign: "left",
                          }}
                        >
                          Signature
                        </TableCell>
                        {isEditing && <TableCell  style={{
                            border: "1px solid #000",
                            padding: "8px",
                            textAlign: "left",
                          }}>Action</TableCell>}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tableData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "left",
                            }}
                          >
                            {index + 1}
                          </TableCell>
                          <TableCell
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "left",
                            }}
                          >
                            {isEditing ? (
                              <Input
                                type="text"
                                value={row.name}
                                onChange={(e) => {
                                  const newData = [...tableData];
                                  newData[index].name = e.target.value;
                                  setTableData(newData);
                                }}
                              />
                            ) : (
                              row.name
                            )}
                          </TableCell>
                          <TableCell
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "left",
                            }}
                          >
                            {isEditing ? (
                              <Input
                                type="text"
                                value={row.designation}
                                onChange={(e) => {
                                  const newData = [...tableData];
                                  newData[index].designation = e.target.value;
                                  setTableData(newData);
                                }}
                              />
                            ) : (
                              row.designation
                            )}
                          </TableCell>
                          <TableCell
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "left",
                            }}
                          >
                            {isEditing ? (
                              <Input
                                type="text"
                                value={row.signature}
                                onChange={(e) => {
                                  const newData = [...tableData];
                                  newData[index].signature = e.target.value;
                                  setTableData(newData);
                                }}
                              />
                            ) : (
                              row.signature
                            )}
                          </TableCell>
                          {isEditing && (
                            <TableCell
                              style={{
                                border: "1px solid #000",
                                padding: "8px",
                                textAlign: "left",
                              }}
                            >
                              <Button
                                onClick={() => deleteRow(index)}
                                variant="contained"
                                style={{ backgroundColor: "#4B4B4B" }}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                {isEditing && (
                  <Button
                    onClick={addRow}
                    variant="contained"
                    style={{ backgroundColor: "#4B4B4B" }}
                  >
                    Add Row
                  </Button>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={12}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                Please Note:
                <br />
                1. After completion of TBT Engineer/supervisor will submit
                Original copy to Site HSE Head/Officer.
                <br />
                2. All hazards associated with activities & control measures to
                be explained to workmen as per HIRA guidelines.
                <br />
                3. No workman shall engage at site location without tool box
                talk.
                <br />
                <div style={{ marginBottom: "3rem" }}></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="signatureofengineer"
                      name="signatureofengineer"
                      label="SignatureofEngineer"
                      value={formData.signatureofengineer}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          signatureofengineer: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <Typography variant="body1">
                      Name & Signature of Engineer/Supervisor:{" "}
                      {formData.signatureofengineer}
                    </Typography>
                  )}
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="signatureofhse"
                      name="signatureofhse"
                      label="Signature"
                      value={formData.signatureofhse}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          signatureofhse: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <Typography variant="body1">
                      Name & Signature of HSE Person: {formData.signatureofhse}
                    </Typography>
                  )}
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={3}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                <Typography variant="body1">
                  Document No: AEL/FRM/HSE/01
                </Typography>
              </TableCell>
              <TableCell
                colSpan={3}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                <Typography variant="body1">
                  * THINK SAFE * ACT SAFE * BE SAFE *
                </Typography>
              </TableCell>
              <TableCell
                colSpan={3}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                <Typography variant="body1">
                  Revision No: 01 ; Date: 13/09//2023
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </div>
   
      <div style={{ margin: "0 auto" }}>
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <Button
            variant="contained"
            onClick={handleSave}
            className="submit-button"
          >
            Create New
          </Button>
          <Button
            variant="contained"
            onClick={handleSave}
            className="submit-button"
            disabled={!isEditing}
          >
            Save
          </Button>
          <Button
            variant="contained"
            onClick={handleUpdate}
            className="submit-button"
          >
            Edit
          </Button>
          <Button
            variant="contained"
            onClick={handleDownload}
            className="submit-button"
            disabled={isEditing}
          >
            Print
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ViewReport;
