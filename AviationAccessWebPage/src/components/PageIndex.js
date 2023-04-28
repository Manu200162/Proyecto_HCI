import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageIndex = ({ title, flight }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>/
          {flight && <Link to="/flights">Vuelos /</Link>}
          {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-red);
  a {
    color: var(--clr-red-darkest);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-red);
  }
`;

export default PageIndex;
