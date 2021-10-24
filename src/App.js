import React, { useState,useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'
const empList = [


  { date: "12/12/2021", sb_name: "Math", block: '2', teacher: "Nguyen Van A", year: 2019-2020 },
  { date: "02/12/2020", sb_name: "Math", block: '3', teacher: "Nguyen Van A", year: 2020-2021 },
  { date: "22/12/2021", sb_name: "Math", block: '4', teacher: "Nguyen Van A", year: 2021-2022 },
  { date: "12/12/2020", sb_name: "Math", block: '5', teacher: "Nguyen Van A", year: 2020-2021 },
  { date: "22/12/2022", sb_name: "Math", block: '5', teacher: "Nguyen Van A", year: 2021-2022 },
  { date: "12/12/2021", sb_name: "Math", block: '2', teacher: "Nguyen Van B", year: 2019-2020 },
  { date: "02/12/2020", sb_name: "Math", block: '3', teacher: "Nguyen Van C", year: 2020-2021 },
  { date: "22/12/2021", sb_name: "Math", block: '4', teacher: "Nguyen Van E", year: 2021-2022 },
  { date: "12/12/2020", sb_name: "Math", block: '5', teacher: "Nguyen Van F", year: 2020-2021 },
  { date: "22/12/2022", sb_name: "Math", block: '5', teacher: "Nguyen Van G", year: 2021-2022 },


]

function App() {
  const [filteredData,setFilteredData]=useState(empList)
 const [filter, setFilter]=useState(true)
 const [year,setYear]=useState('all')
  const columns = [
    { title: "Date", field: "date" },
    { title: "Subject Name", field: "sb_name" },
    { title: "Block", field: "block" },
    { title: "Teacher", field: 'teacher' },
    
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
      <h4 align='center'>Student Time Table</h4>
      
      
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
            <MenuItem value={2019-2020}>2019-2020</MenuItem>
            <MenuItem value={2020-2021}>2020-2021</MenuItem>
            <MenuItem value={2021-2022}>2021-2022</MenuItem>
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
