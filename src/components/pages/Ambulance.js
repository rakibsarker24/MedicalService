import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Navber from "../navber/Navber";
import OurDoctor from "../ourdoctor/OurDoctor";
import SearchAmbulance from "../searchAmbulance/SearchAmbulance";
import PopularAmbulance from "../popularAmbulance/PopularAmbulance";
import { route } from "../../config";

const Ambulance = () => {
  const [ambulances, setAmbulances] = useState([]);
  const [filters, setFilters] = useState({});
  const handelSearch = (data) => {
    setFilters(data);
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
        const response = await route?.get(`ambulances?page=1&${queryParams}`);
        console.log(response, "response");
        setAmbulances(response?.data?.rows);
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
      <SearchAmbulance handelSearch={handelSearch} />
      <PopularAmbulance items={ambulances} />
      <Footer />
    </>
  );
};

export default Ambulance;
