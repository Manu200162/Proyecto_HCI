import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/helpers";

const Filters = () => {
  const {
    filters: { text, categoria, aerolinea, pais },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "Nacional");
  const airlines = getUniqueValues(all_products, "Aerolinea");
  const countries = getUniqueValues(all_products, "Paises");

  //console.log(categories);
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input*/}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="búsqueda"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search input */}
          {/* categories */}
          <div className="form-control">
            <h5> categoria</h5>
            <div>
              {categories.map((v, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="categoria"
                    type="button"
                    className={`${categoria === v ? "active" : null}`}
                  >
                    {`${
                      v === "1" ? "nacional" : v === "0" ? "internacional" : v
                    }`}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* aerolineas*/}
          <div className="form-control">
            <h5>Aerolíneas</h5>
            <select
              name="aerolinea"
              value={aerolinea}
              onChange={updateFilters}
              className="country"
            >
              {airlines.map((v, index) => {
                return (
                  <option key={index} value={v}>
                    {v}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of aerolineas */}
          {/* countries*/}
          <div className="form-control">
            <h5>Paises</h5>
            <select
              name="pais"
              value={pais}
              onChange={updateFilters}
              className="country"
            >
              {countries.map((v, index) => {
                return (
                  <option key={index} value={v}>
                    {v}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of countries */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          eliminar filtros
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .country {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
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
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
