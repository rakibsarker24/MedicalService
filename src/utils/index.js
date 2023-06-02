import divisions from "../_data/bd-divisions.json";
import districts from "../_data/bd-districts.json";
import upazilas from "../_data/bd-upazilas.json";
import hospitals from "../_data/hospitals.json";

export const makeSlug = (text) => {
  return text?.toLowerCase()?.split(" ")?.join("-");
};

export const isValidUrl = (str) => {
  const pattern = new RegExp(
    "^([a-zA-Z]+:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return pattern.test(str);
};

export const getAddress = (
  division = null,
  district = null,
  upazila = null
) => {
  const divisionName = divisions?.find((div) => parseInt(div?.id) === parseInt(division))?.name;
  const districtName = districts?.find((dist) => parseInt(dist?.id) === parseInt(district))?.name;
  const upazalaName = upazilas?.find((upa) => parseInt(upa?.id) === parseInt(upazila))?.name;
  return `${upazalaName}, ${districtName}, ${divisionName}`;
};

export const getHospital = (
  hospital = null
) => {
  const hispitalName = hospitals?.find((hos) => parseInt(hos?.id) === parseInt(hospital))?.name;
  return `${hispitalName}`;
};
