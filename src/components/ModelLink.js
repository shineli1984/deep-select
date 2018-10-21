import React from 'react';
import { Link } from 'react-router-dom'

export default ({ model, plain = false }) =>
  plain &&
  <div>{model.name}</div> ||

  <Link to={`/make/model/${model.id}`}>
    {model.name}
  </Link>;
