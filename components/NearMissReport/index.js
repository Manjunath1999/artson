import React, { useState, useEffect, useRef } from "react";
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
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FilePopup from "../FilePopup";
import Visibility from "@mui/icons-material/Visibility";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import GlobalLoader from "../common/GlobalLoader";


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
  const [files, setFiles] = useState([null, null, null, null, null]);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filePopupFlag, setFilePopupFlag] = useState(false);
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [loaderFlag, setLoaderFlag] = useState(true);
  function generateRandomID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = 'AEL/FRM/HSE/';
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }
    return id;
  }
  const [documentId, setDocumentId] = useState(generateRandomID());

  useEffect(() => {
    setTimeout(() => {
      setLoaderFlag(false);
    }, 1000);
  }, []);

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

  const handleCreateNew = () => {
    setLoaderFlag(true);
    const randomID = generateRandomID();
    setDocumentId(randomID);
    setTableData([initialRow]);
    setFilePopupFlag(false);
    setTime(null);
    setDob(null);
    setFiles([])
    setFormData({
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
    })
    setTimeout(() => {
      setLoaderFlag(false);
    }, 1000);
  }

  const handleUpdate = () => {
    setIsEditing(true);
  };


  const pdfRef = useRef();

  // const handlePrintPage = () => {
  //   const input= pdfRef.current;
  //   html2canvas(input).then((canvas)=>{
  //     const imgData=canvas.toDataURL('image/png');
  //     // const pdf=new jsPDF('p', 'mm','a4',true);
  //     const pdf=new jsPDF('p', 'pt', 'letter');

  //     const pdfWidth=pdf.internal.pageSize.getWidth();
  //     const pdfHeight=pdf.internal.pageSize.getHeight();
  //     const imgWidth = canvas.width;
  //     const imgHeight = canvas.height;
  //     const Ratio= Math.min(pdfWidth/imgWidth,pdfHeight/pdfHeight);
  //     const imgX = (pdfWidth - imgWidth * Ratio)/2;
  //     const imgY = 0;
  //     pdf.addImage(imgData,'PNG', imgX, imgY,imgWidth * Ratio, imgHeight *Ratio);
  //     pdf.save('Document.pdf');
  //   })
  // };

  useEffect(() => {
    // Ensure that the capture process starts after the entire page has loaded
    window.onload = handlePrintPage;
  }, []);


  function removeSectionsByClassName(className) {
    const input = pdfRef.current;
    const sections = input.getElementsByClassName(className);
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      section.remove();
    }
  }

  function addSectionsByClassName(className) {
    const input = pdfRef.current;
    const sections = input.getElementsByClassName(className);
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      section.push();
    }
  }
  
  const handlePrintPage = () => {
    const input = pdfRef.current;
    const pdf = new jsPDF('p', 'mm', 'a4', true);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
  

    removeSectionsByClassName("report-name");
    removeSectionsByClassName("buttonContainer");
    removeSectionsByClassName("searchButtonContainer");
  
    const addPage = (canvas) => {
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;
    
      const img = new Image();
      img.src = canvas.toDataURL('image/png');
      img.onload = () => {
        pdf.addImage(img, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      };
    };
    
  
    const generatePDF = (pageElement, pageIndex) => {
      if (pageIndex > 0) {
        // If not the first page, add a new page before capturing the content
        pdf.addPage();
      }
  
      html2canvas(pageElement, {
        backgroundColor: "white",
        scale: 2,
      }).then((canvas) => {
        if (pageIndex === 0) {
            pdf.deletePage(1);
          }
        addPage(canvas);
        if (pageIndex < input.children.length - 1) {
          generatePDF(input.children[pageIndex + 1], pageIndex + 1);
        } else {
          pdf.save('Document.pdf');
          addSectionsByClassName("report-name")
          addSectionsByClassName("buttonContainer")
          addSectionsByClassName("searchButtonContainer")
        }
      });
    };
  debugger;
    if (input.children.length > 0) {
      generatePDF(input.children[0], 0);
    }
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleInfo = (index) => {
    setOpen(true);
    setFilePopupFlag(true);
    setUrl(files[index].url);
  };

  const handleFileChange = (e, columnIndex) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 1024 * 1024) {
        const newFiles = [...files];
        const imageUrl = URL.createObjectURL(file);
        newFiles[columnIndex] = {
          file,
          name: file.name,
          url: imageUrl,
        };
        setFiles(newFiles);
        setErrorMessage("");
      } else {
        setErrorMessage("File size should be less than 1 MB");
        e.target.value = null;
      }
    }
  };

  return (
    <div ref={pdfRef}
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
        className="report-name"
      >
        NEAR MISS REPORT
      </Typography>
      {loaderFlag ? (
        <GlobalLoader />
      ) : (
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
                        Describe What happened? :{" "}
                        {formData.describeWhatHappened}
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
                        Positive Observation : No loss of personnel / equipment
                        / property damage &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                      Document No: {documentId}
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
      )}
      <div style={{ margin: "0 auto" }} className="documentContainer">
        {isEditing ? (
          <>
            <Typography variant="body1" className="add-attachements">
              Add Attachments
            </Typography>
            <Table>
              <TableBody>
                {errorMessage && (
                  <Typography variant="body2" color="error">
                    {errorMessage}
                  </Typography>
                )}
                <TableRow>
                  <div className="align-files-edit">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <TableCell
                        key={index}
                        sx={{ padding: "0px", border: "none" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "12rem",
                          }}
                        >
                          <input
                            type="file"
                            accept=".jpg, .png"
                            style={{
                              borderRadius: "2px",
                              width: "200px",
                              display: "none",
                            }}
                            onChange={(e) => handleFileChange(e, index)}
                            id={`file-input-${index}`}
                          />
                          <label htmlFor={`file-input-${index}`}>
                            <Button
                              variant="contained"
                              className="chose-file-button"
                              component="span"
                              onChange={(e) => handleFileChange(e, index)}
                            >
                              Choose File
                            </Button>
                          </label>
                          {files[index] && (
                            <>
                              <IconButton
                                color="primary"
                                sx={{ padding: "0px" }}
                                onClick={() => handleDeleteFile(index)}
                              >
                                <DeleteIcon
                                  sx={{
                                    fontSize: "1rem",
                                    color: "#4B4B4B !important",
                                  }}
                                />
                              </IconButton>
                              <IconButton
                                color="primary"
                                onClick={() => handleInfo(index)}
                                sx={{ padding: "0px", marginLeft: "-10px" }}
                              >
                                <Visibility
                                  sx={{
                                    fontSize: "1rem",
                                    color: "#4B4B4B !important",
                                  }}
                                />
                              </IconButton>
                              {filePopupFlag && (
                                <FilePopup
                                  open={open}
                                  setOpen={setOpen}
                                  url={url}
                                />
                              )}
                            </>
                          )}
                        </div>
                        {files[index]?.name ? (
                          <p className="file-name">{files[index].name}</p>
                        ) : (
                          <p>No File Choosen</p>
                        )}
                      </TableCell>
                    ))}
                  </div>
                </TableRow>
              </TableBody>
            </Table>
          </>
        ) : (
          <Box display="flex" className="align-files">
            {files &&
              files.length > 0 &&
              files.map((file, fileIndex) => (
                <div key={fileIndex} style={{ margin: "0 1rem" }}>
                  {file?.file?.name && (
                    <>
                      <img
                        src={file?.url}
                        alt="Uploaded"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <p className="file-name">{`${fileIndex + 1}. ${
                        file?.file?.name
                      }`}</p>
                    </>
                  )}
                </div>
              ))}
          </Box>
        )}
      </div>

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
            onClick={handleCreateNew}
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
            onClick={handlePrintPage}
            className="submit-button"
            disabled={isEditing}
          >
            Print
          </Button>
        </div>
      </div>
      <div className="searchButtonContainer">
        <div className="searchButton">
          <span>Search</span>
        </div>
        <Button
          variant="contained"
          onClick={handleUpdate}
          className="submit-button"
        >
          <svg
            className="MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 12 12"
            width="12"
            height="12"
            data-testid="SearchIcon"
          >
            <path d="M4.95 0a4.99 4.99 0 0 1 4.102 7.78l3.722 3.723a.75.75 0 1 1-1.06 1.06l-3.723-3.722A4.99 4.99 0 1 1 4.95 0zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default NearMissReport;
