import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import CustomTextField from "../common/CustomTextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

function AddTraineeTBT() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dob, setDOB] = useState("");

  const formikCustomerDetailsForm = useFormik({
    initialValues: {
      person: "",
      company: "",
      age: "",
      designation: ""
    },
    onSubmit: async (values) => {
      try {
        console.log(",,............")
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

  function handlePersonChange(event) {
    formikCustomerDetailsForm.setFieldValue("person", event.target.value);
  }

  function handleCompanyChange(event) {
    formikCustomerDetailsForm.setFieldValue("company", event.target.value);
  }

  function handleAgeChange(event) {
    formikCustomerDetailsForm.setFieldValue("age", event.target.value);
  }

  function handleDesignationChange(event) {
    formikCustomerDetailsForm.setFieldValue("designation", event.target.value);
  }

  return (
    <div className="paper-trainee">
      <h3>Add Trainee</h3>
    <form onSubmit={formikCustomerDetailsForm.handleSubmit}>
      <div className="bs-form">
        <div className="form-group" style={{paddingBottom:"0.5rem"}}>
          <div className="input-wrapper">
            <CustomTextField
              type="text"
              id="person"
              name="person"
              label="Name of the Person"
              fullWidth
              onChange={handlePersonChange}
              value={formikCustomerDetailsForm.values.person}
              helperText={
                formikCustomerDetailsForm.touched.person &&
                formikCustomerDetailsForm.errors.person
              }
              error={
                formikCustomerDetailsForm.touched.person &&
                !!formikCustomerDetailsForm.errors.person
              }
              onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
            />
          </div>
        </div>
        <div className="form-group" style={{paddingBottom:"0.5rem"}}>
          <div className="input-wrapper">
            <CustomTextField
              id="company"
              name="company"
              label="Company"
              fullWidth
              type="text"
              value={formikCustomerDetailsForm.values.company}
              onChange={handleCompanyChange}
              helperText={
                formikCustomerDetailsForm.touched.company &&
                formikCustomerDetailsForm.errors.company
              }
              error={
                formikCustomerDetailsForm.touched.company &&
                !!formikCustomerDetailsForm.errors.company
              }
              onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
            />
          </div>
        </div>
        <div className="form-group" style={{paddingBottom:"1.5rem"}}>
          <div className="input-wrapper">
            <CustomTextField
              id="age"
              name="age"
              label="Age"
              fullWidth
              type="text"
              value={formikCustomerDetailsForm.values.age}
              onChange={handleAgeChange}
              helperText={
                formikCustomerDetailsForm.touched.age &&
                formikCustomerDetailsForm.errors.age
              }
              error={
                formikCustomerDetailsForm.touched.age &&
                !!formikCustomerDetailsForm.errors.age
              }
              onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
            />
          </div>
        </div>
        <div className="form-group" style={{paddingBottom:"1.5rem"}}>
          <div className="input-wrapper">
            <CustomTextField
              id="designation"
              name="designation"
              label="Designation"
              fullWidth
              type="text"
              value={formikCustomerDetailsForm.values.designation}
              onChange={handleDesignationChange}
              helperText={
                formikCustomerDetailsForm.touched.designation &&
                formikCustomerDetailsForm.errors.designation
              }
              error={
                formikCustomerDetailsForm.touched.designation &&
                !!formikCustomerDetailsForm.errors.designation
              }
              onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
            />
          </div>
        </div>
        {/* <div className="form-group" style={{paddingBottom:"1.5rem"}}>
          <div className="input-wrapper">
            <CustomTextField
              id="signature"
              name="signature"
              label="Signature"
              fullWidth
              type="text"
              value={formikCustomerDetailsForm.values.age}
              onChange={handleAgeChange}
              helperText={
                formikCustomerDetailsForm.touched.age &&
                formikCustomerDetailsForm.errors.age
              }
              error={
                formikCustomerDetailsForm.touched.age &&
                !!formikCustomerDetailsForm.errors.age
              }
              onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
            />
          </div>
        </div> */}
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

export default AddTraineeTBT;
