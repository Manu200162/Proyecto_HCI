import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useScheduledContext } from "../context/scheduled_context";
import DatePicker from "react-date-picker";

const AddToScheduled = ({ product }) => {
  const { addToCart } = useScheduledContext();
  const { Id_flight } = product;
  const [value, onChange] = useState(new Date());
  //console.log(value);
  return (
    <Wrapper>
      <div className="fecha">
        <span> Fecha : </span>
        <div>
          <DatePicker
            dateFormat="yyyy/MM/dd"
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
      <div className="btn-container">
        <Link
          to="/scheduled"
          className="btn"
          onClick={() =>
            addToCart(Id_flight, value.toLocaleDateString(), product)
          }
        >
          Añadir a reservas
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .fecha {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToScheduled;
