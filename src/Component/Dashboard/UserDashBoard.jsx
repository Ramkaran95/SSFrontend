import React, { useState } from 'react'
import './ListPage.css'
import { useLocation } from 'react-router-dom';
import TimePicker from 'react-time-picker';
import NavBar from '../HomePage/NavBar';
import FooterSection from '../HomePage/FooterSection';
import SearchItem from './SearchItem/SearchItem';
import { Row } from 'react-bootstrap';
import PersonalInfo from '../Update/PersonalInfo';
import HomeUI from './SearchItem/HomeUI';
import { useNavigate } from 'react-router-dom';
function UserDashBoard() {
    const navigate = useNavigate();
   
   
  const [valuee,setValuee]=useState(new Date())
  const [value,setValue]=useState('')
 const location = useLocation();
 const data=location.state?.userData;
 console.log(data.firstName);
if (!data.firstName) return<div><h1>UnAuthorized ACCESS ..</h1></div>
 


 const options = [
      {label:"Delhi",value:1},
      {label:"Mumbai",value:2},
      {label:"Bengaluru",value:3},
      {label:"Chennai",value:4},
      {label:"Kolkata",value:5},
      {label:"Hyderabad",value:6},
      {label:"Pune",value:7},
      {label:"Ahmedabad",value:8},
      {label:"Chandigarh",value:9},
      {label:"Jaipur",value:10},
      {label:"Kochi",value:11},
      {label:"Lucknow",value:12},
      {label:"Surat",value:13},
      {label:"Indore",value:14},
      {label:"Ghaziabad",value:15},
      {label:"Noida",value:16},
      {label:"Nagpur",value:17},
      {label:"Bhopal",value:18},
      {label:"Vishakapatnam",value:19},
      {label:"Vadodara",value:20},
      {label:"Mysore",value:21},
      {label:"Patna",value:22},
      {label:"Coimbatore",value:23},
      {label:"Rajkot",value:24},
      {label:"Kanpur",value:25}
  ]
  function handleSelect(event){
      setValue(event.target.value)
  }

  const professionList = [
      {label:"Electrician"},
      {label:"Plumber"},
      {label:"Carpenter"},
      {label:"Painter"},
      {label:"Welder"},
      {label:"Tile Setter"},
      {label:"Locksmith"},
      {label:"Blacksmith"},
      {label:"Driver"},
      {label:"AC Technician"},
      {label:"Roofer"},
      {label:"Handyman"},
      {label:"Plasterer"},
      {label:"Gardener"},
      {label:"Beautrician"},
      {label:"Technician"},
      {label:"Construction Laborer"},
      {label:"Pest Control Technician"},
      {label:"Security Guard"}
      
    ];
       
  

  return (
    <div>
        
   {/* <p>{data.firstName}</p> */}
    {/*SEARCH SECTION*/}
    <div className="containner">
        <Row >
            <HomeUI userData={data}/>
                </Row> 


        {/* <div className="listWrapper">
            <div className="listSearch">
                <h1 className="lsTitle">Search</h1>
                <div className='lsItem'>
                <label>Location</label><br/>
                    <select onChange={handleSelect}>
                        {options.map(option=>(
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    </div>
                  <div className='lsItem'>
                <label >What Service are you looking for?</label><br/>
                    <select  onChange={handleSelect}>
                        {professionList.map(option=>(
                            <option>{option.label}</option>
                        ))}
                    </select>
                    </div>
                    <div className='lsItem'>
                <label >When do you want?</label><br/>
                <TimePicker onChange={setValuee} value={valuee} />  
                <button>Search</button>
            </div>
            
            </div>
              
            </div> */}
         
        <Row >
            <div className="listResult">
                  <SearchItem />
                 
                </div>
                </Row>
    </div>
   
    </div>
)


}
  export default UserDashBoard; 