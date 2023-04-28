import React from "react";
import styled from "styled-components";
import { AircraftList, PageIndex } from "../components";

const AircraftPage = () => {
  return (
    <main>
      <PageIndex title="Aeronaves" />
      <Wrapper className="page section section-center">
        <div className="section-center aircrafts">
          <div>
            <AircraftList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .aircrafts {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .aircrafts {
      grid-template-columns: 200px 1fr;
    }
  }
`;
export default AircraftPage;
