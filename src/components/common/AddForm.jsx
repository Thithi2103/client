/** @format */

import { useState, useContext } from "react";
import { CountryContext } from "../../CountryData/CountryContext";
import { Box, Stack, TextField } from "@mui/material";
import { Button } from "@mui/material";

const AddForm = () => {
  const { addCountry } = useContext(CountryContext);
  const [newCountry, setNewCountry] = useState({
    name: "",
    code: "",
    description: "",
  });

  const onInputChange = (e) => {
    setNewCountry({ ...newCountry, [e.target.name]: e.target.value });
  };

  const { name, code, description } = newCountry;

  const handleSubmit = (e) => {
    e.preventDefault();
    addCountry(name, code, description);
  };
  return (
    <Box component="form" maxWidth="400px" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          type="text"
          placeholder="Name Country"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
        />
        <TextField
          type="text"
          placeholder="Code"
          name="code"
          value={code}
          onChange={(e) => onInputChange(e)}
        />
        <TextField
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e) => onInputChange(e)}
        />

        <Button variant="success" type="submit" block="true" fullWidth sx={{ marginTop: 4 }}>
          Add New Country
        </Button>
      </Stack>
    </Box>
  );
};

export default AddForm;
