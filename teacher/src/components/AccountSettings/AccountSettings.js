import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavbarSetiings } from "./NavbarSetiings";
import { ProfileInformation } from "./ProfileInformation";
import Security  from "./Security";
import { Settings } from "./Settings";
import { Notification } from "./Notification";
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
              <div class="card-body tab-content">
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
