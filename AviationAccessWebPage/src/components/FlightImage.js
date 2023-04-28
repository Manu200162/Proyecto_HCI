import React, { useState } from "react";
import styled from "styled-components";

const FlightImage = (image) => {
  // eslint-disable-next-line
  const [main, setMain] = useState(image);

  //console.log(main);
  return (
    <Wrapper>
      <img src={main.image} alt="main" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 85%;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default FlightImage;
