import React, { useState,useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'


const teacherList = [


  {
    id: "11111",
    name: "Cao Tien Dung",

  },

  {
    id: "22222",
    name: "Tran Vu Khanh",

  },
 
  {
    id: "33333",
    name: "Tran Anh Tuan",

  },
 
  {
    id: "44444",
    name: "Tran Hoai Nam",

  },
 
]

function TeacherList() {
  const [filteredData,setFilteredData]=useState(teacherList)
 const [filter, setFilter]=useState(true)
 const [year,setYear]=useState('all')
  const columns = [
   
    { title: "id", field: "id" },
    { title: "name", field: "name" },
 
    
  ]
  const handleChange=()=>{
   setFilter(!filter)
  }
  useEffect(()=>{
setFilteredData(year==='all'?teacherList:teacherList.filter(dt=>dt.year===year))

  },[year])

  return (
    <div className="App">
      
      <h4 align='center'>Teacher List</h4>
      
      
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

export default TeacherList;
