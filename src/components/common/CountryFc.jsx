/** @format */

import { useContext, useState } from "react";
import { CountryContext } from "../../CountryData/CountryContext";
import TableCell from "@mui/material/TableCell";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import EditForm from "./Edit";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Typography } from "@mui/material";

const CountryFc = ({ country }) => {
  const { deleteCountry } = useContext(CountryContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <>
      <TableCell align="center">{country.name}</TableCell>
      <TableCell align="center">{country.code}</TableCell>
      <TableCell align="center">{country.description}</TableCell>
      <TableCell align="center">
        <Button onClick={handleOpenDelete}>
          <DeleteIcon />
        </Button>

        <Button onClick={handleOpen}>
          <EditIcon />
        </Button>
      </TableCell>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <EditForm theCountry={country} />
        </Box>
      </Modal>

      <Modal open={openDelete} onClose={handleCloseDelete}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Typography paddingRight="12px">Bạn có muốn xóa không?</Typography>
            <Button
              onClick={() => {
                deleteCountry(country.id);
                setOpenDelete(false);
              }}
            >
              Có
            </Button>
            <Button onClick={handleCloseDelete}>Không</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default CountryFc;
