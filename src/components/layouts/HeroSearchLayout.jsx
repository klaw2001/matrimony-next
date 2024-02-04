"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const HeroSearchLayout = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    setUser(userName);
  }, []);
    const router = useRouter()
    const handleClick = (e) =>{
        e.preventDefault()
        router.push('/all-profiles')
    }
   return (
    <form>
      <ul>
        <li className="sr-look">
          <div className="form-group">
            <label>I am looking for</label>
            <select className="chosen-select">
              <option value="">I am looking for</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
          </div>
        </li>
        <li className="sr-age">
          <div className="form-group">
            <label>Age</label>
            <select className="chosen-select">
              <option value="">Age</option>
              <option value="">18 to 30</option>
              <option value="">31 to 40</option>
              <option value="">41 to 50</option>
              <option value="">51 to 60</option>
              <option value="">61 to 70</option>
              <option value="">71 to 80</option>
              <option value="">81 to 90</option>
              <option value="">91 to 100</option>
            </select>
          </div>
        </li>
        <li className="sr-reli">
          <div className="form-group">
            <label>Religion</label>
            <select className="chosen-select">
              <option>Religion</option>
              <option>Any</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Jain</option>
              <option>Christian</option>
              <option>Buddhist</option>
            </select>
          </div>
        </li>
        <li className="sr-cit">
          <div className="form-group">
            <label>City</label>
            <select className="chosen-select">
              <option>Location</option>
              <option>Any location</option>
              <option>Chennai</option>
              <option>New york</option>
              <option>Perth</option>
              <option>London</option>
            </select>
          </div>
        </li>
        <li className="sr-btn text-white">
          <input type="submit" value="Search" onClick={(e)=>handleClick(e)} className="text-white" />
        </li>
      </ul>
    </form>
   
  );
};

export default HeroSearchLayout;
