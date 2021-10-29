import React, { useState,useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'


const ranking = [


  {
    className: "SE19",
    academicYear: "2019-2020",
    headTeacherName: "Cao Tien Dung",
    week: 4,
    grade: 10 ,

  },

  {
    className: "SE19",
    academicYear: "2019-2020",
    headTeacherName: "Cao Tien Dung",
    grade: 10 ,

  },

  {
    className: "SE20",
    academicYear: "2020-2021",
    headTeacherName: "Cao Tien Dung",
    grade: 9 ,

  },
 

]

function Ranking() {
  const [filteredData,setFilteredData]=useState(ranking)
 const [filter, setFilter]=useState(true)
 const [year,setYear]=useState('all')
  const columns = [
   
   
    { title: "className", field: "className" },
    { title: "academicYear", field: "academicYear" },
    { title: "headTeacherName", field: "headTeacherName" }, 
    { title: "grade", field: "grade" }, 
    
    
  ]
  const handleChange=()=>{
   setFilter(!filter)
  }
  useEffect(()=>{
setFilteredData(year==='all'?ranking:ranking.filter(dt=>dt.year===year))

  },[year])

  return (
    <div className="App">
      
      <h4 align='center'>Ranking By Week</h4>
      
      
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

export default Ranking;
