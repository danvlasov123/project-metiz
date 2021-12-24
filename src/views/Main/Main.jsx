import React from "react";

import Advantages from "./Advantages/Advantages";
import Application from "./Application/Application";
import Banner from "./Banner/Banner";
import Brock from "./Brock/Brock";
import Catalog from "./Catalog/Catalog";
import News from "./News/News";
import Suppliers from "./Suppliers/Suppliers";

function Main() {
  return (
    <React.Fragment>
      <Banner />
      <Application />
      <Catalog />
      <Brock />
      <Advantages />
      <News />
      <Suppliers />
    </React.Fragment>
  );
}

export default Main;
