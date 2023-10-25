import React, { forwardRef } from "react";
import propTypes from "prop-types";
import TextField from "@mui/material/TextField";

const CustomTextField = forwardRef((props, textFieldRef) => {
    const {
        id,
        type,
        name,
        error,
        label,
        value,
        onBlur,
        onFocus,
        onClick,
        onChange,
        disabled,
        minLength,
        maxLength,
        inputMode,
        helperText,
        placeholder,
        textAlignment,
        fieldDecorators,
        InputLabelProps,
        FormHelperTextProps,
        autoComplete = "off",
        upperCase = false,
        fontSize,
        fontWeight,
        ...otherProps
    } = props;

    return (
        <TextField
            id={id}
            fullWidth
            type={type}
            name={name}
            value={value}
            label={label}
            error={error}
            onFocus={onFocus}
            onClick={onClick}
            variant="standard"
            ref={textFieldRef}
            disabled={disabled}
            helperText={helperText}
            placeholder={placeholder}
            autoComplete={autoComplete}
            InputProps={fieldDecorators}
            onBlur={onBlur}
            inputProps={{
                autoCapitalize: upperCase ? "characters" : "words",
                maxLength,
                minLength,
                style: { textAlign: textAlignment, fontSize, fontWeight },
                inputMode: inputMode ?? "text",
            }}
            InputLabelProps={InputLabelProps}
            FormHelperTextProps={FormHelperTextProps}
            onChange={onChange}
            {...otherProps}
        />
    );
});

CustomTextField.propTypes = {
    id: propTypes.string,
    error: propTypes.bool,
    name: propTypes.string,
    onBlur: propTypes.func,
    disabled: propTypes.bool,
    maxLength: propTypes.number,
    minLength: propTypes.number,
    placeholder: propTypes.string,
    textAlignment: propTypes.string,
    fieldDecorators: propTypes.object,
    type: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    helperText: propTypes.oneOfType([propTypes.object, propTypes.string]),
    InputLabelProps: propTypes.object,
    FormHelperTextProps: propTypes.object,
};

export default CustomTextField;
