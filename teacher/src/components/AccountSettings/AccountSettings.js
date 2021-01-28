import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavbarSetiings } from "./NavbarSetiings";
import Security from "./Security";
import "./AccountSettings.css";

export const AccountSettings = () => {
  return (
    <div class="container">
      <BrowserRouter>
        <div class="row gutters-sm">
          <div class="col-md-4 d-none d-md-block">
            <div class="card">
              <div class="card-body">
                {/* navbar settings */}
                <NavbarSetiings />
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card">
              <div class="card-body tab-content form-settings">
                <Switch>
                  <Route path="/profile/settings" component={Security} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
