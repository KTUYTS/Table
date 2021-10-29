import React, { useState,useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'


const students = [


  {
    username: "vuchau.190200@LA0102",
    role: 3,
    name: "Chau Hoai Vu",
    address: "DH - LA",
    phoneNumber: "12345678" ,
    email: "vuchau@gmail.com",
    dob: null,
    schoolName: null,
    className: "12A2",
    headTeacherName: "Cao Tien Dung",
  },
 

]

function ALL_Students() {
  const [filteredData,setFilteredData]=useState(students)
 const [filter, setFilter]=useState(true)
 const [year,setYear]=useState('all')
  const columns = [
   
    { title: "username", field: "username" },
    { title: "role", field: "role" },
    { title: "name", field: "name" },
    { title: "address", field: "address" }, 
    { title: "phoneNumber", field: "phoneNumber" },
    { title: "email", field: "email" },
    { title: "dob", field: "dob" },
    { title: "schoolName", field: "schoolName" }, 
    { title: "className", field: "className" },
    { title: "headTeacherName", field: "headTeacherName" }, 
    
    
  ]
  const handleChange=()=>{
   setFilter(!filter)
  }
  useEffect(()=>{
setFilteredData(year==='all'?students:students.filter(dt=>dt.year===year))

  },[year])

  return (
    <div className="App">
      
      <h4 align='center'>Student Information</h4>
      
      
      <MaterialTable
        title="Data"
        data={filteredData}
        columns={columns}
        options={{
          filtering:filter
        }}
        actions={[
          {
            icon:()=><Checkbox
            checked={filter}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />,
          tooltip:"Hide/Show Filter option",
          isFreeAction:true
          },
          {
            icon:()=><Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            style={{width:100}}
            value={year}
            onChange={(e)=>setYear(e.target.value)}
          >
             <MenuItem value={"all"}><em>All</em></MenuItem>
            <MenuItem value={"2019-2020"}>2019-2020</MenuItem>
            <MenuItem value={"2020-2021"}>2020-2021</MenuItem>
            <MenuItem value={"2021-2022"}>2021-2022</MenuItem>
          </Select>,
          tooltip:"Filter Year",
          isFreeAction:true

          
          },


  


  
          
          
        ]}
      />
    </div>
  );
}

export default ALL_Students;
