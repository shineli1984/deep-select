import React from 'react';
import { assoc, compose, propEq, objOf } from "ramda";
import { connect } from "react-redux";
import CarModel from "./CarModel";
import ModelLink from './RouteModelLinkContainer';
import getMatchParamsId from '../utils/getMatchParamsId';
import findPropEqIdInDataModels from '../utils/findPropEqIdInDataModels';

export default connect((state, props) =>
  compose(
    assoc(
      'modelLink',
      <ModelLink />
    ),
    objOf("model"),
    findPropEqIdInDataModels(state),
    parseInt,
    getMatchParamsId,
  )(props)
)(CarModel);
