import React from "react";
import { useAircraftsContext } from "../context/aircrafts_context";
import Error from "./Error";
import Loading from "./Loading";
import ListView2 from "./ListView2";
const AircraftList = () => {
  const {
    aircrafts_loading: loading,
    aircrafts_error: error,
    aircrafts: airplanes,
  } = useAircraftsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return <ListView2 aircrafts={airplanes} />;
};

export default AircraftList;
