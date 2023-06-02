import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Navber from "../navber/Navber";
import OurDoctor from "../ourdoctor/OurDoctor";
import SearchAmbulance from "../searchAmbulance/SearchAmbulance";
import PopularAmbulance from "../popularAmbulance/PopularAmbulance";
import { route } from "../../config";

const Ambulance = () => {
  const [ambulances, setAmbulances] = useState([]);
  const [populerAmbulances, setPopulerAmbulances] = useState([]);
  const handelSearch = async (data) => {
    let queryParams = new URLSearchParams();

    if (Object.keys(data)?.length) {
      Object.keys(data).forEach((filter) => {
        if (data[filter] !== "") {
          queryParams.append(filter, data[filter]);
        }
      });
    }

    try {
      const response = await route?.get(`ambulances?page=1&${queryParams}`);
      console.log(response, "response");
      setAmbulances(response?.data?.rows);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    async function fetchPopulerData() {
      try {
        const response = await route?.get(`ambulances/populer/list?page=1`);
        console.log(response, "responseasd asdf dsf");
        setPopulerAmbulances(response?.data?.rows);
      } catch (error) {
        console.log(error, "error");
      }
    }

    fetchPopulerData();
  }, []);

  return (
    <>
      {/* <NavTop/> */}
      <Navber />
      <SearchAmbulance handelSearch={handelSearch} items={ambulances} />
      <PopularAmbulance items={populerAmbulances} />
      <Footer />
    </>
  );
};

export default Ambulance;
