import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFlightsContext } from "../context/flights_context";
import { single_flight_url as url } from "../utils/constants";
import {
  Loading,
  Error,
  FlightImage,
  AddToScheduled,
  PageIndex,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleFlightPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_flight_loading: loading,
    single_flight_error: error,
    single_flight: flight,
    fetchSingleProduct,
  } = useFlightsContext();
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  //console.log(product);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const {
    Aerolinea,
    Destino,
    Nacional,
    Tiempo_vuelo,
    Paises,
    Img_vuelo,
    Origen,
    Nombre,
    Aeronave,
  } = flight;
  return (
    <Wrapper>
      <PageIndex title={Nombre} flight />
      <div className="section section-center page">
        <Link to="/flights" className="btn">
          Volver a la pagina de vuelos
        </Link>
        <div className="product-center">
          <FlightImage image={Img_vuelo} />
          <section className="content">
            <h2>{Nombre}</h2>
            <p className="info">
              <span>Origen : </span>
              {Origen}
            </p>
            <p className="info">
              <span>Destino : </span>
              {Destino}
            </p>
            <p className="info">
              <span>Aeronave : </span>
              {Aeronave}
            </p>
            <p className="info">
              <span>Duración : </span>
              {Tiempo_vuelo}
            </p>
            <p className="info">
              <span>Aerolinea : </span>
              {Aerolinea}
            </p>
            <p className="info">
              <span>Internacional : </span>
              {Nacional === 0 ? "Si" : "No"}
            </p>
            <p className="info">
              <span>Paises : </span>
              {Paises}
            </p>
            <hr />
            <AddToScheduled product={flight} />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleFlightPage;
