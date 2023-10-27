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
    date: "",
    inductionRecord: "2",
    noofPersonsInducted: "2",
    inductiongivenby: "",
    time: "",
    signatureofhse: "",
    sitelocation: "",
    subContractorName: "",
    incidentDate: "",
    incidentTime: "",
    personsInvolved: "",
    exactLocation: "",
    typeOfWork: "",
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
        marginTop: "7rem",
      }}
    >
      <Typography variant="h5" align="center" style={{ marginBottom: "2rem", marginTop: "1rem", fontSize: "1.8rem" }}>
        NEAR MISS REPORT
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
                <Typography variant="body1" align="center">
                  (A Subsidiary of TATA PROJECTS LIMITED)
                </Typography>
                <Typography variant="h6" align="center">
                  NEAR MISS REPORT
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={12} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                <Typography variant="body1">
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="project"
                      name="project"
                      label="project"
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
                      {/* Location: {formData.location} */}
                      Project: {formData.project}
                    </Typography>
                  )}
                </Typography>
              </TableCell>
              {/* <TableCell colSpan={2} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
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
              </TableCell> */}
            </TableRow>

            <TableRow>
              <TableCell colSpan={12} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                <Typography variant="body1">
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="sitelocation"
                      name="sitelocation"
                      label="sitelocation"
                      value={formData.sitelocation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sitelocation: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <Typography variant="body1">
                      {/* Location: {formData.location} */}
                      Site/Location : {formData.sitelocation}
                    </Typography>
                  )}
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={12} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                <Typography variant="body1">
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="subContractorName"
                      name="subContractorName"
                      label="subContractorName"
                      value={formData.subContractorName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subContractorName: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <Typography variant="body1">
                      {/* Location: {formData.location} */}
                      Sub-Contractor name: {formData.subContractorName}
                    </Typography>
                  )}
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={6} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                <Typography variant="body1">
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="incidentDate"
                      name="incidentDate"
                      label="incidentDate"
                      value={formData.incidentDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          incidentDate: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <Typography variant="body1">
                      {/* Location: {formData.location} */}
                      Incident Date: {formData.incidentDate}
                    </Typography>
                  )}
                </Typography>
              </TableCell>
              <TableCell colSpan={4} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="incidentTime"
                    name="incidentTime"
                    label="incidentTime"
                    value={formData.incidentTime}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        incidentTime: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">
                    Incident Time: {formData.incidentTime}
                  </Typography>
                )}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={12} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="personsInvolved"
                    name="personsInvolved"
                    label="personsInvolved"
                    value={formData.personsInvolved}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        personsInvolved: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">
                    Person/s Involved: {formData.personsInvolved}
                  </Typography>
                )}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={12} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="exactLocation"
                    name="exactLocation"
                    label="exactLocation"
                    value={formData.exactLocation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        exactLocation: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">
                    Exact location where the incident took place: {formData.exactLocation}
                  </Typography>
                )}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={6} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id="typeOfWork"
                    name="typeOfWork"
                    label="typeOfWork"
                    value={formData.typeOfWork}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        typeOfWork: e.target.value,
                      })
                    }
                  />
                ) : (
                  <Typography variant="body1">
                    Type of work activity doing at incident time  {formData.typeOfWork}
                    <br />(Ex: Welding/Gas cutting/Excavation/Hydra Operation, etc.,)

                  </Typography>
                )}
              </TableCell>
              <TableCell colSpan={6} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                {isEditing ? (
                  <CustomTextField
                    type="text"
                    id=""
                    name=""
                    label=""
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
                    {formData.inductionRecordq}
                  </Typography>
                )}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={12} style={{ border: '1px solid #000', padding: '0 0px 28px 10px', textAlign: 'left', fontSize: '16px' }}>
                Describe What happened? :
              </TableCell>

            </TableRow>

            <TableRow>
              <TableCell colSpan={12} style={{ border: '1px solid #000', padding: '0 0px 28px 10px', textAlign: 'left', fontSize: '16px' }}>
                Analysis - Why did it happened? :
              </TableCell>

            </TableRow>

            <TableRow>
              <TableCell colSpan={12} style={{ border: '1px solid #000', padding: '0 0px 28px 10px', textAlign: 'left', fontSize: '16px' }}>
                Immediate Action Taken:
              </TableCell>

            </TableRow>

            <TableRow>
              <TableCell colSpan={12} style={{ border: '1px solid #000', padding: '0 0px 28px 10px', textAlign: 'left', fontSize: '16px' }}>
                Recommended Future Corrective Action:
              </TableCell>

            </TableRow>

            <TableRow>
              <TableCell colSpan={12} style={{ border: '1px solid #000', padding: '0 0px 28px 10px', textAlign: 'left', fontSize: '16px', paddingBottom: '35px' }}>
                Positive Observation : No loss of personnel / equipment / property damage<br />
                (please specify)
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
                        <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>Name of the Witness</TableCell>
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
                          {/* <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
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
                          </TableCell> */}
                          {/* <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
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
                          </TableCell> */}
                          {/* <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
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
                          </TableCell> */}
                          {isEditing && (
                            <TableCell style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                              <Button onClick={() => deleteRow(index)} variant="contained" style={{ backgroundColor: "#4B4B4B" }}>
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
                  <Button onClick={addRow} variant="contained" style={{ backgroundColor: "#4B4B4B" }}>
                    Add Row
                  </Button>
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={6} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
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

                  <Typography variant="body1" className="signatureHeight">
                    Signature of Engineer :{formData.signatureofhse}
                  </Typography>
                )}
              </TableCell>
              <TableCell colSpan={6} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
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

                  <Typography variant="body1" className="signatureHeight">
                    Signature of HSE Person: {formData.signatureofhse}
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
      <div style={{ margin: "0 auto" }}>
        <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          <Button variant="contained" onClick={handleSave} className="submit-button">
            Create New
          </Button>
          <Button variant="contained" onClick={handleSave} className="submit-button" disabled={!isEditing}>
            Save
          </Button>
          <Button variant="contained" onClick={handleUpdate} className="submit-button">
            Edit
          </Button>
          <Button variant="contained" onClick={handleUpdate} className="submit-button" disabled={isEditing}>
            Print
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ViewReport;
