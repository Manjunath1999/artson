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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";

function NearMissReport() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    project: "",
    date: "",
    inductionRecord: "2",
    noofPersonsInducted: "2",
    inductiongivenby: "",
    time: "",
    signature: "",
    signatureofhse: "",
    sitelocation: "",
    subContractorName: "",
    incidentDate: "",
    incidentTime: "",
    personsInvolved: "",
    exactLocation: "",
    typeOfWork: "",
    describeWhatHappened: "",
    analysisHappened: "",
    immediateActionTaken: "",
    recomendedFutureAction: "",
    positiveObservation: "",
  });

  const initialRow = {
    name: "",
    company: "",
    age: "",
    designation: "",
    signature: "",
  };
  const [tableData, setTableData] = useState([initialRow]);
  const [time, setTime] = useState(null);
  const [dob, setDob] = useState(null);

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
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        style={{
          margin: "0 auto",
          marginBottom: "2rem",
          marginTop: "1rem",
          fontSize: "1.8rem",
        }}
      >
        NEAR MISS REPORT
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                  <Typography variant="body1" align="center">
                    (A Subsidiary of TATA PROJECTS LIMITED)
                  </Typography>
                  <Typography variant="h6" align="center">
                    NEAR MISS REPORT
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
                    {isEditing ? (
                      <CustomTextField
                        type="text"
                        id="project"
                        name="project"
                        label="Project"
                        value={formData.project}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (/^[A-Za-z\s]*$/.test(inputValue)) {
                            setFormData({
                              ...formData,
                              project: e.target.value,
                            });
                          }
                        }}
                      />
                    ) : (
                      <Typography variant="body1">
                        Project: {formData.project}
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
                    {isEditing ? (
                      <CustomTextField
                        type="text"
                        id="sitelocation"
                        name="sitelocation"
                        label="Site/Location"
                        value={formData.sitelocation}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (/^[A-Za-z\s]*$/.test(inputValue)) {
                            setFormData({
                              ...formData,
                              sitelocation: e.target.value,
                            });
                          }
                        }}
                      />
                    ) : (
                      <Typography variant="body1">
                        Site/Location : {formData.sitelocation}
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
                    {isEditing ? (
                      <CustomTextField
                        type="text"
                        id="subContractorName"
                        name="subContractorName"
                        label="Sub-Contractor name"
                        value={formData.subContractorName}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (/^[A-Za-z\s]*$/.test(inputValue)) {
                            setFormData({
                              ...formData,
                              subContractorName: e.target.value,
                            });
                          }
                        }}
                      />
                    ) : (
                      <Typography variant="body1">
                        Sub-Contractor name: {formData.subContractorName}
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
                    <DesktopDatePicker
                      type="text"
                      id="incidentDate"
                      name="incidentDate"
                      label="Date"
                      inputFormat="Incident Date"
                      value={dob}
                      onChange={(date) => {
                        let dateObj = new Date(date);
                        let dateCheck =
                          dateObj.getMonth() +
                          1 +
                          "/" +
                          dateObj.getDate() +
                          "/" +
                          dateObj.getFullYear();
                        setFormData({
                          ...formData,
                          date: dayjs(dateCheck).format("MM/DD/YYYY"),
                        });
                        setDob(date);
                      }}
                      renderInput={(params) => (
                        <CustomTextField
                          variant="standard"
                          value={dob}
                          fullWidth
                          {...params}
                        />
                      )}
                    />
                  ) : (
                    <Typography variant="body1">
                      Incident Date: {formData.date}
                    </Typography>
                  )}
                </TableCell>
                <TableCell
                  colSpan={4}
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {isEditing ? (
                    <TimePicker
                      type="text"
                      id="time"
                      name="time"
                      label="Select Time"
                      value={time}
                      onChange={(time) => setTime(time)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  ) : (
                    <Typography variant="body1">
                      Time: {time ? time.format("HH:mm A") : ""}
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
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="personsInvolved"
                      name="personsInvolved"
                      label="Person/s Involved"
                      value={formData.personsInvolved}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[A-Za-z\s]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            personsInvolved: e.target.value,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1">
                      Person/s Involved: {formData.personsInvolved}
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
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="exactLocation"
                      name="exactLocation"
                      label="Exact location where the incident took place"
                      value={formData.exactLocation}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[A-Za-z\s]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            exactLocation: e.target.value,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1">
                      Exact location where the incident took place:{" "}
                      {formData.exactLocation}
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
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="typeOfWork"
                      name="typeOfWork"
                      label="Type of work activity doing at incident time "
                      value={formData.typeOfWork}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[A-Za-z\s]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            typeOfWork: e.target.value,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1">
                      Type of work activity doing at incident time :{" "}
                      {formData.typeOfWork}
                      <br />
                      (Ex: Welding/Gas cutting/Excavation/Hydra Operation,
                      etc.,)
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
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="describeWhatHappened"
                      name="describeWhatHappened"
                      label="Describe What happened"
                      value={formData.describeWhatHappened}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[A-Za-z\s]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            describeWhatHappened: e.target.value,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1">
                      Describe What happened? : {formData.describeWhatHappened}
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
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="analysisHappened"
                      name="analysisHappened"
                      label="Analysis - Why did it happened"
                      value={formData.analysisHappened}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[A-Za-z\s]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            analysisHappened: e.target.value,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1">
                      Analysis - Why did it happened? :{" "}
                      {formData.analysisHappened}
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
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="immediateActionTaken"
                      name="immediateActionTaken"
                      label="Immediate Action Taken"
                      value={formData.immediateActionTaken}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[A-Za-z\s]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            immediateActionTaken: e.target.value,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1">
                      Immediate Action Taken: {formData.immediateActionTaken}
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
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="recomendedFutureAction"
                      name="recomendedFutureAction"
                      label="Recommended Future Corrective Action"
                      value={formData.recomendedFutureAction}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[A-Za-z\s]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            recomendedFutureAction: e.target.value,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1">
                      Recommended Future Corrective Action:{" "}
                      {formData.recomendedFutureAction}
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
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="positiveObservation"
                      name="positiveObservation"
                      label="Positive Observation : No loss of personnel / equipment /
                    property damage"
                      value={formData.positiveObservation}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[A-Za-z\s]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            positiveObservation: e.target.value,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1">
                      Positive Observation : No loss of personnel / equipment /
                      property damage &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {formData.positiveObservation}
                      <br />
                      (please specify)
                    </Typography>
                  )}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={12}
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
                            Name of the Witness
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
                          {isEditing && <TableCell>Action</TableCell>}
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
                                    const inputValue = e.target.value;
                                    if (/^[A-Za-z\s]*$/.test(inputValue)) {
                                      const newData = [...tableData];
                                      newData[index].name = e.target.value;
                                      setTableData(newData);
                                    }
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
                                  value={row.company}
                                  onChange={(e) => {
                                    const inputValue = e.target.value;
                                    if (/^[A-Za-z\s]*$/.test(inputValue)) {
                                      const newData = [...tableData];
                                      newData[index].company = e.target.value;
                                      setTableData(newData);
                                    }
                                  }}
                                />
                              ) : (
                                row.company
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
                      id="signatureofhse"
                      name="signatureofhse"
                      label="Signature of Engineer"
                      value={formData.signatureofhse}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[A-Za-z\s]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            signatureofhse: e.target.value,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1" className="signatureHeight">
                      Signature of Engineer :{formData.signatureofhse}
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
                      id="signature"
                      name="signature"
                      label="Signature of HSE Person"
                      value={formData.signature}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[A-Za-z\s]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            signature: e.target.value,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1" className="signatureHeight">
                      Signature of HSE Person: {formData.signatureofhse}
                    </Typography>
                  )}
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
      </LocalizationProvider>
      <div style={{ margin: "0 auto" }} className="buttonContainer">
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
            onClick={handleUpdate}
            className="submit-button"
            disabled={isEditing}
          >
            Print
          </Button>
          <Button
            variant="contained"
            onClick={handleUpdate}
            className="submit-button"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NearMissReport;
