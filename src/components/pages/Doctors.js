import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import NavTop from "../navTop/NavTop";
import Navber from "../navber/Navber";
import OurDoctor from "../ourdoctor/OurDoctor";
import SearchDoctor from "./../searchDoctor/SearchDoctor";
import { route } from "../../config";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({});
  const handelSearch = (data) => {
    setFilters(data);
    // console.log(data, "search");
  };

  useEffect(() => {
    let queryParams = new URLSearchParams();

    if (Object.keys(filters)?.length) {
      Object.keys(filters).forEach((filter) => {
        if (filters[filter] !== "") {
          queryParams.append(filter, filters[filter]);
        }
      });
    }
    async function fetchData() {
      try {
        const response = await route?.get(`doctors?page=1&${queryParams}`);
        console.log(response, "response");
        setDoctors(response?.data?.rows);
      } catch (error) {
        console.log(error, "error");
      }
    }
    fetchData();
  }, [filters]);

  return (
    <>
      {/* <NavTop/> */}
      <Navber />
      <SearchDoctor handelSearch={handelSearch} />
      <OurDoctor items={doctors} />
      <Footer />
    </>
  );
};

export default Doctors;
