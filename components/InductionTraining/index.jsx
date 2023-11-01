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

function ViewReport() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
    date: null,
    dateInUi: null,
    inductionRecord: "2",
    noofPersonsInducted: "2",
    inductiongivenby: "",
    time: "",
    signatureofhse: "",
  });
  const [dob, setDob] = useState(null);
  const [time, setTime] = useState(null);

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
      }}
    >
      <Typography
        variant="h5"
        align="center"
        style={{ margin: "0 auto", marginBottom: "2rem", marginTop: "1rem", fontSize: "1.8rem" }}
      >
        INDUCTION TRAINING
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
                  <Typography variant="h6" align="center">
                    HSE INDUCTION / ORIENTATION TRAINING RECORD
                  </Typography>
                  <Typography variant="body1" align="center">
                    (A Subsidiary of TATA PROJECTS LIMITED)
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  colSpan={8}
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="location"
                      name="location"
                      label="Location"
                      value={formData.location}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[A-Za-z\s]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            location: inputValue,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1">
                      Location: {formData.location}
                    </Typography>
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
                    <DesktopDatePicker
                      type="text"
                      id="date"
                      name="date"
                      label="Date"
                      inputFormat="MM/DD/YYYY"
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
                      Date: {formData.date}
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
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="inductionrecordno"
                      name="inductionrecordno"
                      label="Induction Record No:"
                      value={formData.inductionRecord}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[0-9]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            inductionRecord: e.target.value,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1">
                      Induction Record No: {formData.inductionRecord}
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
                      id="personsinducted"
                      name="personsinducted"
                      label="No of Persons Inducted"
                      value={formData.noofPersonsInducted}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[0-9]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            noofPersonsInducted: e.target.value,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1">
                      No. of Persons Inducted: {formData.noofPersonsInducted}
                    </Typography>
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
                    <TimePicker
                      type="text"
                      id="time"
                      name="time"
                      label="Select Time"
                      value={time}
                      onChange={(time) =>
                        setTime(time)
                      }
                      renderInput={(params) => <TextField {...params} />}
                    />
                  ) : (
                    <Typography variant="body1">
                      Time: {time ? time.format('HH:mm A') : ''}
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
                  The following points are briefed :-
                  <br />
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
                <TableCell
                  colSpan={6}
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
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
                <TableCell
                  colSpan={3}
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  <Typography variant="body1">Induction given by</Typography>
                </TableCell>
                <TableCell
                  colSpan={9}
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="inductiongivenby"
                      name="inductiongivenby"
                      label="Name"
                      value={formData.inductiongivenby}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[A-Za-z]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            inductiongivenby: e.target.value,
                          });
                        }
                      }}
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
                            Name of the Person
                          </TableCell>
                          <TableCell
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "left",
                            }}
                          >
                            Company
                          </TableCell>
                          <TableCell
                            style={{
                              border: "1px solid #000",
                              padding: "8px",
                              textAlign: "left",
                            }}
                          >
                            Age
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
                                    if (/^[A-Za-z]*$/.test(inputValue)) {
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
                                  value={row.age}
                                  onChange={(e) => {
                                    const inputValue = e.target.value;
                                    if (/^[0-9]*$/.test(inputValue)) {
                                      const newData = [...tableData];
                                      newData[index].age = e.target.value;
                                      setTableData(newData);
                                    }
                                  }}
                                />
                              ) : (
                                row.age
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
                                    const inputValue = e.target.value;
                                    if (/^[A-Za-z]*$/.test(inputValue)) {
                                      const newData = [...tableData];
                                      newData[index].designation =
                                        e.target.value;
                                      setTableData(newData);
                                    }
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
                                    const inputValue = e.target.value;
                                    if (/^[A-Za-z]*$/.test(inputValue)) {
                                      const newData = [...tableData];
                                      newData[index].signature = e.target.value;
                                      setTableData(newData);
                                    }
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
                  {isEditing ? (
                    <CustomTextField
                      type="text"
                      id="signatureofhse"
                      name="signatureofhse"
                      label="Signature"
                      value={formData.signatureofhse}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^[A-Za-z]*$/.test(inputValue)) {
                          setFormData({
                            ...formData,
                            signatureofhse: e.target.value,
                          });
                        }
                      }}
                    />
                  ) : (
                    <Typography variant="body1">
                      Name & Signature of HSE Person: {formData.signatureofhse}
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

        </div>
      </div>
      <div className="searchButtonContainer">
        <div className="searchButton">
          <span>
            Search 
            {/* <svg class="MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 12 12" width="12" height="12" data-testid="SearchIcon">
              <path d="M4.95 0a4.99 4.99 0 0 1 4.102 7.78l3.722 3.723a.75.75 0 1 1-1.06 1.06l-3.723-3.722A4.99 4.99 0 1 1 4.95 0zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
            </svg> */}
          </span>
          <Button
            variant="contained"
            onClick={handleUpdate}
            className="submit-button"
          >
            <svg class="MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 12 12" width="12" height="12" data-testid="SearchIcon">
              <path d="M4.95 0a4.99 4.99 0 0 1 4.102 7.78l3.722 3.723a.75.75 0 1 1-1.06 1.06l-3.723-3.722A4.99 4.99 0 1 1 4.95 0zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ViewReport;
