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
    location: "",
    date: "",
    inductionRecord: "2",
    noofPersonsInducted: "2",
    inductiongivenby: "",
    time: "",
    signatureofhse: "",
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: "0 auto",
        marginTop: "5rem",
      }}
    >
      <Typography variant="h5" align="center" style={{marginBottom :"2rem" , marginTop : "1rem" , fontSize : "1.8rem"}}>
            Tool Box Talk
      </Typography>
      <TableContainer component={Paper}>
        <Table style={{ borderCollapse: 'collapse' }}>
          <TableHead>
            <TableRow>
              <TableCell colSpan={10} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                <img
                  alt="Kotak Logo"
                  className="logo-size"
                  src={artsonLogo.src}
                />
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
              <TableCell colSpan={8} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                <Typography variant="body1">
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="location"
                      name="location"
                      label="Location"
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
              <TableCell colSpan={2} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
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
            </TableRow>
            <TableRow>
              <TableCell colSpan={3} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="inductionrecordno"
                    name="inductionrecordno"
                    label="Induction Record No:"
                    value={formData.inductionRecord}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        inductionRecord: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">
                    Induction Record No: {formData.inductionRecord}
                  </Typography>
                )}
              </TableCell>
              <TableCell colSpan={5} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="personsinducted"
                    name="personsinducted"
                    label="No of Persons Inducted"
                    value={formData.noofPersonsInducted}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        noofPersonsInducted: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">
                    No. of Persons Inducted: {formData.noofPersonsInducted}
                  </Typography>
                )}
              </TableCell>
              <TableCell colSpan={2} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
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
              <TableCell colSpan={4} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                1. Briefing of General EHS Rules / HSE Policy
                <br />
                2. Personnel Protective Equipment's
                <br />
                3. Housekeeping & Waste disposal
                <br />
                4. Electrical Safety
                <br />
                5. First-Aid & Accident Reporting
                <br />
              </TableCell>
              <TableCell colSpan={6} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                6. Scaffolding, Access and Ladders
                <br />
                7. Working at Heights
                <br />
                8. Lifting Practices
                <br />
                9. Fire Prevention & Protection
                <br />
                10. Emergency Procedures
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                <Typography variant="body1">Induction given by</Typography>
              </TableCell>
              <TableCell colSpan={9} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="inductiongivenby"
                    name="inductiongivenby"
                    label="Name"
                    value={formData.inductiongivenby}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        inductiongivenby: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">
                    Name: Mr{formData.inductiongivenby}
                  </Typography>
                )}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={12} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>S No.</TableCell>
                        <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>Name of the Person</TableCell>
                        <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>Company</TableCell>
                        <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>Age</TableCell>
                        <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>Designation</TableCell>
                        <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>Signature</TableCell>
                        {isEditing && <TableCell>Action</TableCell>}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tableData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{index + 1}</TableCell>
                          <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
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
                          <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                            {isEditing ? (
                              <Input
                                type="text"
                                value={row.company}
                                onChange={(e) => {
                                  const newData = [...tableData];
                                  newData[index].company = e.target.value;
                                  setTableData(newData);
                                }}
                              />
                            ) : (
                              row.company
                            )}
                          </TableCell>
                          <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                            {isEditing ? (
                              <Input
                                type="text"
                                value={row.age}
                                onChange={(e) => {
                                  const newData = [...tableData];
                                  newData[index].age = e.target.value;
                                  setTableData(newData);
                                }}
                              />
                            ) : (
                              row.age
                            )}
                          </TableCell>
                          <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
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
                          <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
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
                            <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                              <Button onClick={() => deleteRow(index)}>
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
                  <Button onClick={addRow} variant="contained">
                    Add Row
                  </Button>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={12} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
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
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                <Typography variant="body1">
                  Document No: AEL/FRM/HSE/01
                </Typography>
              </TableCell>
              <TableCell colSpan={3} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                <Typography variant="body1">
                  * THINK SAFE * ACT SAFE * BE SAFE *
                </Typography>
              </TableCell>
              <TableCell colSpan={3} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                <Typography variant="body1">
                  Revision No: 01 ; Date: 13/09//2023
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ margin: "0 auto"}}>
      <div style={{ marginTop: "3rem" ,display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Button variant="contained" onClick={handleSave} className="submit-button" disabled={!isEditing}>
          Save
        </Button>
        <Button variant="contained" onClick={handleUpdate} className="submit-button" disabled={isEditing}>
          Update
        </Button>
      </div>
      </div> 
    </div>
  );
}

export default ViewReport;
