import React, { useState,useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'
const empList = [


  { class: "12A1", block: "1", week: "2", time: "08:00 - 09:00", monday: "Math", tuesday: "Lit", wednesday: "Chem", thursday: "Infor", friday: "edu", saturday: "none", year: "2020-2021" },
  { class: "11A1", block: "1", week: "2", time: "08:00 - 09:00", monday: "Math", tuesday: "Lit", wednesday: "Chem", thursday: "Infor", friday: "edu", saturday: "none", year: "2019-2020" },
  { class: "10A1", block: "1", week: "2", time: "08:00 - 09:00", monday: "Math", tuesday: "Lit", wednesday: "Chem", thursday: "Infor", friday: "edu", saturday: "none", year: "2021-2022" },
  


]

function App() {
  const [filteredData,setFilteredData]=useState(empList)
 const [filter, setFilter]=useState(true)
 const [year,setYear]=useState('all')
  const columns = [
    { title: "Class", field: "class" },
    { title: "Block", field: "block" },
    { title: "Time", field: "time" },
    { title: "Monday", field: "monday" },
    { title: "Tuesday", field: "tuesday" }, 
    { title: "Wednesday", field: 'wednesday' },
    { title: "Thursday", field: 'thursday' },
    { title: "Friday", field: "friday" },
    { title: "Saturday", field: "saturday" },
    
  ]
  const handleChange=()=>{
   setFilter(!filter)
  }
  useEffect(()=>{
setFilteredData(year==='all'?empList:empList.filter(dt=>dt.year===year))

  },[year])

  return (
    <div className="App">
      <h1 align="center"></h1>
      <h4 align='center'>Time Table Full School</h4>
      
      
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

export default App;
