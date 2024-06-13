import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { navData } from "../utils/data";

const Nav = () => {
  return (
    <div id="container">
      <div className="mt-6">
        <Breadcrumbs>
          {navData.map((item, idx) => {
            return (
              <div
                href={item.href}
                key={idx}
                style={{ fontFamily: "IranSans" }}
                className="text-[16px]"
              >
                {item.name}
              </div>
            );
          })}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Nav;
