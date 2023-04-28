import React from "react";
import { useAircraftsContext } from "../context/aircrafts_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Aircraft from "./Aircraft";

const FeaturedAircrafts = () => {
  const {
    aircrafts_loading: loading,
    aircrafts_error: error,
    some_aircrafts: selected,
  } = useAircraftsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2> aeronaves destacadas</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {selected.slice(0, 3).map((aircraft) => {
          return <Aircraft key={aircraft.Id_aircraft} {...aircraft} />;
        })}
      </div>
      <Link to="/aircrafts" className="btn">
        aeronaves
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 180px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedAircrafts;
