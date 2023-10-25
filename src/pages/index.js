import { useRouter } from "next/router";
import React, { useState, useContext,useRef } from "react";
import { useFormik } from "formik";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import InputAdornment from "@mui/material/InputAdornment";
import CustomTextField from "../../components/common/CustomTextField";
import artsonLogo from "../../assets/images/artson-image.png";

const Signin = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [suffixAdded, setSuffixAdded] = useState(false);
  const inputRef = useRef(null);

  const formikCustomerDetailsForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        router.push("/dashboard")
      } catch (error) {
        setLoading(false);
        setError("Something went wrong. please try again later.");
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      }
      if (!values.password) {
        errors.password = "Enter your password";
      }
      if (values.password && values.password < 8) {
        errors.password = "Password must contain at least 8 characters";
      }
      return errors;
    },
  });

  function EmailChange(event) {
    const { value } = event.target;
    if(value.length == 0)
    {
      setSuffixAdded(false);
    }
  
    // Check if the entered value is a complete email address
    if (value.length == 1 && !suffixAdded) {
      const emailWithSuffix = value + "@artson.com";
      setSuffixAdded(true);
      formikCustomerDetailsForm.setFieldValue("email", emailWithSuffix);
  
      // Check if inputRef.current is defined before calling setSelectionRange
      if (inputRef.current) {
        const cursorPosition = value.length; // Position before the suffix
        setTimeout(() => {
          inputRef.current.setSelectionRange(1, cursorPosition);
          inputRef.current.focus();
        }, 0);
      }
    } else {
      formikCustomerDetailsForm.setFieldValue("email", value);
    }
  }

  function PasswdChange(event) {
    formikCustomerDetailsForm.setFieldValue("password", event.target.value);
  }

  return (
    <div className="integratedportal-container">
      <div className="header">
      <img alt="Kotak Logo" className="logo-size" src={artsonLogo.src} />
      </div>
      <div className="container">
        <div className="form-container">
          {error ? (
            <Alert severity="error" sx={{ mb: 4 }} style={{ width: "25.5rem", marginLeft: "3rem" }}>
              {error}
            </Alert>
          ) : (
            ""
          )}
          <div className="paper">
            <form onSubmit={formikCustomerDetailsForm.handleSubmit}>
              <div className="bs-form">
                <div className="form-group">
                  <div className="input-wrapper">
                    <CustomTextField
                      type="text"
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      onChange={EmailChange}
                      value={formikCustomerDetailsForm.values.email}
                      helperText={formikCustomerDetailsForm.touched.email && formikCustomerDetailsForm.errors.email}
                      error={formikCustomerDetailsForm.touched.email && !!formikCustomerDetailsForm.errors.email}
                      onBlur={(e) => formikCustomerDetailsForm.handleBlur(e)}
                      inputRef={inputRef}
                      InputProps={{
                        endAdornment: !suffixAdded && (
                          <InputAdornment
                            disableTypography
                            position="end"
                            sx={{
                              fontSize: "1.5rem",
                              fontWeight: "500",
                              lineHeight: "1.4rem",
                              textTransform: "initial",
                              color: "lightgray",
                              padding: "4px",
                            }}
                          >
                            @artson.com
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-wrapper">
                    <CustomTextField
                      id="password"
                      name="password"
                      label="Password"
                      fullWidth
                      type="password"
                      value={formikCustomerDetailsForm.values.password}
                      onChange={PasswdChange}
                      helperText={
                        formikCustomerDetailsForm.touched.password && formikCustomerDetailsForm.errors.password
                      }
                      error={formikCustomerDetailsForm.touched.password && !!formikCustomerDetailsForm.errors.password}
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
                    className="login-button"
                    endIcon={<></>}
                  >
                    Login
                  </LoadingButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
