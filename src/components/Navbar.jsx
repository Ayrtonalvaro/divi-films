import React from 'react';
import { NavLink } from 'react-router-dom';

const logo =
  'https://dewey.tailorbrands.com/production/brand_version_mockup_image/380/8062805380_39fd0b33-251b-42ea-91ea-f4fccb8ce9ea.png?cb=1674085265';

const Navbar = () => {
  return (
    <div className="flex justify-around p-5">
      <div>
        <NavLink to="/">
          <img className="w-28" src={logo} />
        </NavLink>
      </div>
      <div className="flex gap-5 ">
        <NavLink to="/">
          <span className="hover:text-orange-600 cursor-pointer duration-100">
            Home
          </span>
        </NavLink>
        <NavLink to="/movies">
          <span className="hover:text-orange-600 cursor-pointer duration-100">
            Movies
          </span>
        </NavLink>
        <NavLink to="/series">
          <span className="hover:text-orange-600 cursor-pointer duration-100">
            Horror
          </span>
        </NavLink>
        <NavLink to="/populars">
          <span className="hover:text-orange-600 cursor-pointer duration-100">
            Documentary
          </span>
        </NavLink>
        <NavLink to="/favs">
          <span className="hover:text-orange-600 cursor-pointer duration-100">
            Favs
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
