import React, { useState,useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'
const empList = [


  {  className: "SE19", week: "2", day: 'Monday', time: "10:30:00", grade: 90, comment: "Not bad", note: "none", courseName: "Introduction to Database", lessonName: "Design Database", teacherName: "Cao Tiến Dũng", year: "2020-2021" },
  {  className: "SBE20", week: "3", day: 'Tuesday', time: "08:30:00", grade: 80, comment: "Not bad", note: "none", courseName: "ABC", lessonName: "abc123", teacherName: "Dr Fr", year: "2019-2020" },
  {  className: "SHL18", week: "2", day: 'Wed', time: "14:30:00", grade: 20, comment: "Not bad", note: "none", courseName: "cde", lessonName: "cde456", teacherName: "Dr Th", year: "2021-2022" },
  

  


]

function LogBook() {
  const [filteredData,setFilteredData]=useState(empList)
 const [filter, setFilter]=useState(true)
 const [year,setYear]=useState('all')
  const columns = [
    { title: "ClassName", field: "className" },
    { title: "Week", field: "week" },
    { title: "Day", field: "day" },
    { title: "Time", field: "time" }, 
    { title: "Grade", field: 'grade' },
    { title: "Comment", field: 'comment' },
    { title: "Note", field: "note" },
    { title: "CourseName", field: "courseName" },
    { title: "LessonName", field: "lessonName" },
    { title: "TeacherName", field: 'teacherName' },
    
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
      <h4 align='center'>Logbook Information</h4>
      
      
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

export default ;
