import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DataTable from "../../components/DataTable";
const UserManagement: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">Product Dashboard</Typography>
        <Typography variant="h6">UserManagement</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" sx={{marginTop:"20px"}}>
        <Typography variant="h6">User UserManagement</Typography>
        <Button variant="contained" endIcon={<AddIcon />}>
          Add User
        </Button>
      </Box>
        <DataTable/>
    </Container>
  );
};

export default UserManagement;
