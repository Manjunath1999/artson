import React, { useState, } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import CustomTextField from "../../components/common/CustomTextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

function AddDetails() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dob, setDOB] = useState(null);

  const formikCustomerDetailsForm = useFormik({
    initialValues: {
      location: "",
      inductionRecord: "",
      noofpersonsInducted: "",
      inductiongivenby :""
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

  function handleInductionRecordChange(event) {
    formikCustomerDetailsForm.setFieldValue("inductionRecord", event.target.value);
  }

  function handleNoofPersonsInductedChange(event) {
    formikCustomerDetailsForm.setFieldValue("noofpersonsInducted", event.target.value);
  }

  function handleInductionGivenByChange(event) {
    formikCustomerDetailsForm.setFieldValue("inductiongivenby", event.target.value);
  }

  function handleDobChange(Dob) {
    setDOB(Dob);
  }

  return (
    <div className="paper-details">
      <h3>Add Details</h3>
      <form onSubmit={formikCustomerDetailsForm.handleSubmit}>
        <div className="bs-form">
          <div className="form-group" style={{paddingBottom:"0.5rem"}}>
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
          <div className="form-group" style={{paddingBottom:"0.5rem"}}>
            <div className="input-wrapper">
              <CustomTextField
                id="inductionRecord"
                name="inductionRecord"
                label="Induction Record No"
                fullWidth
                type="text"
                value={formikCustomerDetailsForm.values.inductionRecord}
                onChange={handleInductionRecordChange}
                helperText={
                  formikCustomerDetailsForm.touched.inductionRecord &&
                  formikCustomerDetailsForm.errors.inductionRecord
                }
                error={
                  formikCustomerDetailsForm.touched.inductionRecord &&
                  !!formikCustomerDetailsForm.errors.inductionRecord
                }
                onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
              />
            </div>
          </div>
          <div className="form-group" style={{paddingBottom:"1.5rem"}}>
            <div className="input-wrapper">
              <CustomTextField
                id="noofpersonsInducted"
                name="noofpersonsInducted"
                label="No of persons Inducted"
                fullWidth
                type="text"
                value={formikCustomerDetailsForm.values.noofpersonsInducted}
                onChange={handleNoofPersonsInductedChange}
                helperText={
                  formikCustomerDetailsForm.touched.noofpersonsInducted &&
                  formikCustomerDetailsForm.errors.noofpersonsInducted
                }
                error={
                  formikCustomerDetailsForm.touched.noofpersonsInducted &&
                  !!formikCustomerDetailsForm.errors.noofpersonsInducted
                }
                onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
              />
            </div>
          </div>
          <div className="form-group" style={{paddingBottom:"1.5rem"}}>
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
          <div className="form-group" style={{paddingBottom:"1.5rem"}}>
            <div className="input-wrapper">
              <CustomTextField
                id="inductiongivenby"
                name="inductiongivenby"
                label="Induction given by"
                fullWidth
                type="text"
                value={formikCustomerDetailsForm.values.inductiongivenby}
                onChange={handleInductionGivenByChange}
                helperText={
                  formikCustomerDetailsForm.touched.inductiongivenby &&
                  formikCustomerDetailsForm.errors.inductiongivenby
                }
                error={
                  formikCustomerDetailsForm.touched.inductiongivenby &&
                  !!formikCustomerDetailsForm.errors.inductiongivenby
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

export default AddDetails;
