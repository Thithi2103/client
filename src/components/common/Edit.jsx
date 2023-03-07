/** @format */

import { CountryContext } from "../../CountryData/CountryContext";
import { useContext, useState } from "react";
import { Box, Stack, TextField } from "@mui/material";
import { Button } from "@mui/material";

const EditForm = ({ theCountry }) => {
  const id = theCountry.id;

  const [name, setName] = useState(theCountry.name);
  const [code, setCode] = useState(theCountry.code);
  const [description, setDescription] = useState(theCountry.description);

  const { updateCountry } = useContext(CountryContext);

  const updatedCountry = { id, name, code, description };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCountry(id, updatedCountry);
  };

  return (
    <Box component="form" maxWidth="400px" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          type="text"
          placeholder="Name Country"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          type="text"
          placeholder="Code"
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <TextField
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button type="submit" variant="success" fullWidth sx={{ marginTop: 4 }}>
          uppdate Country
        </Button>
      </Stack>
    </Box>
  );
};

export default EditForm;
