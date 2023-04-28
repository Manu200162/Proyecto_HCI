import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useAircraftsContext } from "../context/aircrafts_context";
import { single_aircraft_url as url } from "../utils/constants";
import { Loading, Error, FlightImage, PageIndex2 } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleAircraftPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_aircraft_loading: loading,
    single_aircraft_error: error,
    single_aircraft: aircraft,
    fetchSingleAircraft,
  } = useAircraftsContext();
  useEffect(() => {
    fetchSingleAircraft(`${url}${id}`);
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
  const { Imagen_url, Descripcion, Fabricante, Modelo } = aircraft;
  return (
    <Wrapper>
      <PageIndex2 title={Modelo} aircraft />
      <div className="section section-center page">
        <Link to="/aircrafts" className="btn">
          Volver a las aeronaves
        </Link>
        <div className="product-center">
          <FlightImage image={Imagen_url} />
          <section className="content">
            <h2>{Modelo}</h2>
            <p className="info">
              <span>Fabricante : </span>
              {Fabricante}
            </p>
            <p className="info">
              <span>Descripcion: </span>
            </p>
            <h5>{Descripcion}</h5>
            <hr />
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
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  h5 {
    text-transform: none;
    text-align: justify;
    color: var(--clr-grey-11);
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

export default SingleAircraftPage;
