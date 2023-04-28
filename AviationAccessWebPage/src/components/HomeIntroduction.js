import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import air1 from "../assets/airplane-1.jpg";
import air2 from "../assets/airplane-2.jpg";

const HomeIntroduction = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          planea tus <br />
          proximos vuelos
        </h1>
        <p>
          Un portal sencillo que te permitirá tener organizados todos tus vuelos
          próximos con información relevante de cada aeronave.
        </p>
        <Link to="/flights" className="btn hero-btn">
          busca ahora
        </Link>
      </article>
      <article className="img-container">
        <img src={air1} alt="airplane 1" className="main-img" />
        <img src={air2} alt="airplane 2" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
      text-align: justify;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 500px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 200px;
      width: 300px;
      transform: translateX(-30%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-10);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default HomeIntroduction;
