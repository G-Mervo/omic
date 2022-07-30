import React from 'react';
import ReactDOM from 'react-dom/client';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';

function App(){

    const columns = [
       
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
        },
        {
          field: 'PhoneNumber',
          headerName: 'Phone Number',
          width: 170,
        }
      ];

      const rows = [
        {id:1, lastName: 'Doe', firstName: 'John', PhoneNumber: 254747673874 },
        {id:2, lastName: 'Doe', firstName: 'John', PhoneNumber: 254747673874 },
        {id:3, lastName: 'Doe', firstName: 'John', PhoneNumber: 254747673874 },
        {id:4, lastName: 'Doe', firstName: 'John', PhoneNumber: 254747673874 },
        {id:5, lastName: 'Doe', firstName: 'John', PhoneNumber: 254747673874 },
        {id:6, lastName: 'Doe', firstName: 'John', PhoneNumber: 254747673874 },
        {id:7, lastName: 'Doe', firstName: 'John', PhoneNumber: 254747673874 },
    ];
    
    return (
        <><Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off"
        >
            <div>
                <TextField required id="outlined-required" label="First Name" defaultValue="Omic" />
                <TextField required id="outlined-required" label="Second Name" defaultValue="Rocks" />
                <TextField required id="outlined-required" label="Phone Number" defaultValue="254707094868" />
            </div>
            <Button variant="contained">Add User</Button>
        </Box>
        <Box sx={{ height: 450, width: '80%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[8]}
                     />
            </Box></>
           

  
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);


