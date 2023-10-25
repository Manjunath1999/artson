import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import CustomTextField from "../common/CustomTextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

function AddDetailsTBT() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dob, setDOB] = useState(null);

  const formikCustomerDetailsForm = useFormik({
    initialValues: {
      project: "",
      location: "",
      companyname: "",
      workpermitno: "",
      todayactivities: "",
    },
    onSubmit: async (values) => {
      try {
        router.push("/dashboard");
      } catch (error) {
        setLoading(false);
        setError("Something went wrong. please try again later.");
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.location) {
        errors.location = "Location is required";
      }
      if (!values.location) {
        errors.location = "Enter your Location";
      }
      return errors;
    },
  });

  function handleLocationChange(event) {
    formikCustomerDetailsForm.setFieldValue("location", event.target.value);
  }

  function handleProjectChange(event) {
    formikCustomerDetailsForm.setFieldValue("project", event.target.value);
  }

  function handleCompanyNameChange(event) {
    formikCustomerDetailsForm.setFieldValue(
      "inductionRecord",
      event.target.value
    );
  }

  function handleWorkPermitNumberChange(event) {
    formikCustomerDetailsForm.setFieldValue(
      "workpermitno",
      event.target.value
    );
  }

  function handleTodayActivitiesChange(event) {
    formikCustomerDetailsForm.setFieldValue(
      "todayactivities",
      event.target.value
    );
  }

  function handleTotalManPowerChange(event) {
    formikCustomerDetailsForm.setFieldValue(
      "totalmanpower",
      event.target.value
    );
  }
  
  function handleDobChange(Dob) {
    setDOB(Dob);
  }

  return (
    <div className="paper-details">
      <h3>Add Details</h3>
      <form onSubmit={formikCustomerDetailsForm.handleSubmit}>
        <div className="bs-form">
          <div className="form-group" style={{ paddingBottom: "0.5rem" }}>
            <div className="input-wrapper">
              <CustomTextField
                type="text"
                id="project"
                name="project"
                label="Project"
                fullWidth
                onChange={handleProjectChange}
                value={formikCustomerDetailsForm.values.project}
                helperText={
                  formikCustomerDetailsForm.touched.project &&
                  formikCustomerDetailsForm.errors.project
                }
                error={
                  formikCustomerDetailsForm.touched.project &&
                  !!formikCustomerDetailsForm.errors.project
                }
                onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
              />
            </div>
          </div>
          <div className="form-group" style={{ paddingBottom: "0.5rem" }}>
            <div className="input-wrapper">
              <CustomTextField
                type="text"
                id="location"
                name="location"
                label="Location"
                fullWidth
                onChange={handleLocationChange}
                value={formikCustomerDetailsForm.values.location}
                helperText={
                  formikCustomerDetailsForm.touched.location &&
                  formikCustomerDetailsForm.errors.location
                }
                error={
                  formikCustomerDetailsForm.touched.location &&
                  !!formikCustomerDetailsForm.errors.location
                }
                onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
              />
            </div>
          </div>
          <div className="form-group" style={{ paddingBottom: "0.5rem" }}>
            <div className="input-wrapper">
              <CustomTextField
                id="companyname"
                name="companyname"
                label="Company Name(Sub-contractor)"
                fullWidth
                type="text"
                value={formikCustomerDetailsForm.values.companyname}
                onChange={handleCompanyNameChange}
                helperText={
                  formikCustomerDetailsForm.touched.companyname &&
                  formikCustomerDetailsForm.errors.companyname
                }
                error={
                  formikCustomerDetailsForm.touched.companyname &&
                  !!formikCustomerDetailsForm.errors.companyname
                }
                onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
              />
            </div>
          </div>
          <div className="form-group" style={{ paddingBottom: "1.5rem" }}>
            <div className="input-wrapper">
              <CustomTextField
                id="workpermitno"
                name="workpermitno"
                label="Work Permit No"
                fullWidth
                type="text"
                value={formikCustomerDetailsForm.values.workpermitno}
                onChange={handleWorkPermitNumberChange}
                helperText={
                  formikCustomerDetailsForm.touched.workpermitno &&
                  formikCustomerDetailsForm.errors.workpermitno
                }
                error={
                  formikCustomerDetailsForm.touched.workpermitno &&
                  !!formikCustomerDetailsForm.errors.workpermitno
                }
                onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
              />
            </div>
          </div>
          <div className="form-group" style={{ paddingBottom: "1rem" }}>
            <div className="input-wrapper">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  dateAdapter
                  label="Date"
                  inputFormat="dd-MM-yyyy"
                  value={dob}
                  onChange={handleDobChange}
                  sx={{
                    width: "100%",
                  }}
                  renderInput={(params) => (
                    <TextField
                      sx={{
                        "& .MuiInputBase-input": {
                          height: "7px",
                          border: "none",
                        },
                      }}
                      fullWidth
                      InputLabelProps={{
                        style: { fontSize: 17, color: "grey" },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="form-group" style={{ paddingBottom: "0.5rem" }}>
            <div className="input-wrapper">
              <CustomTextField
                id="todayactivities"
                name="todayactivities"
                label="Today's Activities"
                fullWidth
                type="text"
                value={formikCustomerDetailsForm.values.todayactivities}
                onChange={handleTodayActivitiesChange}
                helperText={
                  formikCustomerDetailsForm.touched.todayactivities &&
                  formikCustomerDetailsForm.errors.todayactivities
                }
                error={
                  formikCustomerDetailsForm.touched.todayactivities &&
                  !!formikCustomerDetailsForm.errors.todayactivities
                }
                onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
              />
            </div>
          </div>
          <div className="form-group" style={{ paddingBottom: "0.5rem" }}>
            <div className="input-wrapper">
              <CustomTextField
                id="totalmanpower"
                name="totalmanpower"
                label="Total Manpower"
                fullWidth
                type="text"
                value={formikCustomerDetailsForm.values.totalmanpower}
                onChange={handleTotalManPowerChange}
                helperText={
                  formikCustomerDetailsForm.touched.totalmanpower &&
                  formikCustomerDetailsForm.errors.totalmanpower
                }
                error={
                  formikCustomerDetailsForm.touched.totalmanpower &&
                  !!formikCustomerDetailsForm.errors.totalmanpower
                }
                onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
              />
            </div>
          </div>
          <div className="form-group" style={{ paddingBottom: "0.5rem" }}>
            <div className="input-wrapper">
              <CustomTextField
                id="totalmanpower"
                name="totalmanpower"
                label="Hazards Associated with Activities"
                fullWidth
                type="text"
                value={formikCustomerDetailsForm.values.totalmanpower}
                onChange={handleTotalManPowerChange}
                helperText={
                  formikCustomerDetailsForm.touched.totalmanpower &&
                  formikCustomerDetailsForm.errors.totalmanpower
                }
                error={
                  formikCustomerDetailsForm.touched.totalmanpower &&
                  !!formikCustomerDetailsForm.errors.totalmanpower
                }
                onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
              />
            </div>
          </div>
          <div className="button-wrapper">
            <LoadingButton
              loading={loading}
              type="submit"
              loadingPosition="end"
              fullWidth
              variant="contained"
              className="submit-button"
              endIcon={<></>}
            >
              Submit
            </LoadingButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDetailsTBT;
