// import React from 'react'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
const data=[{"name":"Arya","Email":"arya@gmail.com","Phone":"123452"},
    {"name":"Arya","Email":"arya@gmail.com","Phone":"123452"},{"name":"Arya","Email":"arya@gmail.com","Phone":"123452"}
];
const Home = () => {
  return (
    <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone Number</TableCell>

            </TableRow>
        </TableHead>
        <TableBody>
           {data.map((item)=>(
            <TableRow key={item.name}>
            <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.Email}</TableCell>
                <TableCell align="center">{item.Phone}</TableCell>
            </TableRow>
           ))}
        </TableBody>
        </Table>
    </TableContainer>
  )
}

export default Home