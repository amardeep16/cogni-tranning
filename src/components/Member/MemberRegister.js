import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import CountryRegion from "./CountryRegion";
import { Link } from "react-router-dom";
import axios from "axios";

export default function MemberRegister() {

  let history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [user, setUser] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
    website: "",
  });

  const { name, username, phone, email, website} = user;

  const onInputChange = e => {
  //  console.log(e.target.value);
    setUser({...user, [ e.target.name ]: e.target.value});
  };

  const onSubmit = async e => {
    console.log("onsubmit called!!!!");
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");


  };

  return (
    <div>
      <form onSubmit={e => onSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">
            Name
          </label>
          <input type="text" className="form-control" name="name" value={name} onChange={e => onInputChange(e)} />
        </div>

        <div className="mb-3">
          <label  className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            name="email"
            onChange={e => onInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <label for="Address" className="form-label">
            Address Line
          </label>
          <input type="text" className="form-control" id="Address" name="website" value={website} onChange={e => onInputChange(e)}/>
        </div>

        <CountryRegion />
        <br />

        <div className="mb-3">
          <label for="dob" className="form-label">
            Date of Birth
          </label>
        
        </div>

        <div className="mb-3">
          <label  className="form-label">
            Pan Number
          </label>
          <input type="text" className="form-control" name="phone" value={phone}  onChange={e => onInputChange(e)}/>
        </div>

        
        <button className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
}
