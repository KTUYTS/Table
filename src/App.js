import React, { useState,useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'
const empList = [


  { week: "12", class: "12A1", grade: "80", year: "2019-2020" },
  { week: "10", class: "12A1", grade: "90" , year: "2020-2021"},
  { week: "11", class: "12A1", grade: "100",  year: "2019-2020" },
  { week: "12", class: "10A1", grade: "70",  year: "2020-2021"},
  { week: "10", class: "10A1", grade: "60", year: "2019-2020" },
  { week: "11", class: "10A1", grade: "80", year: "2019-2020" },
  { week: "9", class: "12A1", grade: "96",  year: "2019-2020" },,
  { week: "12", class: "11A1", grade: "50", year: "2019-2020" },
  { week: "10", class: "11A1", grade: "100",  year: "2020-2021" },
  { week: "11", class: "11A1", grade: "90",  year: "2020-2021" },
  { week: "12", class: "10A2", grade: "80", year: "2019-2020" },
  { week: "10", class: "10A2", grade: "75",  year: "2020-2021"},
  { week: "11", class: "10A2", grade: "65",  year: "2020-2021" },
  { week: "9", class: "10A2", grade: "45", year: "2019-2020" },



]

function App() {
  const [filteredData,setFilteredData]=useState(empList)
 const [filter, setFilter]=useState(true)
 const [year,setYear]=useState('all')
  const columns = [
    { title: "Week", field: "week" },
    
    { title: "Class", field: "class" },
    { title: "Grade", field: "grade" },
    
    
    
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
      <h4 align='center'>Ranking Table</h4>
      
      
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
