import React from "react";
import { Link } from "react-router-dom";
import "./AccountSettings.css";

export const NavbarSetiings = () => {
  return (
    <div>
      <nav className="nav flex-column nav-pills nav-gap-y-1">
        <Link
          to="/profile/settings/security"
          //   data-toggle="tab"
          className="nav-item nav-link has-icon nav-link-faded"
        >
          <i class="fas fa-shield-alt"></i>
          <span className="ml-3">Security Settings</span>
        </Link>
      </nav>
    </div>
  );
};
