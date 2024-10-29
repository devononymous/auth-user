import React from "react";
import { Box, Typography, Button, Container, Grid, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Card from "../../components/Cards";
const Invoices: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{backgroundColor:"#f6f6f6"}}>
      <Box container display="flex" justifyContent="space-between">
        <Typography variant="h6">Product Dashboard</Typography>
        <Typography variant="h6">Dashboard Invoices</Typography>
      </Box>
      <Box display="flex"   justifyContent="space-between" sx={{marginTop:"20px"}}>
        <Typography variant="h6">Invoices as of 05/07 </Typography>
        <input type="search" name="search" id="search"/>
     <Button variant="contained" endIcon={<AddIcon />}>
         New Invoices
        </Button>
      </Box>
       
       <Grid  container spacing={3} m={4} gap={10}>
        <Card title="Paid Invoices" count={15000} />
        <Card title="Due Invoices" count={15000} />
        <Card title="Total Invoices" count={15000}/>
       </Grid> 
<Paper sx={{mt:10, padding:2, backgroundColor:"#cdcdcd", borderRadius:"10px"}}>
  <Typography  variant="h4" sx={{textAlign:"left"}}>Invoices</Typography> 
  <Box >
<Box display="flex" justifyContent="space-between" mt={4}>
          <Typography sx={{textAlign:"left"}}>ABC12345</Typography> 
          <Typography sx={{textAlign:"right"}}>$23445</Typography> 

</Box>
<Box display="flex" justifyContent="space-between" mt={4}>
          <Typography sx={{textAlign:"left"}}>ABC12345</Typography> 
          <Typography sx={{textAlign:"right"}}>$23445</Typography> 

</Box>
        </Box>     
</Paper>
       
    </Container>
  );
};

export default Invoices;
