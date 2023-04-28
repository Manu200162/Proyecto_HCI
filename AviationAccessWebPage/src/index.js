import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FlightsProvider } from "./context/flights_context";
import { FilterProvider } from "./context/filter_context";
import { ScheduledProvider } from "./context/scheduled_context";
import { UserProvider } from "./context/user_context";
import { AircraftsProvider } from "./context/aircrafts_context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev-58ytoau3.us.auth0.com
//ctenEYcqMFTPTufj9FJrdMhqavVGLmcF

ReactDOM.render(
  <Auth0Provider
    domain="dev-58ytoau3.us.auth0.com"
    clientId="ctenEYcqMFTPTufj9FJrdMhqavVGLmcF"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <FlightsProvider>
        <AircraftsProvider>
          <FilterProvider>
            <ScheduledProvider>
              <App />
            </ScheduledProvider>
          </FilterProvider>
        </AircraftsProvider>
      </FlightsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
