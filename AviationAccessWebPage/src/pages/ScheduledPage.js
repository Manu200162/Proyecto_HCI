import React from "react";
import styled from "styled-components";
import { useScheduledContext } from "../context/scheduled_context";
import { Link } from "react-router-dom";
import { ScheduledContent, PageIndex } from "../components";

const ScheduledPage = () => {
  const { cart } = useScheduledContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>No tienes vuelos planificados</h2>
          <Link to="/flights" className="btn">
            planificar vuelos
          </Link>
        </div>
      </Wrapper>
    );
  } else {
  }
  return (
    <main>
      <PageIndex title="reservas" />
      <Wrapper className="page">
        <ScheduledContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default ScheduledPage;
