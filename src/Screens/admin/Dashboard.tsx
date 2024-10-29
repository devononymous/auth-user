import React from "react";
import { Box, Typography, Grid,Button } from "@mui/material";
import Card from "../../components/Cards"; 
import { PieChart, LineChart } from "@mui/x-charts";
import GetAppIcon from '@mui/icons-material/GetApp';
import UserManagement from "./UserManagement";
const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={3} maxWidth="md" gap={10} >
     
     
      <Grid item xs={12} sm={3} md={4} >
        <Typography variant="h5"> User Distribution</Typography>
        <PieChart
         
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={250}
          height={250}
        />
      </Grid>
      <Grid item xs={12} md={4} sm={3} mt={10}>
        <Card title="Today's Sale" count={15000} />
      </Grid>
      <Grid item xs={12} md={4} sm={3} mt={10}>
        <Card title="Total Customers" count={45}  />
      </Grid>

      <Grid item xs={12} md={4} sm={3}>   
        <Box sx={{display:"flex", justifyContent:"space-between"}}>

        <Typography>Sales Report</Typography>
<Button variant="contained" endIcon={<GetAppIcon />}>
  PDF
</Button>
        </Box>
           <LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
  ]}
  width={600}
  height={300}
  
/>
</Grid>
<UserManagement/>
    </Grid>
  );
};

export default Dashboard;
