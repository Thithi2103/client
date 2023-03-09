/** @format */

import {useContext } from "react";
import { CountryContext } from "../../CountryData/CountryContext";
import { Box, Stack, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddForm = () => {
  const { addCountry } = useContext(CountryContext);
 

  const addForm = useFormik({
    initialValues: {
      name: "",
      code: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(0, "Invalid country name")
        .required("You must fill full information"),
      code: Yup.string()
        .min(0, "Invalid country code")
        .required("You must fill full information"),
      description: Yup.string()
        .min(0, "Invalid country description")
        .required("You must fill full information"),
    }),
    onSubmit: (values, {resetForm}) => {
      addCountry(values.name, values.code, values.description)
      resetForm()
    }
    
  });


  // const onInputChange = (e) => {
  //   setNewCountry({ ...newCountry, [e.target.name]: e.target.value });
  // };

  return (
    <Box component="form" maxWidth="400px" onSubmit={addForm.handleSubmit}>
      <Stack spacing={2}>
        <TextField
          type="text"
          placeholder="Name Country"
          name="name"
          value={addForm.values.name}
          onChange={addForm.handleChange}
          error={addForm.touched.name && addForm.errors.name !== undefined}
          helperText={addForm.touched.name && addForm.errors.name}
        />
        <TextField
          type="text"
          placeholder="Code"
          name="code"
          value={addForm.values.code}
          onChange={addForm.handleChange}
          error={addForm.touched.code && addForm.errors.code !== undefined}
          helperText={addForm.touched.code && addForm.errors.code}
        />
        <TextField
          type="text"
          placeholder="Description" 
          name="description"
          value={addForm.values.description}
          onChange={addForm.handleChange}
          error={addForm.touched.description && addForm.errors.description !== undefined}
          helperText={addForm.touched.description && addForm.errors.description}
        />

        <Button
          variant="success"
          type="submit"
          fullWidth
          sx={{ marginTop: 4 }}
        >
          Add New Country
        </Button>
      </Stack>
    </Box>
  );
};

export default AddForm;
