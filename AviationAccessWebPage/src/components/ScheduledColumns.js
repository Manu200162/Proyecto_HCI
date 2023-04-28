import React from "react";
import styled from "styled-components";

const ScheduledColumns = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5>Aeronave</h5>
        <h5>Origen</h5>
        <h5>Destino</h5>
        <h5>Duración</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`;

export default ScheduledColumns;
