import React, { useState,useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'


const timeTable = [


  {
    fromWeek: 1,
    toWeek: -1,
    weekDay: 1,
    time: "10:30",
  },
  {
    fromWeek: 1,
    toWeek: -1,
    weekDay: 2,
    time: "8:30",
  },
  {
    fromWeek: 1,
    toWeek: -1,
    weekDay: 2,
    time: "9:30",
  },
  {
    fromWeek: 1,
    toWeek: -1,
    weekDay: 4,
    time: "7:30",
  },

]

function TimeTable() {
  const [filteredData,setFilteredData]=useState(timeTable)
 const [filter, setFilter]=useState(true)
 const [year,setYear]=useState('all')
  const columns = [
   
    { title: "fromWeek", field: "fromWeek" },
    { title: "toWeek", field: "toWeek" },
    { title: "weekDay", field: "weekDay" },
    { title: "time", field: "time" }, 
    
  ]
  const handleChange=()=>{
   setFilter(!filter)
  }
  useEffect(()=>{
setFilteredData(year==='all'?timeTable:timeTable.filter(dt=>dt.year===year))

  },[year])

  return (
    <div className="App">
      <h1 align="center"></h1>
      <h4 align='center'>Time Table</h4>
      
      
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

export default TimeTable;
