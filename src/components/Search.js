import React from "react";
import {Link} from 'react-router-dom'
import CarMakeSelect from "./CarMakeSelectContainer";
import CarModelSelect from "./CarModelSelectContainer";

export default ({model}) => (
  <React.Fragment>
    <CarMakeSelect />
    <CarModelSelect />
    <Link to={`/make/model/${model}`}>
      <button disabled={!model}>view</button>
    </Link>
  </React.Fragment>
);
