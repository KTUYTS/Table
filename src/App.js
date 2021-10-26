import React, { useState,useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'
const empList = [


  {fullname: "Nguyen Van Cong", sbTeach: "Math", phoneNo: "0123456789",  email: "NguyenVanCong@gmail.com", year: "2019-2020" },
  {fullname: "Le Thi Luyen", sbTeach: "Lit", phoneNo: "012xxxxxxx",  email: "LeThiLuyen@gmail.com" , year: "2019-2020"},
  {fullname: "Le Thi Kim Dung", sbTeach: "Chem", phoneNo: "012yyyyyy",  email: "LeThiKimDung@gmail.com", year: "2019-2020" },
  
  {fullname: "Nguyen Van Cong", sbTeach: "Math", phoneNo: "0123456789",  email: "NguyenVanCong@gmail.com", year: "2020-2021" },
  {fullname: "Le Thi Luyen", sbTeach: "Lit", phoneNo: "012xxxxxxx",  email: "LeThiLuyen@gmail.com" , year: "2020-2021"},
  {fullname: "Le Thi Kim Dung", sbTeach: "Chem", phoneNo: "012yyyyyy",  email: "LeThiKimDung@gmail.com", year: "2020-2021" },
  {fullname: "Le Quoc Cuong", sbTeach: "Edu", phoneNo: "012yzzzzzy",  email: "LeQuocCuong@gmail.com", year: "2020-2021" },
  {fullname: "Pham Toan Thang", sbTeach: "Edu", phoneNo: "012ygggggy",  email: "PhamToanThang@gmail.com", year: "2020-2021" },


  

  
  

]

function App() {
  const [filteredData,setFilteredData]=useState(empList)
 const [filter, setFilter]=useState(true)
 const [year,setYear]=useState('all')
  const columns = [
    {title: "Full Name", field: "fullname"},
    {title: "Subject Teching", field: "sbTeach"},

    {title: "Phone Number", field: "phoneNo"},
   
    { title: "Email", field: "email" },
    
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

export default App;
