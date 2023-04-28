import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ListView2 = ({ aircrafts }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {aircrafts.map((aircraft) => {
          const { Id_aircraft, Modelo, Fabricante, Imagen_url } = aircraft;
          return (
            <article key={Id_aircraft}>
              <img src={Imagen_url} alt={Fabricante} />
              <div>
                <h4>{Modelo}</h4>
                <h5>{Fabricante}</h5>
                <Link to={`/aircrafts/${Id_aircraft}`} className="btn">
                  Detalles
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    height: 175px;
    width: 330px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
`;

export default ListView2;
